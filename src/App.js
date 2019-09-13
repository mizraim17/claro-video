import React, { useState } from "react";
import "materialize-css/dist/css/materialize.css";
import { CatalogContext } from "./CatalogContext";
import Router from "./Router";
import M from "materialize-css";

function App() {
  const [id, setId] = useState();
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState();

  return (
    <CatalogContext.Provider
      value={{
        setLoading,
        id,
        setId,
        loading,
        filter,
        setFilter
      }}
    >
      <Router></Router>
    </CatalogContext.Provider>
  );
}

export default App;
