import {INCREASE, DECREASE, CLEAR_CART, REMOVE} from "../src/actions";
import cartItems from "./cart-items";
import CartItem from "./components/CartItem";

const reducer = (state, action) => {
  if(action.type === CLEAR_CART){
    return {...state, cart:[]};
  }
  if(action.type === DECREASE){
    console.log("you decreased amount");
  }
  if(action.type === INCREASE){
    console.log("you increased amount");
  }
  if(action.type === REMOVE){
    return{...state, 
      cart:state.cart.filter(cartItem =>cartItem.id !== action.payload.id)}
  }
    return state;
  }
  
  export default reducer;