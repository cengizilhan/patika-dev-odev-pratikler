import React from "react";
import "./ProductCard.css";

export default function ProductCard(props) {
  return (
    <div key={props.props.id} className="col-6 col-sm-6 col-md-6 col-lg-4">
      <div className="carder p-4   pb-3 bg-white">
      <div className="card-top mb-3">
        <img src={props.props.image} alt="ss" className="col-6 my-2"></img>
        <h4 className="pb-0 mb-0">{props.props.productName}</h4>
        <h4 className="text-green fw-normal">{props.props.productPrice}</h4>
      </div>
      <div className="card-bottom row">
        <div className="col-4 p-1">
          <button className="w-100">Sell</button>
        </div>
        <div className="col-4 p-1">
          <input type="text" className="w-100 h-100 card-textinput"
           placeholder={props.props.count}></input>
        </div>
        <div className="col-4 p-1">
          <button className="w-100 card__button-greenbg text-white">Buy</button>
        </div>
      </div>
      </div>
    </div>
  );
}
