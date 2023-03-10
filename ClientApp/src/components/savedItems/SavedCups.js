import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Divider from "@mui/material/Divider";
import { useEffect } from 'react';

const SavedCups = () => {
  const navigate = useNavigate();
  const cups = useSelector((state) => state.brewedCupReducer.pastBrews);

  useEffect (() => {
    console.log(cups);
  }, []);

  const handleDelete = async (date) => {
    const result = await fetch(`https://localhost:7003/api/BrewedCupItems/${date}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const status = result.status;
    if (status === 400) {
      alert("Brewed Cup cannot be deleted at this time, please try again")
    } else {
      window.location.reload();
    }
  }
  return (
    <div>
      <h1>Past Brews</h1>
      <Divider />
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <div className="past-cups">
          {cups.map((cup, index) => (
            <Grid item xs={12} >
              <Grid
                key={cup.brewedCup.setup.dateOfBrew}
                container
                spacing={0}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={6}>
                  <p>{cup.brewedCup.setup.coffee}</p>
                  <p>{cup.brewedCup.setup.brewer}</p>
                </Grid>
                <Grid item xs={6}>
                  <p>{cup.brewedCup.brew.waterAmount} g</p>
                  <p>{cup.brewedCup.setup.dateOfBrew}</p>
                </Grid>
                <Grid container justifyContent="space-around">
                  <Rating
                    name="read-only"
                    value={cup.brewedCup.brew.rating}
                    readOnly
                  />
                  <Button onClick={() => navigate(`/cups/${index}`, index)}>
                    More Info
                  </Button>
                  <IconButton aria-label="delete" size="large" onClick={() => handleDelete(cup.brewedCup.setup.dateOfBrew)}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Divider />
            </Grid>
          ))}
        </div>
        <div className="add-new">
          <Button onClick={() => navigate("/addnewbrew")}>Add New Brew</Button>
        </div>
      </Grid>
    </div>
  );
};

export default SavedCups;
