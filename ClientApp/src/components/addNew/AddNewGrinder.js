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


const AddNewGrinder = () => {
  const userId = useSelector((state) => state.loginReducer.login.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const grinder = useSelector((state) => state.grinderReducer.grinder);

  const addGrinder = async (dispatch, grinder, navigate, userId) => {
    console.log(userId, grinder);
    const result = await fetch("https://localhost:7003/api/GrinderItems", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({
        User_Id: userId,
        Name: grinder.name,
        Brand: grinder.brand,
        }),
    });
    const data = await result.json();
    console.log(data);
  NewGrinderState(dispatch, data);
    navigate("/");
    window.location.reload();
};

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
              onClick={() => addGrinder(dispatch, grinder, navigate, userId)}
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
