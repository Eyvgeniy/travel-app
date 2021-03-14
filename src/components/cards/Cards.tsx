import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectCountry } from "../../slices/countries";
import { cards } from "./cardsinfo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { RootState } from "models/RootState";

export function Cards() {
  const countries = useSelector((state: RootState) => state.countries.list);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="d-flex flex-wrap justify-content-between cards">
      {countries.map((country, index) => {
        return (
          <div
            className="card mb-5"
            style={{ maxWidth: "17rem" }}
            key={country.id}
            onClick={() => {
              dispatch(selectCountry({ id: country.id }));
              history.push("/country");
            }}
          >
            <div className="card_country">
              {country.name}/{country.capital}
            </div>
            <img
              src={`${country.imageUrl}.jpg`}
              className="img-fluid"
              alt={`${country.imageUrl}`}
            ></img>
          </div>
        );
      })}
    </div>
  );
}
