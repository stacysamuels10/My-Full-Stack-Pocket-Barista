import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";

const SavedCoffees = () => {
  const navigate = useNavigate();
  const coffee = useSelector((state) => state.coffeeReducer.pastCoffeeBags);
  return (
    <div>
      <h1> Coffee</h1>
      <Divider />
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <div className="past-coffee">
          {coffee.map((bag, index) => (
            <Grid item xs={12}>
              <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={6}>
                  <p>{bag.bagOfCoffee.about.name}</p>
                  <p>{bag.bagOfCoffee.about.roaster}</p>
                </Grid>
                <Grid item xs={6}>
                  <p>{bag.bagOfCoffee.details.roastLevel}</p>
                  <p>{bag.bagOfCoffee.details.beanProcess}</p>
                </Grid>
                <Grid container justifyContent="space-around">
                  <Rating
                    name="read-only"
                    value={bag.bagOfCoffee.about.rating}
                    readOnly
                  />
                  <Button onClick={() => navigate(`/coffee/${index}`, index)}>
                    More Info
                  </Button>
                  {/* <Button>Delete</Button> */}
                </Grid>
              </Grid>
              <Divider />
            </Grid>
          ))}
        </div>
        <Grid item xs={12}>
          <Button onClick={() => navigate("/addnewcoffee")}>
            Add New Coffee
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SavedCoffees;
