import React from "react";
import { Card } from "../component/card.js";
import "../../styles/home.css";

export const Home = () => (
  <div className="container-fluid" id="main_container">
    <div>
      <h2>People</h2>
      <div className="col">
        <Card id="card" />
      </div>
    </div>
  </div>
);
