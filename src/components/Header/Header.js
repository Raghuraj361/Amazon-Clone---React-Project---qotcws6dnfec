import React from "react";
import image from './logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "../StateProvider/StateProvider";


// const getItems=()=>{
//   let allList=localStorage.getItem('list');
//   console.log(allList);
//   if(allList){
//     return JSON.parse(allList);
//     }else{
//       return[];
//     }
// }


function Header(){
   const[{basket}, dispatch] = useStateValue()


    return (
        <div className="header">
        {/* logo on the left */}
         <Link to="/">
          <img  
              className="headerLogo"
              src={image}
          /> 
         </Link> 

            {/*Searchbox */}
         <div className="searchBar">
          <input type="text" className="searchInput" />
           <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon"></FontAwesomeIcon>
         </div>
           {/*3 links*/}

         <div className="headNavBar">
            {/* 1 link */}
          <Link  to="/login" className="headerLink">
           <div className="headerOption">
            <span className="headerOption1">Hello Guest </span>
             <span className="headerOption2">Sign In</span>
           </div>
          </Link>

             {/*  2nd Link */}
          <Link to="/" className="headerLink">
           <div className="headerOption">
            <span className="headerOption1">Returns</span>
             <span className="headerOption2">& Orders</span>
           </div>
          </Link>

           {/* 3rd Link */}
          <Link className="headerLink">
           <div className="headerOption">
            <span className="headerOption1">Your </span>
             <span className="headerOption2">Prime</span>
           </div>
          </Link>

         {/* 4th Link  going to basket */}
          <Link to="/checkout" className="headerLink" >
           <div className="headerBasket">
            {/* Shopping basket icon */}
            <FontAwesomeIcon icon={faCartPlus} className="cartIcon"></FontAwesomeIcon>
            {/*Number of items in the basket */}
             <span className="headerOption2 headerBasketCount">{basket?.length}</span>
           </div>
         </Link>   
        </div>
      </div>
    )
}
export default Header;