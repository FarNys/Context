import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
const Container = () => {
  const { condition, addOne, count } = useContext(GlobalContext);
  const addHandler = () => {
    addOne();
  };
  return (
    <div>
      <h1>This is Container</h1>
      <button onClick={addHandler}>Add Number</button>
    </div>
  );
};

export default Container;
