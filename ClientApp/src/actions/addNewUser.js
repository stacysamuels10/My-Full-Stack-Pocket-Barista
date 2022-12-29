export const NewUserState = (dispatch, userInfo) => {
    dispatch({ type: "SET_USER", payload: userInfo });
  };
  
  export const setEmail = (dispatch, text) => {
    dispatch({ type: "SET_EMAIL", payload: text });
};

export const setUsername = (dispatch, text) => {
  dispatch({ type: "SET_USERNAME", payload: text });
};
  
  export const setPassword = (dispatch, text) => {
    dispatch({ type: "SET_PASSWORD", payload: text });
  };