import styles from "./button.module.css";

export default function Button({ item, setFoodId }) {
  return (
    <div>
      <button
        onClick={() => {
          console.log(item.id);
          setFoodId(item.id);
        }}
        className={styles.itemButton}
      >
        View Recipe
      </button>
    </div>
  );
}
