import React, { useState } from "react";
import "materialize-css/dist/css/materialize.css";
import Router from "./Router";
import { CatalogContext } from "./CatalogContext";
import axios from "axios";

function App() {
  const [catalogs, setCatalogs] = useState();
  const [id, setId] = useState();
  const [loading, setLoading] = useState(true);
  const [cat1, setCat1] = useState();

  React.useEffect(() => {
    const url =
      "https://mfwkweb-api.clarovideo.net/services/content/list?quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=43861&region=mexicoapi_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5hqq76r3g6sg4jb90l38us52&isCacheable=true&node=gen_accion&domain=https%3A%2F%2Fmfwkweb-api.clarovideo.net%2F&origin=https%3A%2F%2Fwww.clarovideo.com%2F&user_id=22822863";

    axios.get(url).then(response => {
      console.log(response.data.response.groups);
      setCatalogs(response.data.response.groups);
      setCat1(response.data.response.groups);
      setLoading(false);
    });
  }, []);

  return (
    <CatalogContext.Provider
      value={{ catalogs, setCatalogs, id, setId, loading, cat1, setCat1 }}
    >
      <Router></Router>
    </CatalogContext.Provider>
  );
}

export default App;
