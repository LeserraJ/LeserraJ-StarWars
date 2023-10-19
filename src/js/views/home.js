import React from "react";
import { Card } from "../component/card.js";
import "../../styles/home.css";
import { Planet_Card } from "../component/pcard.js";
import { Starship_Card } from "../component/scard.js";

export const Home = () => (
  <>
    <div className="input-group">
      <div className="form-outline">
        <input
          type="search"
          id="form1"
          className="form-control"
          placeholder="Enter Name"
        />
        <button type="button" className="btn btn-primary">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>

    <div className="" id="main_container">
      <div className="card-container">
        <div className="row gx-2">
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
    </div>
  </>
);
