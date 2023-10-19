import React from "react";

import { useState, useEffect } from "react";

export const Card = () => {
  const [cardData, setCardData] = useState([]);

  const getDataList = async () => {
    const url = "https://swapi.dev/api/people/";

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
          <div className="card" value={card} key={index}>
            <div className="card-body">
              <h5 className="card- title">{card.name}</h5>
              <p className="card-text">Height: {card.height}</p>
              <p className="card-text">Weight: {card.mass}</p>
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
