import styles from "./serviceribbon.module.css";
import Link from "next/link";

const ribbonitems = [
  {
    buttonName: "Groceries",
    buttonPath: "/groceries/search",
  },
  {
    buttonName: "Tobys Clothing",
    buttonPath: "/",
  },
  {
    buttonName: "Ralph Club Card",
    buttonPath: "/",
  },
  {
    buttonName: "Boo's Bank",
    buttonPath: "/",
  },
  { buttonName: "Mobile", buttonPath: "/" },
  {
    buttonName: "Recipes",
    buttonPath: "/",
  },
  {
    buttonName: "Daxters Photos",
    buttonPath: "/",
  },
  {
    buttonName: "Magazine",
    buttonPath: "/",
  },
  {
    buttonName: "Delivery Saver",
    buttonPath: "/",
  },
];

function ServiceRibbon() {
  return (
    <div className={styles.ribbonwrapper}>
      {ribbonitems.map((item, index) => {
        return (
          <Link key={index} href={item.buttonPath}>
            <p key={index} className={styles.ribbonitem}>
              {item.buttonName}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default ServiceRibbon;
