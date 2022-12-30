const initialState = {
  brewer: {
    name: "",
    brand: "",
    type: "",
  },
  brewerPantry: [],
  brewerCounter: 0,
};

const brewerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BREWER":
      initialState.brewerPantry.unshift({ brewer: action.payload });
      state = initialState;
      let addedBrewer = (state.brewerCounter += 1);
      return { ...state, brewerCounter: addedBrewer };
    case "SET_INITIAL_BREWER":
      let initialAddedBrewer;
      for (const brewer of action.payload) {
        const actionBrewer = {
          name: brewer.name,
          brand: brewer.brand,
          type: brewer.type
        }
        initialAddedBrewer = (state.brewerCounter += 1);
        initialState.brewerPantry.unshift({ brewer: actionBrewer });
      }
        state = initialState;
      return { ...state, brewerCounter: initialAddedBrewer };
    case "SET_BREWER_NAME":
      return { ...state, brewer: { ...state.brewer, name: action.payload } };
    case "SET_BREWER_BRAND":
      return { ...state, brewer: { ...state.brewer, brand: action.payload } };
    case "SET_BREWER_TYPE":
      return { ...state, brewer: { ...state.brewer, type: action.payload } };
    default:
      return state;
  }
};

export default brewerReducer;
