import React, { useContext } from "react";

import "./Catalog.scss";
import { Card, CardTitle, Col } from "react-materialize";
import { Link } from "react-router-dom";
import { CatalogContext } from "../../CatalogContext";

const Catalog = ({ el }) => {
  const { id, setId } = useContext(CatalogContext);

  return (
    <>
      <Link
        onClick={() => setId(el.id)}
        to={{ pathname: `/film`, id: `${el.id}` }}
      >
        <Col s={12} m={4} l={3}>
          <Card
            className="medium Card"
            header={
              <CardTitle
                responsive="true"
                image={el.image_small}
                width={30}
              ></CardTitle>
            }
          >
            <p className="txt-news">{el.description}</p>
          </Card>
        </Col>
      </Link>
    </>
  );
};

export default Catalog;
