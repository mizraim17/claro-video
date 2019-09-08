import React, { useState } from "react";
import { Row, Col, Table } from "react-materialize";
import axios from "axios";
import "./Film.scss";
import { bold } from "ansi-colors";

const Film = props => {
  const [film, setFilm] = useState();

  React.useEffect(() => {
    const url = `https://mfwkweb-api.clarovideo.net/services/content/data?device_id=web&device_category=web&device_model=web&device_type=      web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.86&region=mexico&HKS=9s5hqq76r3g6sg4jb90l38us52&user_id=22822863&group_id=${props.location.id}`;

    axios
      .get(url)
      .then(response => {
        console.log("===", response.data.response.group.common);
        setFilm(response.data.response.group.common);
      })

      .catch(err => console.log(err));
  }, []);

  return (
    <div className="Film">
      <h1>Film........................</h1>

      <a href="/">
        <button>back </button>
      </a>
      {film ? (
        <div className="Film__container  ">
          <Row>
            <Col m={7} l={7} className=" ">
              <img src={film.image_base_square} height="600" alt="" />
            </Col>
            <Col m={5} l={5} className="Film__detail">
              <Table>
                <thead>
                  <tr>
                    <th className="Film__detail--title">
                      {film.title}
                      {` (${film.extendedcommon.media.publishyear})`}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <span className="Film__detail--bold">
                          Descripción:{" "}
                        </span>
                        {film.description}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <span className="Film__detail--bold">Duración: </span>
                        {film.duration}
                      </p>

                      <p>
                        <span className="Film__detail--bold">
                          Clasificación:{" "}
                        </span>
                        {film.extendedcommon.media.rating.code}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Film;
