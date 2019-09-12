import React, { useContext } from "react";
import "./Catalog.scss";
import { Card, CardTitle, Col } from "react-materialize";
import { CatalogContext } from "../../CatalogContext";
import { Link } from "react-router-dom";

const Catalog = ({ el }) => {
  const { id, setId } = useContext(CatalogContext);

  return (
    <div className="Catalog">
      <Col s={12} m={6} l={4} xl={3}>
        <Link
          className="Catalog__link"
          onClick={() => setId(el.id)}
          to={{ pathname: `/film`, id: `${id}` }}
        >
          <Card
            responsive="true"
            className="Catalog__card medium"
            header={
              <CardTitle
                responsive="true"
                image={el.image_small}
                width={30}
              ></CardTitle>
            }
          >
            <p className="Catalog__description">{el.description}</p>
          </Card>
        </Link>
      </Col>
    </div>
  );
};

export default Catalog;
