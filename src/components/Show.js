import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
const Show = () => {
  const { count } = useContext(GlobalContext);
  const getLS = localStorage.getItem("counter");
  return (
    <div>
      <h1>This Is Counter {count}</h1>
      <h2>Local Storage {getLS}</h2>
    </div>
  );
};

export default Show;
