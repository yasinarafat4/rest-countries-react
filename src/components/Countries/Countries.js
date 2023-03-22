// for shortcut type rsc+enter
import React, { useEffect, useState } from "react";
import DisplayCountries from "../DisplayCountries/DisplayCountries";

// import css file
import "./Countries.css";

const LoadCountries = () => {
  // step-1: declare useState
  const [countries, setCountries] = useState([]);

  // step-2: using useEffect
  useEffect(() => {
    // step-3: fetching data
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data)); // step-4: set the data
  }, []);

  return (
    <div>
      <h1>Visiting Every Country of the World!!!</h1>
      <h3>Available Countries: {countries.length} </h3>
      <div className="countries">
        {/* step-5.1: using map() */}
        {countries.map((country) => (
          <DisplayCountries
            key={country.cca3}
            name={country.name.common}
            population={country.population}
            capital={country.capital}
            flag={country.flags.png}
          ></DisplayCountries>

          /* After shorting
          <DisplayCountries>country = {country}</DisplayCountries>
           */
        ))}
      </div>
    </div>
  );
};

export default LoadCountries;
