import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { UserContext } from "../utils/userContext";
import { useState, useMemo } from "react";

function MyApp({ Component, pageProps }) {
  //Setting up the user in 'global-esque' scope, using useContext.
  const [user, setUser] = useState({ userName: "", shoppingList: [] });
  //useMemo to increase performance - will only run when its dependencies change.
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Layout>
      <UserContext.Provider value={providerValue}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </Layout>
  );
}

export default MyApp;
