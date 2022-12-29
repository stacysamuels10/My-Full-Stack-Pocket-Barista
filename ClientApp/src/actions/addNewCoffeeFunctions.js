export const NewCoffeeState = (dispatch, bagOfCoffee) => {
  dispatch({ type: "SET_COFFEE_BAG", payload: bagOfCoffee });
};

export const setName = (dispatch, text) => {
  dispatch({ type: "SET_NAME", payload: text });
};

export const setRoaster = (dispatch, text) => {
  dispatch({ type: "SET_ROASTER", payload: text });
};

export const setOrigin = (dispatch, text) => {
  dispatch({ type: "SET_ORIGIN", payload: text });
};

export const setCoffeeRating = (dispatch, text) => {
  dispatch({ type: "SET_COFFEE_RATING", payload: text });
};

export const setBeanType = (dispatch, text) => {
  dispatch({ type: "SET_BEAN_TYPE", payload: text });
};

export const setRoastLevel = (dispatch, text) => {
  dispatch({ type: "SET_ROAST_LEVEL", payload: text });
};

export const setBeanProcess = (dispatch, text) => {
  dispatch({ type: "SET_BEAN_PROCESS", payload: text });
};

export const setBagAmount = (dispatch, text) => {
  dispatch({ type: "SET_BAG_AMOUNT", payload: text });
};

export const setRoastDate = (dispatch, text) => {
  dispatch({ type: "SET_ROAST_DATE", payload: text });
};

export const setBagNotes = (dispatch, text) => {
  dispatch({ type: "SET_BAG_NOTES", payload: text });
};
