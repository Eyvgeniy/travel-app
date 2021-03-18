import React, { useEffect, useCallback, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Slider } from "../components/slider/Slider";
import VideoPlayer from "../components/player/VideoPlayer";
import MapCountry from "../components/map/MapCountry";
import { Weather } from "../components/weather/Weather";
import { DateTime } from "../components/date/DateTime";
import { Currency } from "../components/currency/Currency";
import { fetchСountryData } from "../slices/countries";
import { useTranslation } from "react-i18next";
import { RootState } from "../models/RootState";
import "./Country.css";

const Country = (): JSX.Element => {
  const dispatch = useDispatch();
  const params = useParams() as { id: string };
  const urlId = params.id;
  const { id, country, lang } = useSelector((state: RootState) => ({
    id: state.countries.actualId,
    country: state.countries.currentCountry,
    lang: state.lang,
  }));
  const currentId = id || urlId;
  const { t } = useTranslation();
  const memoDispatch = useCallback(() => {
    dispatch(fetchСountryData({ id: currentId, lang }));
  }, [currentId, lang]);

  useEffect(() => {
    memoDispatch();
    window.scrollTo(0, 0);
  }, [lang]);
  return (
    <Container fluid>
      <Row>
        <Col className="text-center position-relative" sm={2}></Col>
        <Col sm={8}>
          <section>
            <div className="text-center">
              <h2>
                {country.name} ({country.capital})
              </h2>
            </div>
            <Image
              src={`${country.imageUrl}.jpg`}
              className="w-100 mt-2"
              rounded
            />

            <div className="text-center mt-3">
              <p>{country.description}</p>
            </div>
          </section>
          <hr />
          <section>
            <div className="mt-5">
              <h4 className="text-center">{t("sights")}</h4>
              {country.places && <Slider />}
            </div>
          </section>
          <hr />
          <section>
            <h3>{t("video")}</h3>
            <VideoPlayer src={country.videoUrl} />
          </section>
          <hr />
          <section>
            <h3>{t("map")}</h3>
            <MapCountry />
          </section>
        </Col>
        <Col className="text-center position-relative" sm={2}>
          {/* <section className="widgets"> */}
          <DateTime />
          <Weather />
          <Currency />
          {/* </section> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Country;
