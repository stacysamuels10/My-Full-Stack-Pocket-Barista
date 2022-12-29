const initialState = {
  bagOfCoffee: {
    about: {
      name: "",
      roaster: "",
      origin: "",
      rating: "",
    },
    details: {
      beanType: "",
      roastLevel: "",
      beanProcess: "",
      bagAmount: "",
      roastDate: "",
    },
    notes: "",
  },
  pastCoffeeBags: [
    {
      bagOfCoffee: {
        about: {
          name: "Holler Mountain",
          roaster: "Stumptown",
          origin: "East Africa",
          rating: "4",
        },
        details: {
          beanType: "Bean",
          roastLevel: "Medium",
          beanProcess: "Washed",
          bagAmount: "12oz",
          roastDate: "8/29/2022",
        },
        notes: "Mid-range, consistent quality, lacking fruit notes",
      },
    },
    {
      bagOfCoffee: {
        about: {
          name: "Cold Brew Reserve",
          roaster: "Stone Street Coffee",
          origin: "Colombia",
          rating: "4",
        },
        details: {
          beanType: "Bean",
          roastLevel: "Dark",
          beanProcess: "Washed",
          bagAmount: "16oz",
          roastDate: "8/29/2022",
        },
        notes: "Great for cold brew",
      },
    },
    {
      bagOfCoffee: {
        about: {
          name: "Black Cat Espresso",
          roaster: "Intelligentsia",
          origin: "Columbia",
          rating: "3",
        },
        details: {
          beanType: "Bean",
          roastLevel: "Dark",
          beanProcess: "Washed",
          bagAmount: "12oz",
          roastDate: "8/29/2022",
        },
        notes: "Great for espresso",
      },
    },
    {
      bagOfCoffee: {
        about: {
          name: "Konga",
          roaster: "Irving Farm",
          origin: "Ethiopia",
          rating: "5",
        },
        details: {
          beanType: "Bean",
          roastLevel: "Light",
          beanProcess: "Natural",
          bagAmount: "12oz",
          roastDate: "8/29/2022",
        },
        notes: "Best light and floral tasting. Great for pour over",
      },
    },
    {
      bagOfCoffee: {
        about: {
          name: "Stoker",
          roaster: "Tandem",
          origin: "Colombia",
          rating: "5",
        },
        details: {
          beanType: "Bean",
          roastLevel: "Medium",
          beanProcess: "Honey",
          bagAmount: "12oz",
          roastDate: "8/29/2022",
        },
        notes: "Medium and fruity",
      },
    },
  ],
  coffeeCounter: 5,
};

const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COFFEE_BAG":
      initialState.pastCoffeeBags.unshift({ bagOfCoffee: action.payload });
      state = initialState;
      let addedCoffee = (state.coffeeCounter += 1);
      return { ...state, coffeeCounter: addedCoffee };
    case "SET_NAME":
      return {
        ...state,
        bagOfCoffee: {
          ...state.bagOfCoffee,
          about: { ...state.bagOfCoffee.about, name: action.payload },
        },
      };
    case "SET_ROASTER":
      return {
        ...state,
        bagOfCoffee: {
          ...state.bagOfCoffee,
          about: { ...state.bagOfCoffee.about, roaster: action.payload },
        },
      };
    case "SET_ORIGIN":
      return {
        ...state,
        bagOfCoffee: {
          ...state.bagOfCoffee,
          about: { ...state.bagOfCoffee.about, origin: action.payload },
        },
      };
    case "SET_COFFEE_RATING":
      return {
        ...state,
        bagOfCoffee: {
          ...state.bagOfCoffee,
          about: { ...state.bagOfCoffee.about, rating: action.payload },
        },
      };
    case "SET_BEAN_TYPE":
      return {
        ...state,
        bagOfCoffee: {
          ...state.bagOfCoffee,
          details: { ...state.bagOfCoffee.details, beanType: action.payload },
        },
      };
    case "SET_ROAST_LEVEL":
      return {
        ...state,
        bagOfCoffee: {
          ...state.bagOfCoffee,
          details: { ...state.bagOfCoffee.details, roastLevel: action.payload },
        },
      };
    case "SET_BEAN_PROCESS":
      return {
        ...state,
        bagOfCoffee: {
          ...state.bagOfCoffee,
          details: {
            ...state.bagOfCoffee.details,
            beanProcess: action.payload,
          },
        },
      };
    case "SET_BAG_AMOUNT":
      return {
        ...state,
        bagOfCoffee: {
          ...state.bagOfCoffee,
          details: { ...state.bagOfCoffee.details, bagAmount: action.payload },
        },
      };
    case "SET_ROAST_DATE":
      return {
        ...state,
        bagOfCoffee: {
          ...state.bagOfCoffee,
          details: { ...state.bagOfCoffee.details, roastDate: action.payload },
        },
      };
    case "SET_BAG_NOTES":
      return {
        ...state,
        bagOfCoffee: {
          ...state.bagOfCoffee,
          notes: action.payload,
        },
      };
    default:
      return state;
  }
};

export default coffeeReducer;
