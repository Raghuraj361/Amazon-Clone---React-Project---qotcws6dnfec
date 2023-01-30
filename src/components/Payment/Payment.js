import React, { useState } from 'react'
import './Payment.css';
import { useStateValue } from '../StateProvider/StateProvider';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Payment({id}) {
   const [popup, setPopup] = useState(false);
   const [{ basket }, dispatch] = useStateValue();

   const handleClickPopup = () => {
    setPopup(!popup);
   }
   const closePopup = () => {
    setPopup(false);
   }
   const submitCard = () => {
    setPopup(false);
    toast("successfull", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    dispatch({
      type: "CLEAR_ALL_BASKETS",
      id: id,
    });
   }

  return (
    <div className='payment'>
       <button onClick={handleClickPopup} className='popup__button'>Select Delivery Address And Payment Method</button>
       <div>
        {popup?
        <div className='main'>
          <div className='popup'>
            <div className='popup-leader'>
              <h1>Payment card</h1>
              <h1 onClick={closePopup} >x</h1>
            </div>
            <div className='input__area'>
              <label className='payment__label'>Input Delivery Address</label>
              <textarea type='text' className='payment__input' cols='4'></textarea>
            </div>
            <div >
              <div className='payment__method'>Select Payment Method</div>
              <div className='all__radio' >
              <label htmlFor='a'>
                <input type="radio" id='a' name='temp' className='input__radio1' value="option3" />
                Pay with UPI IDs /Net Banking
              </label>
              <label htmlFor='b'>
                <input type="radio" id='b' name='temp' className='input__radio2' value="option3" />
                Pay With Debit/Credit/ATM Cards
              </label>
              <label htmlFor='c'>
                <input type="radio" id='c' name='temp' className='input__radio3' value="option3" />
                Cash on Delivery/Pay on Delivery
              </label>
              </div>
              <div>
                <button 
                    className='completePaymentButton' 
                    onClick={submitCard}>Complete Payment Dutton
                </button>
              </div>
            </div>
          </div>
          <div >
            <p>This simple popup in react</p>
          </div>
        </div>:''}
       </div>
       <ToastContainer/>
    </div>
  );
}

export default Payment;


