import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

function WomenProducts() {
  const { store, actions } = useContext(Context);

  const [isTShirt, setIsTShirt] = useState(false);
  const [isSweaters, setIsSweaters] = useState(false);
  const [isPants, setIsPants] = useState(false);
  const [isJeans, setIsJeans] = useState(false);
  const [isDresses, setIsDresses] = useState(false);
  const [isPurses, setIsPurses] = useState(false);
  const [isWallets, setIsWallets] = useState(false);
  const [isBelts, setIsBelts] = useState(false);
  const [isScarfs, setIsScarfs] = useState(false);
  const [isPanties, setIsPanties] = useState(false);
  const [isBras, setIsBras] = useState(false);
  const [isPantys, setIsPantys] = useState(false);
  const [isSocks, setIsSocks] = useState(false);

  return (
    <div className="container-fluid">
      <h1>Women Products</h1>
    </div>
  );
}

export default WomenProducts;
