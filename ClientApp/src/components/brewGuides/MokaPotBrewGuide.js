import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const MokaPotBrewGuide = () => {
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
            <h1>Moka Pot</h1>
            <p>The Italian way.</p>
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
              <h4>Moka Pot</h4>
              <h4>Kettle</h4>
              <h4>Cold towel</h4>
            </Grid>
            <h2>Method</h2>
          </Grid>
          <Grid item>
            <h4>Heat Water</h4>
            <p>Heat water to boiling and remove from heat</p>
          </Grid>
          <Grid item>
            <h4>Grind Coffee</h4>
            <p>Grind 16g of coffee.</p>
          </Grid>
          <Grid item>
            <h4>Prepare Pot</h4>
            <p>
              Add the heated water and fill to the line in the bottom of the
              brewer.
            </p>
          </Grid>
          <Grid item>
            <h4>Insert Filter</h4>
            <p>Insert the filter basket into the brewer bottom.</p>
          </Grid>
          <Grid item>
            <h4>Pour Coffee</h4>
            <p>
              Fill the filter basket with coffee, slightly mounded and level off
              with your finger.
            </p>
          </Grid>
          <Grid item>
            <h4>Screw Moka Pot</h4>
            <p>
              Screw the top and bottom together carefully. Use hot pads and
              don't over tighten.
            </p>
          </Grid>
          <Grid item>
            <h4>Heat Pot</h4>
            <p>
              Put the brewer on the stove, use medium heat and make sure that
              the handle is not subjected to direct heat. Leave the top lid
              open.
            </p>
          </Grid>
          <Grid item>
            <h4>Wait</h4>
            <p>
              The coffee will begin to come out and you will hear a puffing
              round and see a rich-brown steam. Once steam is color of yellow
              honey, remove from heat source with hot pads and close the lid.
            </p>
          </Grid>
          <Grid item>
            <h4>Stop Brew</h4>
            <p>
              Wrap the bottom of the pot in a cold towel or run under cold tap
              water to stop extraction.
            </p>
          </Grid>
          <Grid item>
            <h4>Serve</h4>
            <p>Pour into cups and serve your coffee. Enjoy!</p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MokaPotBrewGuide;
