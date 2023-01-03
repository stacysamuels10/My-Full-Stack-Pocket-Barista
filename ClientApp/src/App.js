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
import React, { useEffect, useState } from 'react';
import { InitialGrinderState } from './actions/addNewGrinderFunctions';
import { InitialBrewerState } from './actions/addNewBrewerFunctions';
import { InitialCoffeeState } from './actions/addNewCoffeeFunctions';
import { InitialBrewedCupState } from './actions/addNewCupFunctions';

import './custom.css';
import { useDispatch, useSelector } from "react-redux";

function App()
{
  const userId = useSelector((state) => state.loginReducer.login.id);
  const UserLog = useSelector((state) => state.loginReducer.loggedBool);
  const dispatch = useDispatch();

  const loadGrinderStates = async () => {
    const GrinderResult = await fetch(`https://localhost:7003/api/GrinderItems/all/${userId}`, {
      method: "GET",
    });
    const GrinderData = await GrinderResult.json();
    InitialGrinderState(dispatch, GrinderData);
  }
  const loadBrewerStates = async () => { 
    const BrewerResult = await fetch(`https://localhost:7003/api/BrewerItems/all/${userId}`, {
      method: "GET",
    });
    const BrewerData = await BrewerResult.json();
    InitialBrewerState(dispatch, BrewerData);
  }
  const loadCoffeeBagStates = async () => {
    const CofeeBagResult = await fetch(`https://localhost:7003/api/CoffeeBagItems/all/${userId}`, {
      method: "GET",
    });
    const CoffeeBagData = await CofeeBagResult.json();
    InitialCoffeeState(dispatch, CoffeeBagData);
  }
  const loadBrewedCupStates = async () => {
    const BrewedCupResult = await fetch(`https://localhost:7003/api/BrewedCupItems/all/${userId}`, {
      method: "GET",
    });
    const BrewedCupData = await BrewedCupResult.json();
    InitialBrewedCupState(dispatch, BrewedCupData);
  }

  useEffect(() => {
    if (UserLog === true) {
      loadGrinderStates();
      loadBrewerStates();
      loadCoffeeBagStates();
      loadBrewedCupStates();
    }
  }, []);


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
          <BrowserRouter>
            <div className="App">
            <Routes>
              <Route path="/" element={UserLog ? <Homepage /> : <LoginForm /> }></Route>
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
            </div>
            <BottomNavigation>
            {UserLog ? <div><Paper
              sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
              }}
              elevation={10}
            > <NavBar /> </Paper> </div> : null
              }
            </BottomNavigation>
          </BrowserRouter>
      </ThemeProvider>
    );
  }


export default App;