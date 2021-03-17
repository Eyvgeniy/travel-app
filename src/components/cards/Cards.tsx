import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectCountry } from "../../slices/countries";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useTranslation } from "react-i18next";
import { RootState } from "models/RootState";

export function Cards() {
  const countries = useSelector((state: RootState) => {
    const { list, filter } = state.countries;
    if (filter === "") return list;
    return list.filter(
      (el) =>
        el.name.toLowerCase().includes(filter.toLowerCase()) ||
        el.capital.toLowerCase().includes(filter.toLowerCase()),
    );
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();
  return (
    <div className="d-flex flex-wrap justify-content-around cards p-0 cards">
      {countries.length > 0 ? (
        countries.map((country) => {
          return (
            <div
              className="card mb-5 mr-2"
              style={{ maxWidth: "17rem" }}
              key={country.id}
              onClick={() => {
                dispatch(selectCountry({ id: country.id }));
                history.push(`/country/${country.id}`);
              }}
            >
              <img
                src={`${country.imageUrl}.jpg`}
                className="img-fluid"
                alt={`${country.name}`}
              ></img>
              <div className="card-body">
                <h5 className="card-title">{country.name}</h5>
                <p className="card-text">{country.capital}</p>
              </div>
            </div>
          );
        })
      ) : (
        <p className="h-75">{t("emptySearch")}</p>
      )}
    </div>
  );
}
