import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const SavedBrewers = () => {
  const navigate = useNavigate();
  const brewers = useSelector((state) => state.brewerReducer.brewerPantry);
  const handleDelete = async (name) => {
    const result = await fetch(`https://localhost:7003/api/BrewerItems/${name}`, {
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
      <div className="past-brewers">
        <h2>Brewers</h2>
        <Divider />
        <Button onClick={() => navigate("/addnewbrewer")}>
          Add New Brewer
        </Button>
        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {brewers.map((brewer) => (
            <Grid item xs={12}>
              <h4>{brewer.brewer.name}</h4>
              <h4>{brewer.brewer.brand}</h4>
              <h4>{brewer.brewer.type}</h4>
              <IconButton aria-label="delete" size="large" onClick={() => handleDelete(brewer.brewer.name)}>
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

export default SavedBrewers;
