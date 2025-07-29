import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";
import Instructions from "./Instructions";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const api = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchDetails() {
      const response = await fetch(`${url}?apiKey=${api}`);
      const data = await response.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
      console.log("api_key", api);
    }
    fetchDetails();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.title}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt={food.title} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>Prep time: {food.readyInMinutes} Minutes</strong>
          </span>
          <span>{food.vegetarian ? "Vegetarian" : "Non-vegetarian"}</span>
        </div>

        <h3>Ingredients</h3>
        <ItemList food={food} />

        <h3>Instructions</h3>
        <Instructions food={food} isLoading={isLoading} />
      </div>
    </div>
  );
}
