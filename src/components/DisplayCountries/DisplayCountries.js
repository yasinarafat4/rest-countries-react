// And step-5: display data in UI
import React from "react";

// connection with css file
import "./DisplayCountries.css";

const DisplayCountries = (props) => {
  return (
    <div className="country">
      <h2>Name: {props.name}</h2>
      <p>Population: {props.population}</p>
      <h3>Capital: {props.capital}</h3>
      <img src={props.flag} alt="" />
    </div>

    /* After shorting

    <div className="country">
      <h2>Name: {props.country.name.common}</h2>
      <p>Population: {props.country.population}</p>
      <h3>Capital: {props.country.capital}</h3>
      <img src={props.country.flag} alt="" />
    </div>
    */
  );
};

export default DisplayCountries;
