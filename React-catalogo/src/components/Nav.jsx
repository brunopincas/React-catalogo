import React from "react";
import Carrito from './Carrito'
import Tienda from './Tienda'
import Gestion from './Gestion'
import Index from './Index'
import { BrowserRouter, NavLink, Router, Routes,Route } from "react-router-dom";
function Nav(){

    return(
        
        <div id="nav">
<BrowserRouter>

<nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-center">
  <div className="container-fluid">




    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
        <NavLink to='/Tienda'><a className="nav-link" aria-current="page" href="#">Productos</a></NavLink>
          
        </li>
        <li className="nav-item">
          
        </li>
      </ul>
 
    </div>

  </div>
</nav>

<Routes>
<Route className="navbar-brand" path="/" element={<Index></Index>}></Route>
<Route className="navbar-brand" path="/:nombre" element={<Carrito></Carrito>}></Route>
<Route className="navbar-brand" path="/Tienda" element={<Tienda></Tienda>}></Route>
</Routes>
</BrowserRouter>


        </div>
        
    );
}

export default Nav;