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
  pastCoffeeBags: [],
  coffeeCounter: 0,
};

const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COFFEE_BAG":
      initialState.pastCoffeeBags.unshift({ bagOfCoffee: action.payload });
      state = initialState;
      let addedCoffee = (state.coffeeCounter += 1);
      return { ...state, coffeeCounter: addedCoffee };
    case "SET_INITIAL_COFFEE_BAG":
      let coffeeCounter = 0;
      const pastCoffeeBags = action.payload.map((coffeeBag) => {
        coffeeCounter += 1;
        return {
          bagOfCoffee: {
            about: {
              name: coffeeBag.coffee_Name,
              roaster: coffeeBag.roaster_Name,
              origin: coffeeBag.bean_Origin,
              rating: coffeeBag.user_Rating,
            },
            details: {
              beanType: coffeeBag.bean_Type,
              roastLevel: coffeeBag.roast_Level,
              beanProcess: coffeeBag.bean_Process,
              bagAmount: coffeeBag.bag_Size,
              roastDate: coffeeBag.roast_Date,
            },
            notes: coffeeBag.notes,
          }
        }
      });
      return { ...state, coffeeCounter: coffeeCounter, pastCoffeeBags: pastCoffeeBags };
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
