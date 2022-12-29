import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {
  NewCoffeeState,
  setName,
  setRoaster,
  setOrigin,
  setCoffeeRating,
  setBeanType,
  setRoastLevel,
  setBeanProcess,
  setBagAmount,
  setRoastDate,
  setBagNotes,
} from "../../actions/addNewCoffeeFunctions";

const handleClick = (dispatch, bagOfCoffee, navigate) => {
  NewCoffeeState(dispatch, bagOfCoffee);
  navigate("/");
};

const AddNewCoffee = () => {
  const setCoffeeStar = (e, newValue) => {
    setValue(newValue);
    setCoffeeRating(dispatch, e.target.value);
  };
  const [dayValue, setDayValue] = React.useState(dayjs("2022-09-01T21:11:54"));
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bagOfCoffee = useSelector((state) => state.coffeeReducer.bagOfCoffee);
  return (
    <div>
      <Box className="aeropress">
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            sx={{ backgroundColor: "#001514", color: "#FBFFFE", width: "100%" }}
          >
            <h1>Add a New Bag of Coffee</h1>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => handleClick(dispatch, bagOfCoffee, navigate)}
            >
              Save
            </Button>
          </Grid>
          <Grid item>
            <h3>About</h3>
          </Grid>
          <Grid item>
            <TextField
              id="filled-basic"
              label="Name"
              variant="filled"
              onChange={(e) => setName(dispatch, e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              id="filled-basic"
              label="Roaster"
              variant="filled"
              onChange={(e) => setRoaster(dispatch, e.target.value)}
            />
          </Grid>{" "}
          <Grid item>
            <TextField
              id="filled-basic"
              label="Origin"
              variant="filled"
              onChange={(e) => setOrigin(dispatch, e.target.value)}
            />{" "}
          </Grid>{" "}
          <Grid item>
            <Rating
              name="simple-controlled"
              value={value}
              size="large"
              onChange={(e, newValue) => setCoffeeStar(dispatch, newValue)}
            />
          </Grid>{" "}
          <Grid item>
            <h3>Details</h3>
          </Grid>{" "}
          <Grid item>
            <TextField
              id="filled-basic"
              label="Whole or Ground"
              variant="filled"
              onChange={(e) => setBeanType(dispatch, e.target.value)}
            />
          </Grid>{" "}
          <Grid item>
            <TextField
              id="filled-basic"
              label="Roast Type"
              variant="filled"
              onChange={(e) => setRoastLevel(dispatch, e.target.value)}
            />{" "}
          </Grid>{" "}
          <Grid item>
            <TextField
              id="filled-basic"
              label="Process"
              variant="filled"
              onChange={(e) => setBeanProcess(dispatch, e.target.value)}
            />
          </Grid>{" "}
          <Grid item>
            <TextField
              id="filled-basic"
              label="Amount (oz)"
              variant="filled"
              onChange={(e) => setBagAmount(dispatch, e.target.value)}
            />{" "}
          </Grid>{" "}
          <Grid item>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Roast Date"
                value={dayValue}
                inputFormat="MM/DD/YYYY"
                onChange={(selectedDate) => {
                  setDayValue(selectedDate);
                  const formattedDate = String(selectedDate.$d).slice(0, 15);
                  setRoastDate(dispatch, formattedDate);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>{" "}
          <Grid item>
            <TextField
              id="outlined-textarea"
              label="Notes"
              placeholder="Notes"
              multiline
              onChange={(e) => setBagNotes(dispatch, e.target.value)}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AddNewCoffee;
