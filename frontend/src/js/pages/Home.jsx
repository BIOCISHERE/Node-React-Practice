import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <h1>Home</h1>
      {store.message.map((fruit, index) => (
        <div key={index}>
          <p>{fruit}</p>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default Home;
