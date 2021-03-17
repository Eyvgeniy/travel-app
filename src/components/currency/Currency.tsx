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

  return (
    <div>
      {typeof rate.rates !== "undefined" ? (
        <div className="rates-box">
          <div>1 EUR {currency === "EUR" ? 1 : rate.rates.EUR.toFixed(2)}</div>
          <div>1 USD {currency === "USD" ? 1 : rate.rates.USD.toFixed(2)}</div>
          <div>100 RUB {rate.rates.RUB.toFixed(2)}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
