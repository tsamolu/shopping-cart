import React from "react";

// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

// items
import cartItems from "./cart-items";

// redux stuff
// store - stores data, think of state
// reducer - function that used to update store
// two arguments - state, action
// state - previous state
// action - what happened
// return - updated or old state

import {createStore} from "redux";
import reducer from "./reducer";

// react-redux -Provider - wraps app, connect - used in components
import {Provider} from "react-redux";

// dispatch method - send actions to the store
// actions (objects) - must have TYPE PROPERTY 
// DON'T MUTATE THE STATE - redux is built on IMMUTABILITY

// initial store
const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 5
};


// store
const store = createStore(reducer, initialStore);
 
function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App; 
