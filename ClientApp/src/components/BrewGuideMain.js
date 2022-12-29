import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const BrewGuideMain = () => {
  const navigate = useNavigate();
  return (
    <div className="brew-guides">
      <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          sx={{ backgroundColor: "#001514", color: "#FBFFFE", width: "100%" }}
        >
          <h1>Guides</h1>
        </Grid>
        <Paper elevation={0}>
          <Button
            variant="contained"
            disableElevation
            onClick={() => navigate("/aeropressguide")}
          >
            Aeropress
          </Button>
          <p>Smooth, easy brews.</p>
        </Paper>
        <Paper elevation={0}>
          <Button
            variant="contained"
            disableElevation
            onClick={() => navigate("/chemexguide")}
          >
            Chemex
          </Button>
          <p>A classic way to brew.</p>
        </Paper>
        <Paper elevation={0}>
          <Button
            variant="contained"
            disableElevation
            onClick={() => navigate("/coldbrewguide")}
          >
            Cold Brew
          </Button>
          <p>A warm weather favorite.</p>
        </Paper>
        <Paper elevation={0}>
          <Button
            variant="contained"
            disableElevation
            onClick={() => navigate("/espressoguide")}
          >
            Espresso
          </Button>
          <p>
            Wonderful coffee, fast, using a semi-automatic espresso machine.
          </p>
        </Paper>
        <Paper elevation={0}>
          <Button
            variant="contained"
            disableElevation
            onClick={() => navigate("/staggguide")}
          >
            Fellow Stagg Pour Over
          </Button>
          <p>A modern twist on the classic filter.</p>
        </Paper>
        <Paper elevation={0}>
          <Button
            variant="contained"
            disableElevation
            onClick={() => navigate("/frenchpressguide")}
          >
            French Press
          </Button>
          <p>Lovely immersion brewing.</p>
        </Paper>
        <Paper elevation={0}>
          <Button
            variant="contained"
            disableElevation
            onClick={() => navigate("/mokapotguide")}
          >
            Moka Pot
          </Button>
          <p>The Italian way.</p>
        </Paper>
        <Paper elevation={0}>
          <Button
            variant="contained"
            disableElevation
            onClick={() => navigate("/v60guide")}
          >
            V60 Pour Over
          </Button>
          <p>The particular pour over.</p>
        </Paper>
      </Grid>
    </div>
  );
};

export default BrewGuideMain;
