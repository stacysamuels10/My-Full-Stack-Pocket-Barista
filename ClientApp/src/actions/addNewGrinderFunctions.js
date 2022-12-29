export const NewGrinderState = (dispatch, grinder) => {
  dispatch({ type: "SET_GRINDER", payload: grinder });
};

export const setGrinderName = (dispatch, text) => {
  dispatch({ type: "SET_NAME", payload: text });
};

export const setGrinderBrand = (dispatch, text) => {
  dispatch({ type: "SET_BRAND", payload: text });
};
