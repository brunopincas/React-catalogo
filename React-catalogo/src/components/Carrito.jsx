import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useParams } from "react-router-dom";
function Carrito(props){
    //const nombre = useParams();
    const nombre = useParams();
    return(

        <div className="justify-content-center">
            <h1>Vas a pagar  {nombre.nombre} euros</h1>
        <PayPalScriptProvider options={{ "client-id": "test" }}>
        <PayPalButtons
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: nombre.nombre,
                            },
                        },
                    ],
                });
            }}
            onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                    const name = details.payer.name.given_name;
                    alert(`Transaction completed by ${name}`);
                });
            }}
        />
    </PayPalScriptProvider>
        </div>

        
        
    );
}

export default Carrito;