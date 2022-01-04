const itemReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ONE":
      localStorage.setItem("counter", state.count);
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};
export default itemReducer;
