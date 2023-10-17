import React from "react";

export const Card = (props) => {
  <div className="card">
    <img src="..." className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.text}</p>
      <a href="#" className="btn btn-primary">
        {props.link}
      </a>
    </div>
  </div>;
};
