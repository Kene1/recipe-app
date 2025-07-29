import { useEffect, useState } from "react";
import styles from "./search.module.css";

const url = "https://api.spoonacular.com/recipes/complexSearch?";
const API_KEY = "e378c0e54eef40d88ce349b0cd729281";
// const api = import.meta.env.VITE_API_KEY;
export const Search = ({ setFoodData }) => {
  const [query, setQuery] = useState("bread");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`
      );
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchData();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
