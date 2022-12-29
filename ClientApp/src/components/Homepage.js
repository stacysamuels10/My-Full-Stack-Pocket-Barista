import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import blkandbold from "../assets/blkandbold.png";
import driftaway from "../assets/driftaway.jpeg";
import nostalgia from "../assets/nostalgia.png";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";

const Homepage = () => {
  const navigate = useNavigate();
  const cups = useSelector((state) => state.brewedCupReducer.pastBrews);
  const coffee = useSelector((state) => state.coffeeReducer.pastCoffeeBags);
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
          <h1>Welcome to Pocket Barista</h1>
        </Grid>
      </Grid>
      <FormControl
        variant="standard"
        sx={{
          m: 1,
          minWidth: 120,
          backgroundColor: "#FBFFFE",
          color: "#001514",
        }}
      >
        <InputLabel id="demo-simple-select-standard-label">Add</InputLabel>
        <Select
          className="dropdown"
          name="add"
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Add"
          onChange={(e) => {
            window.location.href = e.target.value;
          }}
        >
          <MenuItem value="/addnewbrew"> New Brew</MenuItem>
          <MenuItem value="/addnewcoffee">New Coffee</MenuItem>
          <MenuItem value="/addnewbrewer">New Brewer</MenuItem>
          <MenuItem value="/addnewgrinder">New Grinder</MenuItem>
        </Select>
      </FormControl>

      <div className="brewHistory">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Most Recent Brews</Typography>
          </AccordionSummary>
          {cups
            .filter((cup, index) => index < 5)
            .map((cup, index) => (
              <Card className="past-cup">
                <div className="left-side">
                  <p>{cup.brewedCup.setup.brewer}</p>
                  <p>{cup.brewedCup.setup.coffee}</p>
                </div>
                <div className="right-side">
                  <p>{cup.brewedCup.brew.waterAmount}</p>
                  <p>{cup.brewedCup.setup.dateOfBrew}</p>
                </div>
                <Rating
                  name="read-only"
                  value={cup.brewedCup.brew.rating}
                  readOnly
                />
                <Button
                  variant="outlined"
                  className="moreInfoButton"
                  disableElevation
                  onClick={() => navigate(`/cups/${index}`)}
                >
                  More Info
                </Button>
              </Card>
            ))}
        </Accordion>
      </div>
      <div className="brewHistory">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Coffee Pantry</Typography>
          </AccordionSummary>
          {coffee
            .filter((bag, index) => index < 5)
            .map((bag, index) => (
              <Card className="past-cup">
                <div className="left-side">
                  <p>{bag.bagOfCoffee.about.name}</p>
                  <p>{bag.bagOfCoffee.about.roaster}</p>
                </div>
                <div className="right-side">
                  <p>{bag.bagOfCoffee.details.roastLevel}</p>
                  <p>{bag.bagOfCoffee.details.beanProcess}</p>
                </div>
                <Rating
                  name="read-only"
                  value={bag.bagOfCoffee.about.rating}
                  readOnly
                />
                <Button
                  variant="outlined"
                  disableElevation
                  onClick={() => navigate(`/coffee/${index}`)}
                >
                  More Info
                </Button>
              </Card>
            ))}
        </Accordion>
      </div>
      <div className="brewGuides">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Brew Guides</Typography>
          </AccordionSummary>
          <div className="brewguidescards">
            <Card variant="outlined">
              <Button
                variant="contained"
                disableElevation
                onClick={() => navigate("/aeropressguide")}
              >
                Aeropress
              </Button>
            </Card>
            <Card variant="outlined">
              <Button
                variant="contained"
                disableElevation
                onClick={() => navigate("/chemexguide")}
              >
                Chemex
              </Button>
            </Card>
            <Card variant="outlined">
              <Button
                variant="contained"
                disableElevation
                onClick={() => navigate("/coldbrewguide")}
              >
                Cold Brew
              </Button>
            </Card>
            <Card variant="outlined">
              <Button
                variant="contained"
                disableElevation
                onClick={() => navigate("/espressoguide")}
              >
                Espresso
              </Button>
            </Card>
            <Card variant="outlined">
              <Button
                variant="contained"
                disableElevation
                onClick={() => navigate("/staggguide")}
              >
                Fellow Stagg Pour Over
              </Button>
            </Card>
            <Card variant="outlined">
              <Button
                variant="contained"
                disableElevation
                onClick={() => navigate("/frenchpressguide")}
              >
                French Press
              </Button>
            </Card>
            <Card variant="outlined">
              <Button
                variant="contained"
                disableElevation
                onClick={() => navigate("/mokapotguide")}
              >
                Moka Pot
              </Button>
            </Card>
            <Card variant="outlined">
              <Button
                variant="contained"
                disableElevation
                onClick={() => navigate("/v60guide")}
              >
                V60 Pour Over
              </Button>
            </Card>
          </div>
        </Accordion>
      </div>
      <div className="coffeeOfTheMonth">
        <h2>Coffees of the Month</h2>
        <a href="https://blkandbold.com/">
          <img src={blkandbold} alt="Black and Bold coffee" />
        </a>
        <a href="https://driftaway.coffee/">
          <img src={driftaway} alt="Driftaway coffee" />
        </a>
        <a href="https://nostalgiacoffeeroasters.com/">
          <img src={nostalgia} alt="nostalgia coffee" />
        </a>
      </div>
      <div className="featuredGuides">
        <h2>Featured Guides</h2>
        <Button
          variant="contained"
          disableElevation
          onClick={() => navigate("/aeropressguide")}
        >
          Aeropress
        </Button>
        <Button
          variant="contained"
          disableElevation
          onClick={() => navigate("/mokapotguide")}
        >
          Moka Pot
        </Button>
        <Button
          variant="contained"
          disableElevation
          onClick={() => navigate("/coldbrewguide")}
        >
          Cold Brew
        </Button>
      </div>
    </div>
  );
};

export default Homepage;
