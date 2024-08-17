import "./App.css";

import DisplayWeather from "./DisplayWeather.js";
import Forecast from "./Forecast";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p></p>
        <div>
          <DisplayWeather />
        </div>

        <div>
          <Forecast city="Madrid" />
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
