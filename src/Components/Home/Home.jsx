import React, { useContext } from "react";
import "./Home.scss";
import "materialize-css/dist/css/materialize.css";
import { CatalogContext } from "../../CatalogContext";
import { Row } from "react-materialize";
import Catalog from "../Catalog/Catalog";
import Loader from "react-loader-spinner";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
  const { catalogs, loading, setLoading, cat1, setCat1 } = useContext(
    CatalogContext
  );

  let word = "";

  const closeSearchbar = () => {
    document.getElementById("search").value = "";
    setCat1(catalogs);
  };

  const onChange = e => {
    e.preventDefault();
    word = e.target.value;

    setCat1(
      catalogs.filter(el => el.title.toLowerCase().includes(word.toLowerCase()))
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
          {catalogs ? (
            cat1.map((el, i) => {
              return <Catalog el={el} key={i} />;
            })
          ) : (
            <p>nada</p>
          )}
        </Row>
      )}
    </div>
  );
};

export default Home;
