import React, { useState } from "react";
import "materialize-css/dist/css/materialize.css";
import Router from "./Router";
import { CatalogContext } from "./CatalogContext";

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
