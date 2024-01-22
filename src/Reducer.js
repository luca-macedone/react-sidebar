const reducer = (state, action) => {
  // console.log(state, action);
  switch (action.type) {
    case "CHANGE_VIEW_MOBILE": {
      console.log(action.type);
      return {
        ...state,
        mobileView: true,
      };
    }
    case "CHANGE_VIEW_DESKTOP": {
      console.log(action.type);
      return {
        ...state,
        mobileView: false,
      };
    }

    default:
      return { ...state };
  }
};

export default reducer;
