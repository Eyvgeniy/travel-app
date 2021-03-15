import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Slider } from "../components/slider/Slider";
import VideoPlayer from "../components/player/VideoPlayer";
import Map from "../components/map/Map";
import { fetchСountryData } from "../slices/countries";
import { useTranslation } from "react-i18next";

const Country = (): JSX.Element => {
  const dispatch = useDispatch();
  const { id, country, lang } = useSelector((state) => ({
    id: state.countries.actualId,
    country: state.countries.currentCountry,
    lang: state.lang,
  }));
  const { t } = useTranslation();
  const memoDispatch = useCallback(() => {
    dispatch(fetchСountryData({ id, lang }));
  }, [id, lang]);

  useEffect(() => {
    memoDispatch();
  }, [lang]);
  return (
    <Container fluid>
      <Row>
        <Col sm={9}>
          <Image
            src={`${country.imageUrl}.jpg`}
            className="w-100 mt-2"
            rounded
          />
          <div className="text-center">
            <h2>Country {country.name}</h2>
            <h3>Capital {country.capital}</h3>
            <p>{country.description}</p>
          </div>
          <div className="">
            <div>
              <h4 className="text-center">{t("sights")}</h4>
              {country.places && <Slider />}
            </div>
            <VideoPlayer src={country.videoUrl} />
          </div>
          <Map />
        </Col>
        <Col sm={3}>
          <div className="bg-info mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            debitis et molestiae, quisquam incidunt dignissimos consequatur
            labore, sequi fuga dolore tenetur exercitationem odit asperiores
            porro deserunt! Error ratione assumenda voluptatibus, vero aut
            deleniti nulla voluptate debitis blanditiis quae magni voluptatum
            beatae illum optio ea, eius in, fuga quis perspiciatis! Veritatis.
          </div>
          <div className="bg-info mb-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            debitis et molestiae, quisquam incidunt dignissimos consequatur
            labore, sequi fuga dolore tenetur exercitationem odit asperiores
            porro deserunt! Error ratione assumenda voluptatibus, vero aut
            deleniti nulla voluptate debitis blanditiis quae magni voluptatum
            beatae illum optio ea, eius in, fuga quis perspiciatis! Veritatis.
          </div>
          <div className="bg-info mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            debitis et molestiae, quisquam incidunt dignissimos consequatur
            labore, sequi fuga dolore tenetur exercitationem odit asperiores
            porro deserunt! Error ratione assumenda voluptatibus, vero aut
            deleniti nulla voluptate debitis blanditiis quae magni voluptatum
            beatae illum optio ea, eius in, fuga quis perspiciatis! Veritatis.
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Country;
