import React, { useReducer } from "react";
import itemReducer from "./itemsReducer";
import GlobalContext from "./GlobalContext";
const ItemsState = (props) => {
  const initialState = {
    items: [],
    count:
      +localStorage.getItem("counter") !== 0
        ? +localStorage.getItem("counter")
        : 0,
    condition: false,
  };

  const [state, dispatch] = useReducer(itemReducer, initialState);

  const addOne = () => {
    dispatch({ type: "ADD_ONE" });
  };

  return (
    <GlobalContext.Provider
      value={{ count: state.count, addOne, condition: state.condition }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export default ItemsState;
