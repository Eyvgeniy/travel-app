import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Slider } from "../components/slider/Slider";
import VideoPlayer from "../components/player/VideoPlayer";
import Map from "../components/map/Map";
import { fetchСountryData } from "../slices/countries";

const Country = (): JSX.Element => {
  const dispatch = useDispatch();
  const { id, country, lang } = useSelector((state) => ({
    id: state.countries.actualId,
    country: state.countries.currentCountry,
    lang: state.lang,
  }));
  const memoDispatch = useCallback(() => {
    dispatch(fetchСountryData({ id, lang }));
  }, [id, lang]);
  const history = useHistory();
  console.log(history.location);

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
          {country.places && <Slider />}
          <VideoPlayer src={country.videoUrl} />
          <Map />
        </Col>
        <Col sm={3}>Виджеты</Col>
      </Row>
    </Container>
  );
};

export default Country;
