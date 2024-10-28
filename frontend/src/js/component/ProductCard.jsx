import React from "react";
import { Link } from "react-router-dom";
import TshirtURL from "../../assets/t-shirt.png";

function ProductCard(props) {
  return (
    <div className={props.cardClass}>
      <Link to="/" className="text-decoration-none">
        <div className="card my-1">
          <img className="card-image-top img-fluid" src={TshirtURL} alt="..." />
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
