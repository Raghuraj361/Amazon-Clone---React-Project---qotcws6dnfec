import React from "react";
import { useStateValue } from "../../StateProvider/StateProvider";
import "./Product.css";


function Product(props){
    const [{ basket }, dispatch] = useStateValue();

    //  console.log("this is the basket >>>", basket);

    const addToBasket=()=>{
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                  id: props.data.id,
               title: props.data.title,
               image: props.data.image,
               price: props.data.price,
              rating: props.data.rating,
            },
        })
    }

    return(
        
        <div className="product">
         <div className="product__info">
          <p>{props.data.title}</p>
          <p className="product__price">    
            <strong>{`price ${props.data.price}`}</strong>
          </p>
          {/* <p>{props.data.rating[0]}</p> */}
       <p className="product__rating">{`❤️ ${props.data.rating.rate}`}
       </p>
     </div>

     <img src={props.data.image} alt="#" /> 
      <button onClick={addToBasket} className='product__button'>Add to Basket</button>
     </div>
    
    )
}

export default Product
