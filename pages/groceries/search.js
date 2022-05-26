import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/Search.module.css";
import ProductCard from "../../components/productcard/productcard";
import ShoppingList from "../../components/shoppinglist/shoppingllist";
import { useContext } from "react";
import { UserContext } from "../../utils/userContext";

export default function Search() {
  const { user, setUser } = useContext(UserContext);
  const params = new URLSearchParams(window.location.search);
  const query = params.get("query");

  const [searchResult, setSearchResult] = useState("");
  const [displayResults, setDisplayResults] = useState([]);

  async function getResults() {
    if (searchResult == "") {
      return;
    }
    const response = await fetch(
      `https://shop-demo-ralphs.herokuapp.com/stock/${searchResult}`
    );
    const data = await response.json();
    setDisplayResults(data.payload);
  }

  useEffect(() => {
    setSearchResult(query);
  }, [, query]);

  useEffect(() => {
    getResults();
    // eslint-disable-next-line
  }, [searchResult]);

  return (
    <div className={styles.content}>
      <h1 className={styles.resulttext}>
        Showing results for &quot;{searchResult}&quot;
      </h1>
      <div className={styles.shopwrapper}>
        <div className={styles.shopcontent}>
          {displayResults.map((item, index) => {
            const itemIdAsString = item.id.toString();
            return (
              <>
                <ProductCard iteminfo={item} itemIdAsString={itemIdAsString} />
              </>
            );
          })}
        </div>
        <ShoppingList />
      </div>
    </div>
  );
}
