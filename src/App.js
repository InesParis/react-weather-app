import "./App.css";
import SearchEngine from "./SearchEngine";
import WeatherData from "./WeatherData";
import Forecast from "./Forecast";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <SearchEngine />
        </p>
        <div>
          <WeatherData />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <div>
          <Forecast />
        </div>
      </header>
    </div>
  );
}

export default App;
