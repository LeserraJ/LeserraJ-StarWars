import React from "react";

import { useState, useEffect } from "react";

export const Planet_Card = () => {
  const [cardData, setCardData] = useState([]);

  const getDataList = async () => {
    const url = "https://swapi.dev/api/planets/";

    const response = await fetch(url);
    try {
      const responseJson = await response.json();
      const data = responseJson.results;
      setCardData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDataList();
  }, []);

  return (
    <>
      {cardData.map((card, index) => {
        return (
          <div className="card" key={index} value={card}>
            <div className="card-body">
              <h5 className="card- title">{card.name}</h5>
              <p className="card-text">Climate: {card.climate}</p>
              <p className="card-text">Population: {card.population}</p>
              <a href="#" className="btn btn-primary">
                {card.url}
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};
