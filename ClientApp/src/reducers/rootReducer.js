import { combineReducers } from "redux";
import grinderReducer from "./grinderReducer";
import brewedCupReducer from "./brewedCupReducer";
import brewerReducer from "./brewerReducer";
import coffeeReducer from "./coffeeReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  grinderReducer: grinderReducer,
  brewedCupReducer: brewedCupReducer,
  brewerReducer: brewerReducer,
  coffeeReducer: coffeeReducer,
  loginReducer: loginReducer
});

export default rootReducer;
