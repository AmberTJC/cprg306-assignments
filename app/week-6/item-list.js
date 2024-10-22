
import { useState } from "react";
import Item from "./item";
import itemsJson from "./items.json";


export default function ItemList(){

  
   <Item/>
   const [sortBy, setSortBy] = useState("name");

   const sortItems = () =>{const sortedItems = [...itemsJson].sort((a,b) => a.name.localeCompare(b.name));
    setSortBy(sortedItems);

    const sortItemsCat = () =>{const sortedItems = [...itemsJson].sort((a,b) => a.category.localeCompare(b.category));
      setSortBy(sortedItems);
   };
   
   return (

    <div>
    <div>
      <button className = "bg-green-800 hover:bg-green-800 active:bg-red-300 rounded w-32" onClick={sortItems}>Sort Items by Name</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>

<div>
<button className ="bg-green-800 hover:bg-green-800 active:bg-red-300 rounded
        w-32" onClick={sortItemsCat}>Sort Items by Category</button>
<ul>
  {items.map(item => (
    <li key={item.id}>{item.name}</li>
  ))}
</ul>
</div>
</div>

        

    
  );
};
}


