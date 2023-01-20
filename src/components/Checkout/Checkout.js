import React from "react";
import './Checkout.css';
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckoutProduct from "./CheckoutProduct";

// const getItems=()=>{
//   let allList=localStorage.getItem('list');
//   console.log(allList);
//   if(allList){
//     return JSON.parse(allList);
//     }else{
//       return[];
//     }
// }

function Checkout(){
    // const [{ basket }, dispatch] = useStateValue();
    const [{ basket }, dispatch] = useStateValue();

    // useEffect(() => {
    //   localStorage.setItem('list',JSON.stringify(basket))
    //   },[basket])
    

    return(
        <div className="checkout">
            <div className="checkout__left">
                <img 
                   className="checkout__ad"
                   src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' 
                   alt=""
                />

                <div>
                    <h2 className="ckeckout__title">Your Shopping Basket</h2>

                      {basket.map((item, index) => (
                        <CheckoutProduct
                         key={index}
                         id={item.id}
                         title={item.title}
                         image={item.image}
                         price={item.price}
                         rating={item.rating}
                        />
                      ))}
                   
                </div>
            </div>

            <div className="checkout__right">
              <Subtotal/><h2>The Subtotal will go here</h2></div>
            </div>
    )
}
export default Checkout;