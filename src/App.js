import "./App.css";

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

        <div></div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
