import React from "react";

import "./Catalog.scss";
import { Card, CardTitle, Col } from "react-materialize";
import { Link } from "react-router-dom";
import axios from "axios";
import Film from "../Film/Film";

const details = id => {
  const url = `https://mfwkweb-api.clarovideo.net/services/content/data?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.86&region=mexico&HKS=9s5hqq76r3g6sg4jb90l38us52&user_id=22822863&group_id=${id}`;

  axios
    .get(url)

    .then(res => {
      console.log("res", res.data.response.group.common);

      console.log("----------------------------------------------");

      this.props.history.push("/login");
    })

    .catch(err => console.log("error", err));

  console.log("id", id);
};

const Catalog = ({ el }) => (
  <>
    <Link to={{ pathname: `/film`, id: `${el.id}` }}>
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

export default Catalog;
