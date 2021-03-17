import React, { useState, useEffect } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { RootState } from "../../models/RootState";

const api = {
  base: "https://api.ratesapi.io/api/latest?base=",
};

type Сurrencies = {
  rates?: {
    EUR?: number;
    USD?: number;
    RUB?: number;
  };
};

export function Currency() {
  const currency = useSelector(
    (state: RootState) => state.countries.currentCountry.currency,
  );

  const [rate, setRates] = useState<Сurrencies>({});

  useEffect(() => {
    if (currency) {
      fetch(`${api.base}${currency}&HTTP / 2`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setRates(result);
        });
    }
  }, [setRates, currency]);

  function saveToFixed(numb: number) {
    if (typeof numb === "number") {
      if (numb % 10 !== 0) {
        return numb.toFixed(2);
      } else numb;
    } else 1;
  }

  return (
    <div>
      {typeof rate.rates !== "undefined" ? (
        <div className="rates-box">
          <div>
            1 {currency} -{" "}
            {currency === "EUR" ? 1 : saveToFixed(rate.rates.EUR)} EUR
          </div>
          <div>
            1 {currency} -{" "}
            {currency === "USD" ? 1 : saveToFixed(rate.rates.USD)} USD
          </div>
          <div>
            1 {currency} - {saveToFixed(rate.rates.RUB)} RUB
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
