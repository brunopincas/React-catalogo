import React from "react";

function ContenidoIndex(){

  return(

    <div className="container text-center">
  <div className="row mt-5">
    <div className="col">
    <img src={require('./img/banner1.png')} className="d-block w-100"/>
    </div>
    <div className="col">
      <h4>Titulo</h4>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    </div>
  </div>

  <div className="row mt-5">
    <div className="col">
    <h4>Titulo</h4>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

    </div>
    <div className="col">
    <img src={require('./img/banner2.png')} className="d-block w-100"/>
    </div>
  </div>

  <div className="row mt-5">
    <div className="col">
    <img src={require('./img/banner3.png')} className="d-block w-100"/>
    </div>
    <div className="col">
    <h4>Titulo</h4>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

    </div>
  </div>

  <div className="row mt-5">
    <div className="col">
    <h4>Titulo</h4>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

    </div>
    <div className="col">
    <img src={require('./img/banner4.png')} className="d-block w-100"/>
    </div>
  </div>
</div>

    );
  }

export default ContenidoIndex;