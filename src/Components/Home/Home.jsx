import React, { useContext } from "react";
import "materialize-css/dist/css/materialize.css";
import { Row } from "react-materialize";
import axios from "axios";

import Catalog from "../Catalog/Catalog";
import SearchBar from "../SearchBar/SearchBar";
import { FilmContext } from "../../FilmContext";

const Home = () => {
  // const { value, setValue } = useContext(FilmContext);
  // const [catalogs, setCatalogs] = React.useState();
  const { catalogs, setCatalogs } = useContext(FilmContext);

  return (
    <>
      {console.log("-----------", catalogs)}
      <SearchBar />
      <Row>
        {catalogs ? (
          catalogs.map((el, i) => {
            return <Catalog el={el} key={i} />;
          })
        ) : (
          <p>nada</p>
        )}
      </Row>
    </>
  );
};

export default Home;
