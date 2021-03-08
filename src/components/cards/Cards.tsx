import * as React from "react";
import { cards } from "./cardsinfo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export function Cards() {
  return (
    <div className="d-flex flex-wrap justify-content-between cards">
      {cards.map((card, index) => {
        return (
          <div
            className="card mb-5"
            style={{ maxWidth: "17rem" }}
            key={card.id}
          >
            <div className="card_country">
              {card.country}/{card.capital}
            </div>
            <img
              src={`../../public/assets/img/country/${card.img}.jpg`}
              className="img-fluid"
              alt={`${card.country}`}
            ></img>
          </div>
        );
      })}
    </div>
  );
}
