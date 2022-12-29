import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const V60BrewGuide = () => {
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
            <h1>V60</h1>
            <p>The particular pour over.</p>
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
              <h4>V60</h4>
              <h4>Filter Paper</h4>
              <h4>Kettle</h4>
            </Grid>
            <h2>Method</h2>
          </Grid>
          <Grid item>
            <h4>Grind Coffee</h4>
            <p>Grind 13g of coffee.</p>
          </Grid>
          <Grid item>
            <h4>Fold Paper</h4>
            <p>
              Fold the filter paper along the line before putting it into the
              brewer.
            </p>
          </Grid>
          <Grid item>
            <h4>Heat Water</h4>
            <p>Heat the water to 205 F.</p>
          </Grid>
          <Grid item>
            <h4>Rinse Filter</h4>
            <p>
              Pour a little water through the paper to rinse the paper and warm
              the brewer, then pour this water out.
            </p>
          </Grid>
          <Grid item>
            <h4>Pour Coffee</h4>
            <p>Pour 13g of coffee into the brewer.</p>
          </Grid>
          <Grid item>
            <h4>Pour Water</h4>
            <p>
              Pour 40g of water into the brewer in a spiral motion from the
              outside to the center.
            </p>
          </Grid>
          <Grid item>
            <h4>Bloom</h4>
            <p>Allow the coffee to bloom for 40 seconds.</p>
          </Grid>
          <Grid item>
            <h4>Pour Water</h4>
            <p>
              Pour 40 grams of water into the brewer in a spiral motion and wait
              for it all to drip through.
            </p>
          </Grid>
          <Grid item>
            <h4>Pour Water</h4>
            <p>
              Pour 70 grams of water into the brewer in a spiral motion and wait
              for it all to drip through.
            </p>
          </Grid>
          <Grid item>
            <h4>Wait</h4>
            <p>Wait for about 3 minutes for the water to drain through.</p>
          </Grid>
          <Grid item>
            <h4>Serve</h4>
            <p>
              Remove the filter paper from the brewer and serve your coffee.
              Enjoy!
            </p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default V60BrewGuide;
