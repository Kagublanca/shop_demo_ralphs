import { useState, useEffect } from "react";
import styles from "../../styles/Search.module.css";
import ProductCard from "../../components/productcard/productcard";
import ShoppingList from "../../components/shoppinglist/shoppingllist";

export default function Search() {
  //Fetch whatever the user typed in the 'search' box.
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

  //Sets the state 'Search result' to whatever the user typed, as soon as the page is loaded.
  useEffect(() => {
    setSearchResult(query);
  }, [, query]);

  //Fetch the result using the stock/ID endpoint.
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
