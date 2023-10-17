import React from "react";

fetch("https://swapi.dev/api/people/")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data = JSON.parse(data);
    data.forEach((person) => {
      const markup = <h5>${person.name}</h5>;
    });
    console.log(data);
  })
  .catch((error) => console.log(error));

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
