import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

const Data = () => {
  const coffeeCounter = useSelector(
    (state) => state.coffeeReducer.coffeeCounter
  );
  const cupCounter = useSelector((state) => state.brewedCupReducer.cupCounter);
  const brewerCounter = useSelector(
    (state) => state.brewerReducer.brewerCounter
  );
  const grinderCounter = useSelector(
    (state) => state.grinderReducer.grinderCounter
  );
  return (
    <div className="data-main">
      <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          sx={{ backgroundColor: "#001514", color: "#FBFFFE", width: "100%" }}
        >
          <h1>Data</h1>
        </Grid>
        <Grid item xs={9}>
          <Link to="/coffee" color="#6b0504">
            Coffee
          </Link>
          <p>{coffeeCounter}</p>
        </Grid>
        <Grid item xs={9}>
          <Link to="/cups">Brews</Link>
          <p>{cupCounter}</p>
        </Grid>
        <Grid item xs={9}>
          <Link to="/brewers">Brewers</Link>
          <p>{brewerCounter}</p>
        </Grid>
        <Grid item xs={9}>
          <Link to="/grinders">Grinders</Link>
          <p>{grinderCounter}</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Data;
