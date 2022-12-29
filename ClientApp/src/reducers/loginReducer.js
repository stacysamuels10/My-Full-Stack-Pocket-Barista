const initialState = {
  login: {
    id: "",
    email: "",
    username: "",
    password: "",
    }
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, login: { id: action?.payload.id, email: action?.payload.email, username: action?.payload.username, password: action?.payload.password}}
      case "SET_EMAIL":
        return { ...state, login: { ...state.login, email: action?.payload } };
      case "SET_USERNAME":
        return { ...state, login: { ...state.login, username: action?.payload } };
      case "SET_PASSWORD":
        return { ...state, login: { ...state.login, password: action?.payload } };
      default:
        return state;
    }
  };
  
  export default loginReducer;
  