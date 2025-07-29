import Button from "./Button";
import styles from "./fooditem.module.css";

export default function FoodItem({ item, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img src={item.image} alt={item.title} className={styles.itemImage} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{item.title}</p>
      </div>

      <div className={styles.buttonContainer}>
        <Button item={item} setFoodId={setFoodId} />
      </div>
    </div>
  );
}
