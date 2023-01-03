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

const AddNewCoffee = () => {
  const userId = useSelector((state) => state.loginReducer.login.id);
  const [value, setValue] = React.useState(0);
  const setCoffeeStar = (dispatch, e) => {
    setValue((prev) => parseInt(e));
    setCoffeeRating(dispatch, value);
  };
  const [dayValue, setDayValue] = React.useState(dayjs("2023-01-01T21:11:54"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bagOfCoffee = useSelector((state) => state.coffeeReducer.bagOfCoffee);

  const handleClick = async (dispatch, bagOfCoffee, navigate, userId) => {
    const result = await fetch("https://localhost:7003/api/CoffeeBagItems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        User_Id: userId,
        Coffee_Name: bagOfCoffee.about.name,
        Roaster_Name: bagOfCoffee.about.roaster,
        Bean_Origin: bagOfCoffee.about.origin,
        User_Rating: bagOfCoffee.about.rating,
        Bean_Type: bagOfCoffee.details.beanType,
        Roast_Level: bagOfCoffee.details.roastLevel,
        Bean_Process: bagOfCoffee.details.beanProcess,
        Bag_Size: bagOfCoffee.details.bagAmount,
        Roast_Date: bagOfCoffee.details.roastDate,
        notes: bagOfCoffee.notes,
      }),
    });
    const data = await result.json();
    console.log("Data", data);
    NewCoffeeState(dispatch, data);
    navigate("/");
    window.location.reload();
  };

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
              onClick={() => handleClick(dispatch, bagOfCoffee, navigate, userId)}
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
              onChange={(e) => setCoffeeStar(dispatch, e.target.value)}
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
              label="Roast Level"
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
