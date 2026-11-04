"use client";
import React, { useState } from "react";
import {useEffect} from "react";

async function fetchMealIdeas(ingredient) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
  );
  const data = await res.json();
  return data.meals || [];
}

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 capitalize">{`Meal Ideas Using ${ingredient}`}</h2>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal} className="mb-2">
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    )
}
