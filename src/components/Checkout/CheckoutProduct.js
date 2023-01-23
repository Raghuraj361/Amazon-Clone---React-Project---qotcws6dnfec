import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../StateProvider/StateProvider';


function CheckoutProduct({id, image, title, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
      //   console.log('deleted');
         dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
         })
    }

    
  return (
    <div className='checkoutProduct'>
      <img  
         className='checkoutProduct__image' 
         src={image}
      />

      <div className='checkoutProduct__info'>
         <p className='checkoutProduct__title'>{title}</p>
         <p className='checkoutProduct__price'>
            <strong>{`₹ ${price}`}</strong>
         </p>
         <p className='checkoutProduct__rating'>❤️
         </p>
         <button onClick={removeFromBasket} className='checkoutProduct__button'>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct;
