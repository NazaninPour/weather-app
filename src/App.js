import "./App.css";
import axios from "axios";
import React, { useState } from "react";

function App() {
  let [city, setCity] = useState("London");

  function submitHandle(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d9838178b5b401f1b4e7cb5af18e210&units=metric`;
    axios.get(url).then(realtemp);
  }
  function submitData(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function realtemp(respond) {
    let livetemp = Math.round(respond.data.main.temp);
    let livehumidity = Math.round(respond.data.main.humidity);
    let livePrecip = Math.round(respond.data.main.precipprob);
    let livewind = Math.round(respond.data.main.windspeed);
    let livecondition = respond.data.main.conditions;
    console.log(respond);
    let hum = document.querySelector("#hum");
    hum.innerHTML = `${livehumidity}%`;
    let prec = document.querySelector("#prec");
    prec.innerHTML = `${livePrecip}%`;
    let win = document.querySelector("#win");
    win.innerHTML = `${livewind} km/h`;
    let livedes = document.querySelector("#livedec");
    livedes.innerHTML = `${livecondition}`;
    let ltemp = document.querySelector(".num");
    ltemp.innerHTML = livetemp;
  }

  return (
    <div className="container">
      <div className="app">
        <div className="row">
          <div className="col-6">
            <form className="form" id="addon-wrapping" onSubmit={submitHandle}>
              <input
                type="search"
                className="form-control"
                placeholder="Enter a City"
                aria-label="City"
                aria-describedby="addon-wrapping"
                onChange={submitData}
              />
            </form>
          </div>
          <span className="col-3">
            <form onSubmit={submitHandle}>
              <input type="submit" className="btn btn-primary" value="Search" />
            </form>
          </span>
        </div>

        <h1 id="citytitle">{city}</h1>
        <br />

        <div className="row">
          <div className="col-6">
            <img
              className="sign"
              id="signicon"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="wheatersign"
            />
            <span>
              <h2 className="num">19</h2>
              <h2 className="degree">
                <a href="/" id="frn">
                  °F|
                </a>
                <a href="/" id="ctg">
                  °C
                </a>
              </h2>
            </span>
            <ul className="data">
              <li>
                Precipitation:
                <span id="prec">20%</span>
              </li>
              <li>
                Humidity:
                <span id="hum">20%</span>
              </li>
              <li>
                Wind:
                <span id="win">20 km/h</span>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul className="extra">
              <li>
                <strong>Weather</strong>
              </li>
              <li id="realtime">Sunday 18:00</li>
              <li id="livedec">Partly cloudy</li>
            </ul>
          </div>
        </div>
        <div className="forcast" id="forcast"></div>
      </div>
      <div className="text-center">
        <small>
          <a href="https://github.com/NazaninPour/weather-app">github</a>
        </small>
      </div>
    </div>
  );
}

export default App;
