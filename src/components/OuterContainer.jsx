import styles from "./outercontainer.module.css";

export default function OuterContainer({ children }) {
  return <div className={styles.parentContainer}>{children}</div>;
}
