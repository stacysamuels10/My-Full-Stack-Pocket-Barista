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
      let initialaddedGrinder = (state.grinderCounter += 1);
      return { ...state, grinderCounter: addedGrinder };
    case "SET_INITIAL_GRINDER":
      let addedGrinder = state.grinderCounter;
      for (const grinder of action.payload) {
        const actionGrinder = {
          name: grinder.name,
          brand: grinder.brand
        }
        addedGrinder += 1;
        initialState.grinderPantry.unshift({ grinder: actionGrinder });
        state = initialState;
      }
      return { ...state, grinderCounter: addedGrinder };
    case "SET_NAME":
      return { ...state, grinder: { ...state.grinder, name: action.payload } };
    case "SET_BRAND":
      return { ...state, grinder: { ...state.grinder, brand: action.payload } };
    default:
      return state;
  }
};

export default grinderReducer;
