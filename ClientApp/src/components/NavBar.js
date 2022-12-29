import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ButtonGroup
        className="navBar"
        variant="text"
        aria-label="text button group"
      >
        <Button onClick={() => navigate("/")}>Home</Button>
        <Button onClick={() => navigate("/addnewbrew")}>New Brew</Button>
        <Button onClick={() => navigate("/brewguides")}>Guides</Button>
        <Button onClick={() => navigate("/data")}>Data</Button>
      </ButtonGroup>
    </div>
  );
};

export default NavBar;
