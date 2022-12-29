import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import Rating from "@mui/material/Rating";

const ViewCup = () => {
  let path = window.location.pathname;
  let index = Number(path.replace(/\D/g, ""));
  const cup = useSelector((state) => state.brewedCupReducer.pastBrews[index]);
  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <h2>{cup.brewedCup.setup.dateOfBrew}</h2>
        <Rating name="read-only" value={cup.brewedCup.brew.rating} readOnly />
        <p>
          <strong>Coffee: </strong>
          {cup.brewedCup.setup.coffee}
        </p>
        <p>
          <strong>Brewer: </strong>
          {cup.brewedCup.setup.brewer}
        </p>
        <p>
          <strong>Grinder: </strong>
          {cup.brewedCup.setup.grinder}
        </p>
        <p>
          <strong>Grind Setting: </strong>
          {cup.brewedCup.brew.grindSetting}
        </p>
        <p>
          <strong>Coffee Grounds Amount: </strong>
          {cup.brewedCup.brew.groundsAmount}
        </p>
        <p>
          <strong>Water Amount: </strong>
          {cup.brewedCup.brew.waterAmount}
        </p>
        <p>
          <strong>Water Temperature: </strong>
          {cup.brewedCup.brew.waterTemperature}
        </p>
        <p>
          <strong>Brew Time: </strong>
          {cup.brewedCup.brew.brewTime}
        </p>
        <p>
          <strong>Notes: </strong>
          {cup.brewedCup.notes}
        </p>
      </Grid>
    </div>
  );
};

export default ViewCup;
