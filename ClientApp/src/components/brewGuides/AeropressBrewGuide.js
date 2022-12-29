import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const AeropressBrewGuide = () => {
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
            <h1>Aeropress</h1>
            <p>Smooth, easy brews.</p>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={6}>
              <h2>Grind size</h2>
              <h4>Medium</h4>
              <p>Similar to table salt.</p>
            </Grid>
            <Grid item xs={6}>
              <h2>Equipment</h2>
              <h4>Aeropress</h4>
              <h4>Kettle</h4>
            </Grid>
            <h2>Method</h2>
          </Grid>
          <Grid item>
            <h4>Grind Coffee</h4>
            <p>Grind 16g of coffee.</p>
          </Grid>
          <Grid item>
            <h4>Heat Water</h4>
            <p>Heat the water to 205 F.</p>
          </Grid>
          <Grid item>
            <h4>Insert Plunger</h4>
            <p>
              Insert the plunger into your Aeropress, until its on the four, and
              put it down, so the chamber is facing up.
            </p>
          </Grid>
          <Grid item>
            <h4>Prepare Filter</h4>
            <p>
              Prepare the filter and your cup by rinsing the paper with water.
            </p>
          </Grid>
          <Grid item>
            <h4>Pour Coffee</h4>
            <p>Pour 16g of coffee into the brewer.</p>
          </Grid>
          <Grid item>
            <h4>Pour Water</h4>
            <p>Pour until the coffee is covered.</p>
          </Grid>
          <Grid item>
            <h4>Bloom</h4>
            <p>Allow the coffee to bloom for 20 seconds.</p>
          </Grid>
          <Grid item>
            <h4>Stir</h4>
            <p>Gently stir with a spoon. A couple quick twirls should do it.</p>
          </Grid>
          <Grid item>
            <h4>Pour Water</h4>
            <p>Pour 120g of water into the brewer in a spiral motion.</p>
          </Grid>
          <Grid item>
            <h4>Wait</h4>
            <p>Wait for 210 seconds.</p>
          </Grid>
          <Grid item>
            <h4>Flip</h4>
            <p>
              Screw in the end cap with the filter paper inserted, place your
              cup on the end of the brewer and flip.
            </p>
          </Grid>
          <Grid item>
            <h4>Plunge</h4>
            <p>
              Plunge down with an even pressure, and stop when you hear a change
              in the sound, similar to a hiss.
            </p>
          </Grid>
          <Grid item>
            <h4>Serve</h4>
            <p>Serve your coffee and enjoy!</p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AeropressBrewGuide;
