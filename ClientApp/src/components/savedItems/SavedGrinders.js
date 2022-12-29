import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const SavedGrinders = () => {
  const navigate = useNavigate();
  const grinders = useSelector((state) => state.grinderReducer.grinderPantry);
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
            <Grid item xs={12}>
              <h4>{grinder.grinder.name}</h4>
              <h4>{grinder.grinder.brand}</h4>
              {/* <button>Delete Brewer</button> */}
              <Divider />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default SavedGrinders;
