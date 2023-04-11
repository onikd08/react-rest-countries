import React, { useEffect, useState } from "react";
import SingleCountry from "../SingleCountry/SingleCountry";
import "./AllCountries.css";

const AllCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="countries-container">
      {countries.map((country) => (
        <SingleCountry
          country={country}
          key={country.name.common}
        ></SingleCountry>
      ))}
    </div>
  );
};

export default AllCountries;
