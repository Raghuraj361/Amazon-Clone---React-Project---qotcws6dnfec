import React from "react";
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../Reducer";
import { useStateValue } from "../StateProvider/StateProvider";
import { Link } from "react-router-dom";




   function Subtotal(){
    const [{basket}, dispatch]=useStateValue();


        return ( 
            <div className="subtotal">
               <CurrencyFormat
               renderText={(value)=>(
               <>
                  <p>
                     Subtotal({basket.length} items):
                     <strong>{value}</strong>
                  </p>
                  <small className="subtotal__gift">
                        <input type="checkbox"/>This order contains a gift
                  </small>
                  </>
               )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}

               />
                  <Link to='/payment'>
                  <button >Proceed To Checkout</button>
                  </Link>
                     
            </div>
        );
   }

   export default Subtotal;