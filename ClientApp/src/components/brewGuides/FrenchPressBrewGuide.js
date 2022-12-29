import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const FrenchPressBrewGuide = () => {
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
            <h1>French Press</h1>
            <p>Lovely immersion brewing.</p>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={6}>
              <h2>Grind size</h2>
              <h4>Coarse</h4>
              <p>Like sand.</p>
            </Grid>
            <Grid item xs={6}>
              <h2>Equipment</h2>
              <h4>French Press</h4>
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
            <h4>Pour Coffee</h4>
            <p>Pour 16g of coffee into the brewer.</p>
          </Grid>
          <Grid item>
            <h4>Pour Water</h4>
            <p>Pour 200g of water into the brewer in a spiral motion.</p>
          </Grid>
          <Grid item>
            <h4>Wait</h4>
            <p>Wait for 30 seconds.</p>
          </Grid>
          <Grid item>
            <h4>Stir</h4>
            <p>Gently stir with a spoon. A couple quick twirls should do it.</p>
          </Grid>
          <Grid item>
            <h4>Plunge</h4>
            <p>
              Gently and evenly push down the plunger to just to the top of your
              coffee grounds.
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

export default FrenchPressBrewGuide;
