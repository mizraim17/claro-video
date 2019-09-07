import React from "react";
import "./Catalog.scss";
import { Card, CardTitle, Col } from "react-materialize";

const Catalog = ({ el }) => (
  <>
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
  </>
);

export default Catalog;
