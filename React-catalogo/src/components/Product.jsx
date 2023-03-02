import React from "react";
import "./css/Product.css";

function Product(props){

    return(
        <div className="contenido">
        <div className="card">
        <img src={props.img} alt={props.nombre} />
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">{props.id}</p>
          <button onClick={props.onClick}  className="btn btn-light">{props.precio} €</button>
        </div>
      </div>
    
        </div>

    );

}

export default Product;