import TopRibbon from "../topribbon/topribbon.component";
import SearchBox from "../searchbox/searchbox.component";
import styles from "./layout.module.css";
import Router from "next/router";
import Image from "next/image";
import Link from "next/link";

function Layout({ children }) {
  return (
    <div>
      <TopRibbon />
      <div className={styles.input}>
        <div className={styles.image}>
          <Link href={"/"}>
            <Image src={"/Ralphs_Logo.png"} alt="" width={150} height={100} />
          </Link>
        </div>
        <SearchBox />
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
