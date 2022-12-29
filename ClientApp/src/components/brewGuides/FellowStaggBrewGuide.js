import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const FellowStaggBrewGuide = () => {
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
            <h1>Stagg Brewer</h1>
            <p>A modern twist on the classic filter.</p>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={6}>
              <h2>Grind size</h2>
              <h4>Medium-Fine</h4>
              <p>Similar to table salt or just slightly smaller.</p>
            </Grid>
            <Grid item xs={6}>
              <h2>Equipment</h2>
              <h4>Stagg X Filter</h4>
              <h4>Stagg X Filter Paper</h4>
              <h4>Kettle</h4>
            </Grid>
            <h2>Method</h2>
          </Grid>
          <Grid item>
            <h4>Grind Coffee</h4>
            <p>Grind 20g of coffee.</p>
          </Grid>
          <Grid item>
            <h4>Heat Water</h4>
            <p>Heat the water to 208 F.</p>
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
            <p>Pour 20g of coffee into the brewer.</p>
          </Grid>
          <Grid item>
            <h4>Pour Water</h4>
            <p>Pour 40g of water into the brewer in a spiral motion.</p>
          </Grid>
          <Grid item>
            <h4>Bloom</h4>
            <p>Allow the coffee to bloom for 45 seconds.</p>
          </Grid>
          <Grid item>
            <h4>Pour Water</h4>
            <p>
              Gently pour 110 grams of water into the brewer in a spiral motion.
            </p>
          </Grid>
          <Grid item>
            <h4>Wait</h4>
            <p>
              Wait for about 40 seconds for more of the water to drain through.
            </p>
          </Grid>
          <Grid item>
            <h4>Pour Water</h4>
            <p>
              Gently pour 150 grams of water into the brewer in a spiral motion.
            </p>
          </Grid>
          <Grid item>
            <h4>Wait</h4>
            <p>Wait for the rest of the water to drain through.</p>
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

export default FellowStaggBrewGuide;
