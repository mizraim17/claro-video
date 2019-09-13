import React, { useState, useContext } from "react";
import "./Film.scss";
import { CatalogContext } from "../../CatalogContext";
import { Link } from "react-router-dom";
import { Row, Col, Button, Navbar, Icon, Chip } from "react-materialize";
import axios from "axios";

const Film = props => {
  const { id } = useContext(CatalogContext);
  const [film, setFilm] = useState();

  React.useEffect(() => {
    const url = `https://mfwkweb-api.clarovideo.net/services/content/data?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.86&region=mexico&HKS=9s5hqq76r3g6sg4jb90l38us52&user_id=22822863&group_id=${id}`;

    axios
      .get(url)
      .then(response => {
        setFilm(response.data.response.group.common);
        console.log("--->", response.data.response.group.common);
      })

      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className="Film">
      <div>
        <Navbar
          className="Film__navbar"
          brand={
            <a href="/">
              <img
                src="../../../images/claro_video_logo.png"
                width="100"
                alt=""
              />
            </a>
          }
          alignLinks="right"
        ></Navbar>
      </div>

      {film ? (
        <div className="Film__container  ">
          <Row>
            <Col s={12} m={7} xl={7} className=" ">
              <img
                src={film.image_base_square}
                className="responsive-img"
                height="600"
                alt=""
              />
            </Col>
            <Col s={12} m={5} xl={5} className="Film__detail">
              <p className="Film__detail--title">
                {film.extendedcommon.media.originaltitle}
                {` (${film.extendedcommon.media.publishyear})`}
              </p>
              <p>
                <span className="Film__detail--bold">Descripción: </span>
                {film.description}
              </p>
              <p>
                <span className="Film__detail--bold">Duración: </span>
                {film.duration}
              </p>
              <p>
                <span className="Film__detail--bold">Clasificación: </span>
                {film.extendedcommon.media.rating.code}
              </p>

              {film
                ? film.extendedcommon.genres.genre.map((el, i) => (
                    <Chip className="Film__chip" key={el.id}>
                      {el.desc}
                    </Chip>
                  ))
                : ""}
              <Link to={"/"} className="Film__link">
                <Button
                  waves="light"
                  className="Film__button light-blue darken-3"
                >
                  <Icon>home</Icon>
                </Button>{" "}
              </Link>
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
