export const initialState={
  basket: [],
}
//selector
export const getBasketTotal=(basket)=>
basket?.reduce((amount, item)=>item.price+amount, 0)
const reducer=(state, action)=>{

  console.log(action)
  // The reducer normally looks at the action type field to decide what happens
  switch(action.type){
     case 'ADD_TO_BASKET':
      localStorage.setItem('list',JSON.stringify( [...state.basket,action.item]))
      return{
          ...state,
          basket: [...state.basket,action.item],
      };
      case "REMOVE_FROM_BASKET":
        console.log('delition-started');
         let allList = JSON.parse(localStorage.getItem('list'));
         const index = allList.findIndex(item => item.id === action.id);
         if(index === -1) {
          return {
            state,basket:allList
          }
         }
         allList.splice(index,1);
         localStorage.setItem('list', JSON.stringify(allList));

         return{  
          ...state,     // returning previous data with the help of spread operator
           basket:allList, 
         }

        case "CLEAR_ALL_BASKETS":
        let newPosts = state.basket.findIndex(basket => action.id !== basket.id);

        return {
          ...state,
          basket: newPosts,
        };

         default:
          // If this reducer doesn't recognize the action type, or doesn't
         // care about this specific action, return the existing state unchanged
          return state;
  }
}

export default reducer;