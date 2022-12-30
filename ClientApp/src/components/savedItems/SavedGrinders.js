import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Divider from "@mui/material/Divider";

const SavedGrinders = () => {
  const navigate = useNavigate();
  const grinders = useSelector((state) => state.grinderReducer.grinderPantry);
  const handleDelete = async (name) => {
    const result = await fetch(`https://localhost:7003/api/GrinderItems/${name}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const status = result.status;
    if (status === 400) {
      alert("Grinder cannot be deleted at this time, please try again")
    } else {
      window.location.reload();
    }
  }
  return (
    <div>
      <div className="past-grinders">
        <h1>Grinders</h1>
        <Button onClick={() => navigate("/addnewgrinder")}>
          Add New Grinder
        </Button>
        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {grinders.map((grinder) => (
            <Grid item xs={12} key={grinder.name}>
              <h4>{grinder.grinder.name}</h4>
              <h4>{grinder.grinder.brand}</h4>
              <IconButton aria-label="delete" size="large" onClick={() => handleDelete(grinder.grinder.name)}>
                <DeleteIcon />
              </IconButton>
              <Divider />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default SavedGrinders;
