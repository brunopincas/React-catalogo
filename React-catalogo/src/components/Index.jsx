import React from "react";
import ContenidoIndex from './ContenidoIndex'
function Index(){

  return(
    <div id="caja">

    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={require('./img/banner1.png')} className="d-block w-100"/>
        </div>
        <div className="carousel-item">
          <img src={require('./img/banner2.png')} className="d-block w-100"/>
        </div>
        <div className="carousel-item">
          <img src={require('./img/banner3.png')} className="d-block w-100"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <ContenidoIndex></ContenidoIndex>

            </div>
    );
  }

export default Index;