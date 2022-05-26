import styles from "./productcard.module.css";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../../utils/userContext";

function ProductCard({ iteminfo, itemIdAsString }) {
  const { user, setUser } = useContext(UserContext);
  const currentList = user.shoppingList;

  function handleSubmit(e) {
    e.preventDefault();
    //iteminfo.quantity = e.target[0].value;
    setUser({ shoppingList: [...currentList, iteminfo] });
  }

  return (
    <div className={styles.cardwrapper}>
      <div className={styles.image}>
        <Link href="/groceries/[id]" as={itemIdAsString}>
          <Image src={iteminfo.image} alt="" width={100} height={100} />
        </Link>
      </div>
      <div className={styles.textwrapper}>
        <h4 className={styles.title}>{iteminfo.name}</h4>
        <p className={styles.review}>Write a review</p>
      </div>
      <h4 className={styles.price}>£{iteminfo.price}</h4>
      <form className={styles.quantity} onSubmit={handleSubmit} id="form">
        <input type="number" min="1" max="100" className={styles.input}></input>
        <button className={styles.addbutton}>Add</button>
      </form>
    </div>
  );
}

export default ProductCard;
