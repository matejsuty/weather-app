import "./App.css";
import React from "react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";

function App() {

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({q: "london"});
    console.log(data);
  }

  fetchWeather();
  
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TemperatureAndDetails />
      
      <Forecast title="Hourly forecast" />
      <Forecast title="Daily forecast" />
    </div>
  );
}

export default App;
