
"use client"

import { useState } from "react"


export default function NewItem() {


   const [quantity, setQuantity] = useState(1);

   const increment = () => {
    setQuantity(quantity + 1);
    console.log(quantity);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
    console.log(quantity);
  };

  return(

    <div> 
        <p className = "font-style: italic">Quantity: {quantity}</p>

        <button
        onClick={increment}
        className="bg-green-800 hover:bg-green-800 active:bg-red-300 rounded
        w-32"
      >
        Increment
      </button>


      <button
        onClick={decrement}
        className="bg-yellow-700 hover:bg-yellow-700 active:bg-red-300 rounded
        w-32"
      >
        Decrement
      </button>


    </div>




  );





}