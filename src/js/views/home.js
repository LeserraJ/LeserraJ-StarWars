import React from "react";
import { Card } from "../component/card.js";
import "../../styles/home.css";
import { Planet_Card } from "../component/pcard.js";
import { Starship_Card } from "../component/scard.js";

export const Home = () => (
  <div className="container-fluid" id="main_container">
    <div className="card-container">
      <h2>People:</h2>
      <div className="col">
        <Card id="card " />
      </div>
    </div>
    <div className="card-container">
      <h2>Planets:</h2>
      <div className="col">
        <Planet_Card id="card " />
      </div>
    </div>
    <div className="card-container">
      <h2>Starships:</h2>
      <div className="col">
        <Starship_Card id="card " />
      </div>
    </div>
  </div>
);
