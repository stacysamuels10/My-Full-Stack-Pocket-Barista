export const NewBrewerState = (dispatch, grinder) => {
  dispatch({ type: "SET_BREWER", payload: grinder });
};

export const setBrewerName = (dispatch, text) => {
  dispatch({ type: "SET_BREWER_NAME", payload: text });
};

export const setBrewerBrand = (dispatch, text) => {
  dispatch({ type: "SET_BREWER_BRAND", payload: text });
};

export const setBrewerType = (dispatch, text) => {
  dispatch({ type: "SET_BREWER_TYPE", payload: text });
};
