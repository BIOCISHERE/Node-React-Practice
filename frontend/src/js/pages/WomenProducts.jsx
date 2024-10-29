import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const WomenProducts = () => {
  const { store, actions } = useContext(Context);

  const [isTShirt, setIsTShirt] = useState(false);
  const [isSweaters, setIsSweaters] = useState(false);
  const [isPants, setIsPants] = useState(false);
  const [isDresses, setIsDresses] = useState(false);
  const [isJeans, setIsJeans] = useState(false);
  const [isPurses, setIsPurses] = useState(false);
  const [isWallets, setIsWallets] = useState(false);
  const [isBelts, setIsBelts] = useState(false);
  const [isScarfs, setIsScarfs] = useState(false);
  const [isPanties, setIsPanties] = useState(false);
  const [isBras, setIsBras] = useState(false);
  const [isPantys, setIsPantys] = useState(false);
  const [isSocks, setIsSocks] = useState(false);

  const turnClass = (info) => {
    if (info.category == 1) {
      return isTShirt ? "col" : "d-none";
    } else if (info.category == 2) {
      return isSweaters ? "col" : "d-none";
    } else if (info.category == 4) {
      return isPants ? "col" : "d-none";
    } else if (info.category == 5) {
      return isDresses ? "col" : "d-none";
    } else if (info.category == 6) {
      return isJeans ? "col" : "d-none";
    } else if (info.category == 7) {
      return isPurses ? "col" : "d-none";
    } else if (info.category == 8) {
      return isWallets ? "col" : "d-none";
    } else if (info.category == 9) {
      return isBelts ? "col" : "d-none";
    } else if (info.category == 10) {
      return isScarfs ? "col" : "d-none";
    } else if (info.category == 11) {
      return isPanties ? "col" : "d-none";
    } else if (info.category == 12) {
      return isBras ? "col" : "d-none";
    } else if (info.category == 13) {
      return isPantys ? "col" : "d-none";
    } else if (info.category == 14) {
      return isSocks ? "col" : "d-none";
    }
  };

  const returnProducts = () => {
    if (
      !isTShirt &&
      !isSweaters &&
      !isPants &&
      !isDresses &&
      !isJeans &&
      !isPurses &&
      !isWallets &&
      !isBelts &&
      !isScarfs &&
      !isPanties &&
      !isBras &&
      !isPantys &&
      !isSocks
    ) {
      // Here map womenProducts from the flux context, and to map them use ProductCard component
      // The ProductCard component is not made yet.
      // Here the ProductCard class is going to be "col".
    } else {
      // Here map womenProducts from the flux context, and to map them use ProductCard component
      // The ProductCard component is not made yet.
      // Here the ProductCard class is going to be determined by turnClass function.
    }
  };

  return (
    <div className="container-fluid my-1">
      <div className="row">
        <div className="col-2 border border-dark-subtle rounded-end">
          <h4>Womenswear</h4>
          <div className="container-fluid my-1">
            <h6>Type Of Garment</h6>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="TshirtCheck"
                onClick={() => setIsTShirt(!isTShirt)}
              />
              <label className="form-check-label" htmlFor="TshirtCheck">
                T-shirts
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="SweatersCheck"
                onClick={() => setIsSweaters(!isSweaters)}
              />
              <label className="form-check-label" htmlFor="SweatersCheck">
                Sweaters
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="PantsCheck"
                onClick={() => setIsPants(!isPants)}
              />
              <label className="form-check-label" htmlFor="PantsCheck">
                Pants
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="DressesCheck"
                onClick={() => setIsDresses(!isDresses)}
              />
              <label className="form-check-label" htmlFor="DressesCheck">
                Dresses
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="JeansCheck"
                onClick={() => setIsJeans(!isJeans)}
              />
              <label className="form-check-label" htmlFor="JeansCheck">
                Jeans
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="PursesCheck"
                onClick={() => setIsPurses(!isPurses)}
              />
              <label className="form-check-label" htmlFor="PursesCheck">
                Purses
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="WalletsCheck"
                onClick={() => setIsWallets(!isWallets)}
              />
              <label className="form-check-label" htmlFor="WalletsCheck">
                Wallets
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="BeltsCheck"
                onClick={() => setIsBelts(!isBelts)}
              />
              <label className="form-check-label" htmlFor="BeltsCheck">
                Belts
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="ScarfsCheck"
                onClick={() => setIsScarfs(!isScarfs)}
              />
              <label className="form-check-label" htmlFor="ScarfsCheck">
                Scarfs
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="PantiesCheck"
                onClick={() => setIsPanties(!isPanties)}
              />
              <label className="form-check-label" htmlFor="PantiesCheck">
                Panties
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="BrasCheck"
                onClick={() => setIsBras(!isBras)}
              />
              <label className="form-check-label" htmlFor="BrasCheck">
                Bras
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="PantysCheck"
                onClick={() => setIsPantys(!isPantys)}
              />
              <label className="form-check-label" htmlFor="PantysCheck">
                Pantys
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                value=""
                id="SocksCheck"
                onClick={() => setIsSocks(!isSocks)}
              />
              <label className="form-chek-label" htmlFor="SocksCheck">
                Socks
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomenProducts;
