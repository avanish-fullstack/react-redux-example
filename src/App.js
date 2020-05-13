import React from 'react';
import logo from './logo.svg';
import './App.css';
import Order from './components/order.component';
import Cart from "./components/cart.component";

function App() {
  return (
    <div className="App">
     <Order></Order>
     <Cart></Cart>
    </div>
  );
}

export default App;
