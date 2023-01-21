import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../StateProvider/StateProvider';




function CheckoutProduct({id, image, title, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        console.log('deleted');
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
            <strong>{`price ${price}`}</strong>
         </p>
         <div className='checkoutProduct__rating'>
            {Array(rating)
            .fill()
            .map((_, i) => (
                <p key={i}>❤️</p>
            ))}
         </div>
         <React.StrictMode>
       
         <button onClick={removeFromBasket} className='checkoutProduct__button'>Remove from Basket</button>
         </React.StrictMode>
      </div>
    </div>
  )
}

export default CheckoutProduct;
