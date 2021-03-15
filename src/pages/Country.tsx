import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import { Slider } from "../components/slider/Slider";
import VideoPlayer from "../components/player/VideoPlayer";
import MapCountry from "../components/map/MapCountry";
import routes from "../routes";
import { addCurrentCountry } from "../slices/countries";
import { RootState } from '../models/RootState';

const Country = (): JSX.Element => {
  const dispatch = useDispatch();
  const { id, country } = useSelector((state: RootState) => ({
    id: state.countries.actualId,
    country: state.countries.currentCountry,
  }));
  useEffect(() => {
    const getPlacesData = async () => {
      try {
        const { data } = await axios.get(routes.getCountry(id));
        dispatch(addCurrentCountry({ data }));
      } catch (err) {
        console.error(err);
      }
    };
    getPlacesData();
  }, []);
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
          <MapCountry/>
        </Col>
        <Col sm={3}>Виджеты</Col>
      </Row>
    </Container>
  );
};

export default Country;
