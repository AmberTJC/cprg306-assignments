"use client"

import { useEffect, useState } from "react";


export default function MealIdeas({ingredient}) {

let [meals, setmeals] =useState([]);


const fetchMealIdeas = async (ingredient) => {
    const response = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    const idMeal = data.idMeal;
    const strMeal = data.strMeal;
    const strMealThumb = data. strMealThumb;
    ingredient = Object.keys(idMeal, strMeal, strMealThumb);
    setmeals(ingredient);
};

function loadMealIdeas(ingredient){
    meals = fetchMealIdeas(ingredient);
}

useEffect(() => {
    loadMealIdeas(ingredient);
}, [ingredient]);

return (
<div>
<h1>Week 8</h1>

<ul>
    <li>
        {meals}
    </li>
</ul>


</div>
);


}