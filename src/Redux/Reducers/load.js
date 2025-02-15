const INITIAL_VALUE = {
    load: "TRUE",
  };


  export default function load (state = INITIAL_VALUE, action) {
    switch (action.type) {
      case "IS_LOADING" :
        return {
          ...state,
          load: action.payload,
        };
      default:
        return state;
    }
  };

