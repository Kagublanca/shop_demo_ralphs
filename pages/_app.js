import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { UserContext } from "../utils/userContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({ userName: "", shoppingList: [] });

  return (
    <Layout>
      <UserContext.Provider value={{ user, setUser }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </Layout>
  );
}

export default MyApp;
