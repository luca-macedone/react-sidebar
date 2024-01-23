const reducer = (state, action) => {
  // console.log(state);
  // console.log(action.type);

  switch (action.type) {
    case "MOBILE_VIEW_ON": {
      return {
        ...state,
        mobileView: true,
      };
    }
    case "MOBILE_VIEW_OFF": {
      return {
        ...state,
        mobileView: false,
      };
    }
    case "TOGGLE_MODAL":
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };

    case "TOGGLE_SIDEBAR":
      if (state.mobileView) {
        return {
          ...state,
          isSidebarOpen: !state.isSidebarOpen,
        };
      }
      break;

    default:
      throw new Error(`No matching action with name ${action.type}`);
  }
};

export default reducer;
