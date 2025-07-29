import styles from "./instructions.module.css";

export default function Instructions({ food, isLoading }) {
  return (
    <div className={styles.instructions}>
      <ul>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => (
            <li key={food.foodId}>{step.step}</li>
          ))
        )}
      </ul>
    </div>
  );
}
