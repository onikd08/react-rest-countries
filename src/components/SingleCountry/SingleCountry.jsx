import React from "react";
import "./SingleCountry.css";

const SingleCountry = ({ country }) => {
  const { name, population, region, flags } = country;
  return (
    <div className="single-country">
      <img src={flags.png} alt="" />
      <h3>Name: {name.common}</h3>
      <small>{region}</small>
      <p>Population: {population}</p>
    </div>
  );
};

export default SingleCountry;
