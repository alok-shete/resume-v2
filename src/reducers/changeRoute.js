const changeRouteReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_ROUTE":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default changeRouteReducer;
