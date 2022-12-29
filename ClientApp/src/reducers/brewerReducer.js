const initialState = {
  brewer: {
    name: "",
    brand: "",
    type: "",
  },
  brewerPantry: [
    {
      brewer: {
        name: "Stagg XF",
        brand: "Fellow",
        type: "Fellow Stagg",
      },
    },
    {
      brewer: {
        name: "Barista Express",
        brand: "Breville",
        type: "Espresso Machine",
      },
    },
    {
      brewer: {
        name: "Six Cup Glass Handle CHEMEX",
        brand: "Chemex",
        type: "Chemex",
      },
    },
    {
      brewer: {
        name: "Aeropress Original",
        brand: "Aeropress",
        type: "Aeropress",
      },
    },
    {
      brewer: {
        name: "P3",
        brand: "Espro",
        type: "French Press",
      },
    },
  ],
  brewerCounter: 5,
};

const brewerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BREWER":
      initialState.brewerPantry.unshift({ brewer: action.payload });
      state = initialState;
      let addedBrewer = (state.brewerCounter += 1);
      return { ...state, brewerCounter: addedBrewer };
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
