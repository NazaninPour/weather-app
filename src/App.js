import "./App.css";

function App() {
  return (
    <div class="container">
      <div class="app">
        <div class="row">
          <div class="col-6">
            <form class="form" id="addon-wrapping">
              <input
                type="search"
                class="form-control"
                placeholder="City"
                aria-label="City"
                aria-describedby="addon-wrapping"
              />
            </form>
          </div>
          <span class="col-3">
            <form>
              <input type="submit" class="btn btn-primary" value="Search" />
            </form>
          </span>
        </div>

        <h1 id="citytitle">New York</h1>
        <br />

        <div class="row">
          <div class="col-6">
            <img
              class="sign"
              id="signicon"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="wheatersign"
            />
            <span>
              <h2 class="num">29</h2>
              <h2 class="degree">
                <a href="/" id="frn">
                  °F|
                </a>
                <a href="/" id="ctg">
                  °C
                </a>
              </h2>
            </span>
            <ul class="data">
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
          <div class="col-6">
            <ul class="extra">
              <li>
                <strong>Weather</strong>
              </li>
              <li id="realtime">Sunday 18:00</li>
              <li id="livedec">Partly cloudy</li>
            </ul>
          </div>
        </div>
        <div class="forcast" id="forcast"></div>
      </div>
    </div>
  );
}

export default App;
