import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {
  NewBrewerState,
  setBrewerName,
  setBrewerBrand,
  setBrewerType,
} from "../../actions/addNewBrewerFunctions";
import { useNavigate } from "react-router-dom";

const handleClick = (dispatch, brewer, navigate) => {
  NewBrewerState(dispatch, brewer);
  navigate("/");
};

const AddNewBrewer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const brewer = useSelector((state) => state.brewerReducer.brewer);
  return (
    <div>
      <Box className="aeropress">
        <Grid
          container
          spacing={4}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            sx={{ backgroundColor: "#001514", color: "#FBFFFE", width: "100%" }}
          >
            <h1>Add New Brewer</h1>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => handleClick(dispatch, brewer, navigate)}
            >
              Save
            </Button>
          </Grid>
          <Grid item>
            <TextField
              id="filled-basic"
              label="Name"
              variant="filled"
              onChange={(e) => setBrewerName(dispatch, e.target.value)}
            />
          </Grid>{" "}
          <Grid item>
            <TextField
              id="filled-basic"
              label="Brand"
              variant="filled"
              onChange={(e) => setBrewerBrand(dispatch, e.target.value)}
            />
          </Grid>{" "}
          <Grid item>
            <TextField
              id="filled-basic"
              label="Type"
              variant="filled"
              onChange={(e) => setBrewerType(dispatch, e.target.value)}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AddNewBrewer;
