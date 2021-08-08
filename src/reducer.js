const defaultState = {
  list: ["cid moosa", "Hitler"],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "MOVIE:ADD": {
      const newList = state.list.concat([action.movieName]);
      // debugger;
      return {
        list: newList,
      };
    }

    case "MOVIE:DELETE": {
      return {
        list: state.list.filter((movie, index) => index !== action.key),
      };
    }
    default:
      return state;
  }
};

export default reducer;
