import styles from "./itemlist.module.css";

export default function ({ food }) {
  return (
    <div className={styles.ingredients}>
      <ol>
        {food.extendedIngredients?.map((ingredient) => (
          <li key={food.foodId}>
            {ingredient.name} - {ingredient.amount} {ingredient.unit}
          </li>
        ))}
      </ol>
    </div>
  );
}
