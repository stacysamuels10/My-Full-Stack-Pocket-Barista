import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/loginForm";
import NavBar from "./components/NavBar";
import PageNotFound from "./components/404PageNotFound";
import Homepage from "./components/Homepage";
import Data from "./components/data/Data";
import SavedCoffee from "./components/savedItems/SavedCoffees";
import SavedGrinders from "./components/savedItems/SavedGrinders";
import SavedBrewers from "./components/savedItems/SavedBrewers";
import SavedCups from "./components/savedItems/SavedCups";
import ViewCup from "./components/data/ViewCup";
import ViewCoffee from "./components/data/ViewCoffee";
import AddNewCup from "./components/addNew/AddNewCup";
import AddNewCoffee from "./components/addNew/AddNewCoffee";
import AddNewBrewer from "./components/addNew/AddNewBrewer";
import AddNewGrinder from "./components/addNew/AddNewGrinder";
import AeropressBrewGuide from "./components/brewGuides/AeropressBrewGuide";
import ChemexBrewGuide from "./components/brewGuides/ChemexBrewGuide";
import ColdBrewBrewGuide from "./components/brewGuides/ColdBrewBrewGuide";
import EspressoBrewGuide from "./components/brewGuides/EspressoBrewGuide";
import FellowStaggBrewGuide from "./components/brewGuides/FellowStaggBrewGuide";
import FrenchPressBrewGuide from "./components/brewGuides/FrenchPressBrewGuide";
import MokaPotBrewGuide from "./components/brewGuides/MokaPotBrewGuide";
import V60BrewGuide from "./components/brewGuides/V60BrewGuide";
import BrewGuideMain from "./components/BrewGuideMain";
import Paper from "@mui/material/Paper";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import React, { Component, useState } from 'react';

import './custom.css';
import { useDispatch, useSelector } from "react-redux";

function App()
{
  const [showLogin, setShowLogin] = useState(true);
  const dispatch = useDispatch();


  const theme = createTheme({
    status: {
      danger: "#e6af2e",
    },
    palette: {
      primary: {
        main: "#a3320b",
        darker: "#6b0504",
      },
      neutral: {
        main: "#fbfffe",
        contrastText: "#001514",
      },
    },
  });
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={showLogin ? <LoginForm /> : <Homepage /> }></Route>
              <Route path="*" element={<PageNotFound />}></Route>
              <Route path="/data" element={<Data />}></Route>
              <Route path="/coffee" element={<SavedCoffee />}></Route>
              <Route path="/coffee/:id" element={<ViewCoffee />}></Route>
              <Route path="/cups" element={<SavedCups />}></Route>
              <Route path="/cups/:id" element={<ViewCup />}></Route>
              <Route path="/grinders" element={<SavedGrinders />}></Route>
              <Route path="/brewers" element={<SavedBrewers />}></Route>
              <Route path="/addnewbrew" element={<AddNewCup />}></Route>
              <Route path="/addnewcoffee" element={<AddNewCoffee />}></Route>
              <Route path="/addnewbrewer" element={<AddNewBrewer />}></Route>
              <Route path="/addnewgrinder" element={<AddNewGrinder />}></Route>
              <Route
                path="/aeropressguide"
                element={<AeropressBrewGuide />}
              ></Route>
              <Route path="/chemexguide" element={<ChemexBrewGuide />}></Route>
              <Route
                path="/coldbrewguide"
                element={<ColdBrewBrewGuide />}
              ></Route>
              <Route
                path="/espressoguide"
                element={<EspressoBrewGuide />}
              ></Route>
              <Route
                path="/staggguide"
                element={<FellowStaggBrewGuide />}
              ></Route>
              <Route
                path="/frenchpressguide"
                element={<FrenchPressBrewGuide />}
              ></Route>
              <Route path="/mokapotguide" element={<MokaPotBrewGuide />}></Route>
              <Route path="/v60guide" element={<V60BrewGuide />}></Route>
              <Route path="/brewguides" element={<BrewGuideMain />}></Route>
            </Routes>
            <BottomNavigation>
              {showLogin ? null : <Paper
                sx={{
                  position: "fixed",
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
                elevation={10}
              >
                <NavBar />
              </Paper>}
            </BottomNavigation>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    );
  }


export default App;