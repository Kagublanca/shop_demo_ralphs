import styles from "./seasonalribbon.module.css";
import SeasonalCard from "./_partials/seasonalcard.component";
import { useEffect, useState } from "react";


function SeasonalRibbon() {
  const initialState = [
    {
      image:
        "https://images.unsplash.com/photo-1562193882-0ea2da14e6e3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374",
    },
    {
      image:
        "https://images.unsplash.com/photo-1562193882-0ea2da14e6e3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374",
    },
    {
      image:
        "https://images.unsplash.com/photo-1562193882-0ea2da14e6e3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374",
    },
    {
      image:
        "https://images.unsplash.com/photo-1562193882-0ea2da14e6e3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374",
    },
  ];
  const [seasonalPromotions, setSeasonalPromotions] = useState(initialState);

  async function fetchPromotions() {
    const response = await fetch(
      "https://shop-demo-ralphs.herokuapp.com/seasonal"
    );
    const data = await response.json();
    console.log(data);
    setSeasonalPromotions(data.payload);
  }

  useEffect(() => {
    fetchPromotions();
  }, []);

  return (
    <div>
      <h1 className={styles.text} id={styles.header} onClick={fetchPromotions}>
        Ready for Summer?
      </h1>
      <p className={styles.text} id={styles.subtext}>
        Explore our range of great items
      </p>
      <div className={styles.cardwrapper}>
        {seasonalPromotions.map((item) => {
          return (
            <SeasonalCard
              key={item.id}
              image={item.image}
              header={item.heading}
              subtext={item.subtext}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SeasonalRibbon;
