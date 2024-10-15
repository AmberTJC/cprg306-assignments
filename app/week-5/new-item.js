
"use client"


import { useState } from "react"



export default function NewItem({onAddItem}) {


  const [name, setName] = useState("")


  const [category, setCategory] = useState("Produce")


   const [quantity, setQuantity] = useState(1);

   const increment = () => {
    setQuantity(quantity + 1);
    console.log(quantity);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
    console.log(quantity);
  };

  const reset = () => {
    setName("") ;
    setQuantity(1);
    setCategory("Produce");
  };


  function handleSubmit(event) {
    event.preventDefault();
    const newItem  = {name, quantity, category};
    onAddItem (newItem);
    console.log(newItem);
    alert(newItem);
    reset();

  };

  return(

    <div> 
      

      <form onSubmit ={handleSubmit}>

        <div>
        <label htmlFor ="name">Name: </label>
        <input 
        type = "text"
        id = "name" 
        value = {name}
        onChange={(event) => setName(event.target.value)}
        className = "text-black"
        />
        </div>


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

      <div>

        <select onChange ={(event)=> setCategory(event.target.value)} className= "text-black">

          <option value = "1">Produce</option>
          <option value = "2">Dairy</option>
          <option value = "3">Bakery</option>
          <option value = "4">Meat</option>
          <option value = "5">Frozen Foods</option>
          <option value = "6">Canned Goods</option>
          <option value = "7">Dry Goods</option>
          <option value = "8">Beverages</option>
          <option value = "9">Snacks</option>
          <option value = "10">Household</option>
          <option value = "11">Other</option>
        
        </select>
      </div>
      <div>
        <button type = "submit" className = "bg-blue-400 hover:bg-blue-400 active:bg-blue-700 rounded w-32">Submit</button>
      </div>


      </form>


    </div>




  );





}