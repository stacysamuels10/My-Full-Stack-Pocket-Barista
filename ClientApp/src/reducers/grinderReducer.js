const initialState = {
  grinder: {
    name: "",
    brand: "",
  },
  grinderPantry: [],
  grinderCounter: 0,
};

const grinderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GRINDER":
      initialState.grinderPantry.unshift({ grinder: action.payload });
      state = initialState;
      let addedGrinder = (state.grinderCounter += 1);
      return { ...state, grinderCounter: addedGrinder };
    case "SET_INITIAL_GRINDER":
      let grinderCounter = 0;
      const grinderPantry = action.payload.map((grinder) => {
        grinderCounter += 1;
        return {
          grinder: {
            name: grinder.name,
            brand: grinder.brand
          }
        }
      });
      return { ...state, grinderCounter: grinderCounter, grinderPantry: grinderPantry };
    case "SET_NAME":
      return { ...state, grinder: { ...state.grinder, name: action.payload } };
    case "SET_BRAND":
      return { ...state, grinder: { ...state.grinder, brand: action.payload } };
    default:
      return state;
  }
};

export default grinderReducer;
