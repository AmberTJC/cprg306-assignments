
"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import ItemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";


export default function Page(){
    
    const [items, setitems] = useState (ItemsData);

    const handleAddItem = (items) => {setitems([...items, item]);};

    const selectedItemName = useState(strMeal);

    

    return(
<main>
    <h3 className="font-bold text-teal-800">Shopping List</h3>
    <NewItem onAddItem={handleAddItem}/>
    <ItemList/>
    <MealIdeas/>


</main>
    );
}