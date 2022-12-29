import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const ColdBrewBrewGuide = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Box className="aeropress">
        <Grid
          container
          spacing={0}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Button variant="contained" onClick={() => navigate("/")}>
              Home
            </Button>
            <h1>Cold Brew</h1>
            <p>A warm weather favorite.</p>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={6}>
              <h2>Grind size</h2>
              <h4>Smaller</h4>
              <p>Slightly finer than table salt.</p>
            </Grid>
            <Grid item xs={6}>
              <h2>Equipment</h2>
              <h4>Large jug or jar</h4>
              <h4>Preferred filter --V60 or Stagg XF work well here</h4>
              <h4>Filter Paper</h4>
              <h4>Kettle</h4>
            </Grid>
            <h2>Method</h2>
          </Grid>
          <Grid item>
            <h4>Grind Coffee</h4>
            <p>Grind 200g of coffee and place in your jug or jar.</p>
          </Grid>
          <Grid item>
            <h4>Add Water</h4>
            <p>Add 1L of cold water to the coffee.</p>
          </Grid>
          <Grid item>
            <h4>Mix</h4>
            <p>
              Mix with a spoon to break up any large chunks of coffee and ensure
              all grounds are soaked.
            </p>
          </Grid>
          <Grid item>
            <h4>Cover and Wait</h4>
            <p>
              Cover your jug and let sit at room temperature for 16-24 hours.
            </p>
          </Grid>
          <Grid item>
            <h4>Strain Coffee</h4>
            <p>Pour mixture through a filter.</p>
          </Grid>
          <Grid item>
            <h4>Enjoy!</h4>
            <p>
              Grab a glass, add some ice, and mix 1/3 of the cold brew
              concentrate with 2/3 ratio water.
            </p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ColdBrewBrewGuide;
