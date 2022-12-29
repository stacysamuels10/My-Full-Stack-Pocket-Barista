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
  pastBrews: [
    {
      brewedCup: {
        setup: {
          coffee: "Konga",
          grinder: "Encore Burr Grinder",
          brewer: "Stagg XF",
          dateOfBrew: "08/29/2022",
        },
        brew: {
          groundsAmount: "19",
          grindSetting: "13",
          waterAmount: "300g",
          waterTemperature: "208",
          brewTime: "180",
          rating: "5",
        },
        notes: "",
      },
    },
    {
      brewedCup: {
        setup: {
          coffee: "Konga",
          grinder: "Encore Burr Grinder",
          brewer: "Stagg XF",
          dateOfBrew: "08/27/2022",
        },
        brew: {
          groundsAmount: "19",
          grindSetting: "13",
          waterAmount: "300g",
          waterTemperature: "208",
          brewTime: "180",
          rating: "5",
        },
        notes: "",
      },
    },
    {
      brewedCup: {
        setup: {
          coffee: "Back Cat Espresso",
          grinder: "Encore Burr Grinder",
          brewer: "Stagg XF",
          dateOfBrew: "08/26/2022",
        },
        brew: {
          groundsAmount: "17",
          grindSetting: "8",
          waterAmount: "30g",
          waterTemperature: "208",
          brewTime: "140",
          rating: "5",
        },
        notes: "",
      },
    },
    {
      brewedCup: {
        setup: {
          coffee: "Stoker",
          grinder: "Encore Burr Grinder",
          brewer: "Stagg XF",
          dateOfBrew: "08/20/2022",
        },
        brew: {
          groundsAmount: "19",
          grindSetting: "13",
          waterAmount: "300g",
          waterTemperature: "208",
          brewTime: "180",
          rating: "5",
        },
        notes: "",
      },
    },
    {
      brewedCup: {
        setup: {
          coffee: "Konga",
          grinder: "Encore Burr Grinder",
          brewer: "Stagg XF",
          dateOfBrew: "08/17/2022",
        },
        brew: {
          groundsAmount: "19",
          grindSetting: "13",
          waterAmount: "300g",
          waterTemperature: "208",
          brewTime: "180",
          rating: "5",
        },
        notes: "",
      },
    },
  ],
  cupCounter: 5,
};

const brewedCupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BREWED_CUP":
      initialState.pastBrews.unshift({ brewedCup: action.payload });
      state = initialState;
      let addedCup = (state.cupCounter += 1);
      return { ...state, cupCounter: addedCup };
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
