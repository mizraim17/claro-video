import React, { useContext } from "react";
import "materialize-css/dist/css/materialize.css";
import { CatalogContext } from "../../CatalogContext";
import { Row } from "react-materialize";
import Catalog from "../Catalog/Catalog";
import Loader from "react-loader-spinner";
import SearchBar from "../SearchBar/SearchBar";
import "./Home.scss";

const Home = () => {
  const { catalogs, loading } = useContext(CatalogContext);

  return (
    <>
      <SearchBar />

      {loading ? (
        <div className="Loader">
          <Loader type="Oval" color="#00BFFF" height="600" width="600" />
        </div>
      ) : (
        <Row>
          {catalogs ? (
            catalogs.map((el, i) => {
              return <Catalog el={el} key={i} />;
            })
          ) : (
            <p>nada</p>
          )}
        </Row>
      )}
    </>
  );
};

export default Home;
