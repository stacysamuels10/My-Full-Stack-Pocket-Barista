import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        backgroundColor="#001514"
        color="#FBFFFE"
      >
        <Grid item>
          <h1>PAGE NOT FOUND</h1>
        </Grid>
      </Grid>
      <Button size="large" variant="contained" onClick={() => navigate("/")}>
        HOME
      </Button>
    </div>
  );
};

export default PageNotFound;
