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
      {cardData.map((card) => {
        return (
          <div className="card">
            <div className="card-body">
              <h5 className="card- title">{card.name}</h5>
              <p className="card-text">
                Height:{card.height}  Weight:{card.mass}
              </p>
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

/*return(<div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card- title">{card.name}</h5>
        <p className="card-text">
          {card.height} , {card.mass}
        </p>
        <a href="#" className="btn btn-primary">
          {card.url}
        </a>
      </div>
    </div>*/
