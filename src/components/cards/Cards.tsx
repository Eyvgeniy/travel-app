import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectCountry } from "../../slices/countries";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export function Cards() {
  const countries = useSelector((state) => {
    const { list, filter } = state.countries;
    if (filter === "") return list;
    return list.filter(
      (el) => el.name.includes(filter) || el.capital.includes(filter),
    );
  });
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="d-flex flex-wrap justify-content-between cards">
      {countries.map((country) => {
        return (
          <div
            className="card mb-5"
            style={{ maxWidth: "17rem" }}
            key={country.id}
            onClick={() => {
              dispatch(selectCountry({ id: country.id }));
              history.push(`/country`);
            }}
          >
            <div className="card_country">
              {country.name}/{country.capital}
            </div>
            <img
              src={`${country.imageUrl}.jpg`}
              className="img-fluid"
              alt={`${country.country}`}
            ></img>
          </div>
        );
      })}
    </div>
  );
}
