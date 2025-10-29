"use client";
import React, { useState, useEffect } from "react";

/**
 * Fetch meals from TheMealDB that include the given (already-sanitized) ingredient.
 * Caller is expected to pass a single lowercase word like "chicken".
 */
export async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  console.log("fetchMealIdeas -> URL:", url);
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn("MealDB returned non-OK status:", res.status);
      return [];
    }
    const data = await res.json();
    return data.meals || [];
  } catch (err) {
    console.error("fetchMealIdeas error:", err);
    return [];
  }
}

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    if (!ingredient) {
      setMeals([]);
      return;
    }
    const results = await fetchMealIdeas(ingredient);
    setMeals(results);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="border p-4 mb-4 rounded shadow bg-gradient-to-r from-black-100 to-gray-800 text-white">
      <h2 className="text-lg font-bold mb-4">Meal Ideas</h2>

      {!ingredient ? (
        <p className="text-sm text-gray-300">Select a shopping item to load meal ideas.</p>
      ) : meals.length === 0 ? (
        <p className="text-sm text-gray-300">No meals found for "{ingredient}".</p>
      ) : (
        <ul className="list-none p-0">
          {meals.map((m) => (
            <li key={m.idMeal}>
              <div className="border p-4 mb-4 rounded shadow bg-gradient-to-r from-black-100 to-gray-800 cursor-pointer flex items-center gap-4">
                {m.strMealThumb && (
                  <img
                    src={m.strMealThumb}
                    alt={m.strMeal}
                    className="w-16 h-16 object-cover rounded"
                  />
                )}
                <div className="text-white">
                  <div className="font-semibold">{m.strMeal}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MealIdeas;