import React, { useState } from "react";
import Product from "./Product";
import p1 from './img/p1.png';
import p2 from './img/p2.png';
import p3 from './img/p3.png';
import p4 from './img/p4.png';
import p5 from './img/p5.png';
import p6 from './img/p6.png';
import { BrowserRouter, NavLink, Router, Routes,Route } from "react-router-dom";
import "./css/tienda.css";
function Tienda(){

    const [total, setTotal] = useState(0);


    const sumarPrecio = (precio) => {
        setTotal(total + precio);
      };


    return (
       
    <div className="col-md-12justify-content-center my-4">

        <div className="row">

        <NavLink to={{ pathname: '/'+total}}>
      <button className="btn btn-dark btnPagar"><h3>Pagar  {total} €</h3></button>
      </NavLink>



                
            </div>
        <div className="row">
        <div className="col"></div>
            <div className="col">
            <Product nombre="XX Maya" precio="50" img={p1}  onClick={() => sumarPrecio(50)}></Product>
            </div>
            <div className="col">
            <Product nombre="Chain Necklace" precio="72" img={p2} onClick={() => sumarPrecio(72)}></Product>
            </div>
            <div className="col"></div>
        </div>

        <div className="row">
        <div className="col"></div>
            <div className="col">
            <Product nombre="Producto 3" precio="44" img={p3} onClick={() => sumarPrecio(44)}></Product>
            </div>
            <div className="col">
            <Product nombre="Mediterranean" precio="45" img={p4} onClick={() => sumarPrecio(45)}></Product>
            </div>
            <div className="col"></div>
        </div>

        <div className="row">
        <div className="col"></div>
            <div className="col">
            <Product nombre="Angel Ring" precio="80" img={p5} onClick={() => sumarPrecio(80)}></Product>
            </div>
            <div className="col">
            <Product nombre="Tropics Necklace" precio="47" img={p6} onClick={() => sumarPrecio(47)}></Product>
            </div>
            <div className="col"></div>
        </div>
        
    </div>
        

       
      );


}

export default Tienda;