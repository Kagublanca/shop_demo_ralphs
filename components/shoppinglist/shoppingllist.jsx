import styles from "./shoppinglist.module.css";
import ShoppingListItem from "./_partials/shoppinglistitem";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../utils/userContext";
function ShoppingList() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className={styles.listwrapper}>
      <button className={styles.button}>Checkout</button>
      {user.shoppingList.map((item, index) => {
        return (
          <ShoppingListItem
            name={item.name}
            price={item.price}
            key={index}
            altBackground={index % 2 === 1 ? true : false}
            quant={item.quantity}
          />
        );
      })}
    </div>
  );
}

export default ShoppingList;
