import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";

const SavedCups = () => {
  const navigate = useNavigate();
  const cups = useSelector((state) => state.brewedCupReducer.pastBrews);
  return (
    <div>
      <h1>Past Brews</h1>
      <Divider />
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <div className="past-cups">
          {cups.map((cup, index) => (
            <Grid item xs={12}>
              <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={6}>
                  <p>{cup.brewedCup.setup.brewer}</p>
                  <p>{cup.brewedCup.setup.coffee}</p>
                </Grid>
                <Grid item xs={6}>
                  <p>{cup.brewedCup.brew.waterAmount}</p>
                  <p>{cup.brewedCup.setup.dateOfBrew}</p>
                </Grid>
                <Grid container justifyContent="space-around">
                  <Rating
                    name="read-only"
                    value={cup.brewedCup.brew.rating}
                    readOnly
                  />
                  <Button onClick={() => navigate(`/cups/${index}`)}>
                    More Info
                  </Button>
                  {/* <Button>Delete Brewer</Button> */}
                </Grid>
              </Grid>
              <Divider />
            </Grid>
          ))}
        </div>
        <div className="add-new">
          <Button onClick={() => navigate("/addnewbrew")}>Add New Brew</Button>
        </div>
      </Grid>
    </div>
  );
};

export default SavedCups;
