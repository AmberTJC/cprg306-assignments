
"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import ItemData from "./items.json";
import { useState } from "react";

export default function Page(){
    
    const [items, setitems] = useState (ItemData);

    const handleAddItem = (items) => {setitems([...items, item]);};

    return(
<main>
    <h3 className="font-bold text-teal-800">Shopping List</h3>
    <NewItem onAddItem={handleAddItem}/>
    <ItemList/>


</main>
    );
}