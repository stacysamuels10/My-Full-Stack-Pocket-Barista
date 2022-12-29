import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  NewGrinderState,
  setGrinderName,
  setGrinderBrand,
} from "../../actions/addNewGrinderFunctions";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const handleClick = (dispatch, grinder, navigate) => {
  NewGrinderState(dispatch, grinder);
  navigate("/");
};

const AddNewGrinder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const grinder = useSelector((state) => state.grinderReducer.grinder);
  return (
    <div>
      <Box className="aeropress">
        <Grid
          container
          spacing={3}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            sx={{ backgroundColor: "#001514", color: "#FBFFFE", width: "100%" }}
          >
            <h1>Add a Grinder</h1>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => handleClick(dispatch, grinder, navigate)}
            >
              Save
            </Button>
          </Grid>
          <Grid item>
            <TextField
              id="filled-basic"
              label="Name"
              variant="filled"
              onChange={(e) => setGrinderName(dispatch, e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              id="filled-basic"
              label="Brand"
              variant="filled"
              onChange={(e) => setGrinderBrand(dispatch, e.target.value)}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AddNewGrinder;
