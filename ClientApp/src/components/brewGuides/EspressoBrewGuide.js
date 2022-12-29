import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const EspressoBrewGuide = () => {
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
            <h1>Espresso</h1>
            <p>
              Wonderful coffee, fast, using a semi-automatic espresso machine.
            </p>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={6}>
              <h2>Grind size</h2>
              <h4>Fine</h4>
              <p>Similar to sugar.</p>
            </Grid>
            <Grid item xs={6}>
              <h2>Equipment</h2>
              <h4>Espresso Machine</h4>
              <h4>Tamper</h4>
            </Grid>
            <h2>Method</h2>
          </Grid>
          <Grid item>
            <h4>Grind Coffee</h4>
            <p>Grind 19g of coffee.</p>
          </Grid>
          <Grid item>
            <h4>Pour Coffee</h4>
            <p>Pour the coffee into the portafilter.</p>
          </Grid>
          <Grid item>
            <h4>Distribute</h4>
            <p>
              Put your finger flat on the portafilter and rotate until the
              coffee is equally spread out. Do this lightly without adding
              pressure.
            </p>
          </Grid>
          <Grid item>
            <h4>Tamp</h4>
            <p>
              Place the tamper into the portafilter, mae sure it is even, and
              apply pressure. Apply until you feel resistance.
            </p>
          </Grid>
          <Grid item>
            <h4>Insert</h4>
            <p>
              Insert your portafilter into the espresso machine and make sure
              its in securely.
            </p>
          </Grid>
          <Grid item>
            <h4>Brew</h4>
            <p>
              Place your cup under the brew head and push the single or double
              button on your machine.
            </p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default EspressoBrewGuide;
