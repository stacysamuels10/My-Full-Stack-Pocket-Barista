export const NewBrewState = (dispatch, brewedCup) => {
  dispatch({ type: "SET_BREWED_CUP", payload: brewedCup });
};

export const setCoffee = (dispatch, text) => {
  dispatch({ type: "SET_CUP_COFFEE_NAME", payload: text });
};

export const setGrinder = (dispatch, text) => {
  dispatch({ type: "SET_CUP_GRINDER_NAME", payload: text });
};

export const setBrewer = (dispatch, text) => {
  dispatch({ type: "SET_CUP_BREWER_NAME", payload: text });
};

export const setDate = (dispatch, text) => {
  dispatch({ type: "SET_CUP_DATE", payload: text });
};

export const setGroundsAmount = (dispatch, text) => {
  dispatch({ type: "SET_GROUNDS_AMOUNT", payload: text });
};

export const setGrindSetting = (dispatch, text) => {
  dispatch({ type: "SET_GRIND_SETTING", payload: text });
};

export const setWaterAmount = (dispatch, text) => {
  dispatch({ type: "SET_WATER_AMOUNT", payload: text });
};

export const setWaterTemperature = (dispatch, text) => {
  dispatch({ type: "SET_WATER_TEMP", payload: text });
};

export const setBrewTime = (dispatch, text) => {
  dispatch({ type: "SET_BREW_TIME", payload: text });
};

export const setRating = (dispatch, text) => {
  dispatch({ type: "SET_RATING", payload: text });
};

export const setNotes = (dispatch, text) => {
  dispatch({ type: "SET_NOTES", payload: text });
};
