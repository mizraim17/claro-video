import React, { useContext } from "react";

import "./Catalog.scss";
import { Card, CardTitle, Col } from "react-materialize";
import { Link } from "react-router-dom";
import { CatalogContext } from "../../CatalogContext";

const Catalog = ({ el }) => {
  const { id, setId } = useContext(CatalogContext);

  return (
    <>
      <Col s={12} m={6} l={4} xl={3}>
        <Link
          onClick={() => setId(el.id)}
          to={{ pathname: `/film`, id: `${id}` }}
        >
          <Card
            responsive="true"
            className="medium Card"
            header={
              <CardTitle
                responsive="true"
                image={el.image_small}
                width={30}
              ></CardTitle>
            }
          >
            <p className="description">{el.description}</p>
          </Card>
        </Link>
      </Col>
    </>
  );
};

export default Catalog;
