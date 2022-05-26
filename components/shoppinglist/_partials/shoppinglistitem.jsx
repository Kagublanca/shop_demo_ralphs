import styles from "./shoppinglistitem.module.css";

function ShoppingListItem({ altBackground, name, price, quant }) {
  return (
    <div
      className={styles.listitem}
      id={altBackground ? styles.white : styles.gray}
    >
      <p className={styles.text}>{quant}</p>
      <p className={styles.text}>{name}</p>
      <p className={styles.text}>£{price}</p>
    </div>
  );
}

export default ShoppingListItem;
