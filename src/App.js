import "./App.css";

import Forecast from "./Forecast";
import DisplayWeather from "./DisplayWeather.js";
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
          <Forecast />
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
