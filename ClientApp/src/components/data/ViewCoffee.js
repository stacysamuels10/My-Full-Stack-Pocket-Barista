import React from "react";
import { useSelector } from "react-redux";
import Rating from "@mui/material/Rating";
import { Grid } from "@mui/material";

const ViewCoffee = () => {
  let path = window.location.pathname;
  let index = Number(path.replace(/\D/g, ""));
  const bag = useSelector((state) => state.coffeeReducer.pastCoffeeBags[index]);
  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <h1>{bag.bagOfCoffee.about.name}</h1>
        <p>
          <strong>Roaster:</strong> {bag.bagOfCoffee.about.roaster}
        </p>
        <p>
          <strong>Origin:</strong> {bag.bagOfCoffee.about.origin}
        </p>
        <Rating
          name="read-only"
          value={bag.bagOfCoffee.about.rating}
          readOnly
        />
        <p>
          <strong>Bean Type: </strong>
          {bag.bagOfCoffee.details.beanType}
        </p>
        <p>
          <strong>Roast Level: </strong>
          {bag.bagOfCoffee.details.roastLevel}
        </p>
        <p>
          <strong>Bean Process: </strong>
          {bag.bagOfCoffee.details.beanProcess}
        </p>
        <p>
          <strong>Bag Size: </strong>
          {bag.bagOfCoffee.details.bagAmount}
        </p>
        <p>
          <strong>Roast Date: </strong>
          {bag.bagOfCoffee.details.roastDate}
        </p>
        <p>
          <strong>Notes: </strong>
          {bag.bagOfCoffee.notes}
        </p>
      </Grid>
    </div>
  );
};

export default ViewCoffee;
