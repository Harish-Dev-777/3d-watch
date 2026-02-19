import React from "react";
import { useState, useEffect } from "react";

const WeatherApp = () => {
  const KEY = "cad2dbf368c64047a0f155754252702";
  const CITY = "Nagapattinam";
  const URL = `https://api.weatherapi.com/v1/current.json?key= ${KEY}&q=${CITY}`;

  let [city, setCity] = useState(null);
  let [country, setCountry] = useState(null);
  let [region, setRegion] = useState(null);
  let [tempearature_c, setTemp_c] = useState(0);
  let [tempearature_f, setTemp_f] = useState(0);

  useEffect(() => {
    fetch(URL)
      .then((data) => {
        let jdata = data.json();
        jdata.then((data) => {
          console.log(data);
          setCity(data.location.name);
          setRegion(data.location.region);
          setCountry(data.location.country);
          setTemp_c(data.current.temp_c);
          setTemp_f(data.current.temp_f);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      <div>
        <h2>City</h2>
        <p>{city}</p>
        <h2>country</h2>
        <p>{country}</p>
        <h2>Region</h2>
        <p>{region}</p>
      </div>
      <div>
        <h2>Temperature</h2>

        <p>
          {tempearature_c} /{tempearature_f}
        </p>
      </div>
    </div>
  );
};

export default WeatherApp;
