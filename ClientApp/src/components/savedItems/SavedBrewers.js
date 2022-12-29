import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const SavedBrewers = () => {
  const navigate = useNavigate();
  const brewers = useSelector((state) => state.brewerReducer.brewerPantry);
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
              {/* <button>Delete Brewer</button> */}
              <Divider />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default SavedBrewers;
