import React, { useContext, useState } from "react";
import "./Home.scss";
import "materialize-css/dist/css/materialize.css";
import { CatalogContext } from "../../CatalogContext";
import { Row } from "react-materialize";
import axios from "axios";
import Catalog from "../Catalog/Catalog";
import Loader from "react-loader-spinner";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
  const [catalogs, setCatalogs] = useState();
  const { loading, setLoading, filter, setFilter } = useContext(CatalogContext);

  React.useEffect(() => {
    const url =
      "https://mfwkweb-api.clarovideo.net/services/content/list?quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=43861&region=mexicoapi_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5hqq76r3g6sg4jb90l38us52&isCacheable=true&node=gen_accion&domain=https%3A%2F%2Fmfwkweb-api.clarovideo.net%2F&origin=https%3A%2F%2Fwww.clarovideo.com%2F&user_id=22822863";

    axios.get(url).then(response => {
      console.log(response.data.response.groups);
      setCatalogs(response.data.response.groups);
      setFilter(response.data.response.groups);
      setLoading(false);
    });
  }, []);

  let word = "";

  const closeSearchbar = () => {
    document.getElementById("search").value = "";
    setFilter(catalogs);
  };

  const onChange = e => {
    e.preventDefault();
    word = e.target.value;

    setFilter(
      catalogs.filter(el =>
        el.title
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(word.toLowerCase())
      )
    );
  };

  return (
    <div className="Home">
      <SearchBar {...{ setLoading, onChange, closeSearchbar }} />
      {loading ? (
        <div className="Loader">
          <Loader type="Oval" color="#00BFFF" height="400" width="400" />
        </div>
      ) : (
        <Row>
          {catalogs
            ? filter.map((el, i) => {
                return <Catalog el={el} key={i} />;
              })
            : ""}
        </Row>
      )}
    </div>
  );
};

export default Home;
