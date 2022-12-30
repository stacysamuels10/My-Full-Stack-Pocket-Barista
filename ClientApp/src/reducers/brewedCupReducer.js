const initialState = {
  brewedCup: {
    setup: {
      coffee: "",
      grinder: "",
      brewer: "",
      dateOfBrew: "",
    },
    brew: {
      groundsAmount: "",
      grindSetting: "",
      waterAmount: "",
      waterTemperature: "",
      brewTime: "",
      rating: "",
    },
    notes: "",
  },
  pastBrews: [],
  cupCounter: 0,
};

const brewedCupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BREWED_CUP":
      initialState.pastBrews.unshift({ brewedCup: action.payload });
      state = initialState;
      let addedCup = (state.cupCounter += 1);
      return { ...state, cupCounter: addedCup };
    case "SET_INITIAL_BREWED_CUP":
      let brewedCupCounter = 0;
      const pastBrews = action.payload.map((brewedCup) => {
        brewedCupCounter += 1;
        return {
          brewedCup: {
            setup: {
              coffee: brewedCup.coffee,
              grinder: brewedCup.grinder,
              brewer: brewedCup.brewer,
              dateOfBrew: brewedCup.dateOfBrew,
            },
            brew: {
              groundsAmount: brewedCup.groundsAmount,
              grindSetting: brewedCup.grindSetting,
              waterAmount: brewedCup.waterAmount,
              waterTemperature: brewedCup.waterTemperature,
              brewTime: brewedCup.brewTime,
              rating: brewedCup.rating,
            },
            notes: brewedCup.notes,
          }
        }
      });
      return { ...state, pastBrews: pastBrews, brewedCupCounter: brewedCupCounter };
    case "SET_CUP_COFFEE_NAME":
      return {
        ...state,
        brewedCup: {
          ...state.brewedCup,
          setup: { ...state.brewedCup.setup, coffee: action.payload },
        },
      };
    case "SET_CUP_GRINDER_NAME":
      return {
        ...state,
        brewedCup: {
          ...state.brewedCup,
          setup: { ...state.brewedCup.setup, grinder: action.payload },
        },
      };
    case "SET_CUP_BREWER_NAME":
      return {
        ...state,
        brewedCup: {
          ...state.brewedCup,
          setup: { ...state.brewedCup.setup, brewer: action.payload },
        },
      };
    case "SET_CUP_DATE":
      return {
        ...state,
        brewedCup: {
          ...state.brewedCup,
          setup: { ...state.brewedCup.setup, dateOfBrew: action.payload },
        },
      };
    case "SET_GROUNDS_AMOUNT":
      return {
        ...state,
        brewedCup: {
          ...state.brewedCup,
          brew: { ...state.brewedCup.brew, groundsAmount: action.payload },
        },
      };
    case "SET_GRIND_SETTING":
      return {
        ...state,
        brewedCup: {
          ...state.brewedCup,
          brew: { ...state.brewedCup.brew, grindSetting: action.payload },
        },
      };
    case "SET_WATER_AMOUNT":
      return {
        ...state,
        brewedCup: {
          ...state.brewedCup,
          brew: { ...state.brewedCup.brew, waterAmount: action.payload },
        },
      };
    case "SET_WATER_TEMP":
      return {
        ...state,
        brewedCup: {
          ...state.brewedCup,
          brew: { ...state.brewedCup.brew, waterTemperature: action.payload },
        },
      };
    case "SET_BREW_TIME":
      return {
        ...state,
        brewedCup: {
          ...state.brewedCup,
          brew: { ...state.brewedCup.brew, brewTime: action.payload },
        },
      };
    case "SET_RATING":
      return {
        ...state,
        brewedCup: {
          ...state.brewedCup,
          brew: { ...state.brewedCup.brew, rating: action.payload },
        },
      };
    case "SET_NOTES":
      return {
        ...state,
        brewedCup: {
          ...state.brewedCup,
          notes: action.payload,
        },
      };
    default:
      return state;
  }
};

export default brewedCupReducer;
