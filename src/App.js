import React, { useState, useEffect } from "react";
import "./App.css";
import CitySelection from "./components/CitySelection";
import VehicleSelection from "./components/VehicleSelection";
import ResultPage from "./components/ResultPage";
import GameDescription from "./components/GameDescription";

const link="https://yocket-assignment.onrender.com/api";

function App() {
  const [cities, setCities] = useState([]);
  const [cops, setCops] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [selectedCop1, setSelectedCop1] = useState({
    selectedCity: "",
    selectedVehicle: "",
  });
  const [selectedCop2, setSelectedCop2] = useState({
    selectedCity: "",
    selectedVehicle: "",
  });
  const [selectedCop3, setSelectedCop3] = useState({
    selectedCity: "",
    selectedVehicle: "",
  });
  const [captureResult, setCaptureResult] = useState(null);
  const [availableVehicles, setAvailableVehicles] = useState([]);
  const [availableCities, setAvailableCities] = useState([]);

  useEffect(() => {
    fetchCities();
    fetchVehicles();
    fetchCops();
  }, []);

  useEffect(() => {
    setAvailableVehicles(vehicles);
  }, [vehicles]);

  useEffect(() => {
    setAvailableCities(cities);
  }, [cities]);

  const fetchCities = async () => {
    const response = await fetch(`${link}/cities`);
    const data = await response.json();
    setCities(data);
  };

  const fetchCops = async () => {
    const response = await fetch(`${link}/cops`);
    const data = await response.json();
    setCops(data);
  };

  const fetchVehicles = async () => {
    const response = await fetch(`${link}/vehicles`);
    const data = await response.json();
    setVehicles(data);
  };

  const handleCapture = async () => {
    const selectedCops = [selectedCop1, selectedCop2, selectedCop3];
    const captureResults = [];

    for (const selectedCop of selectedCops) {
      const response = await fetch(`${link}/capture`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          copCity: selectedCop.selectedCity,
          copVehicle: selectedCop.selectedVehicle,
        }),
      });
      const data = await response.json();
      captureResults.push(data);
    }

    const successfulCapture = captureResults.find((result) => result.success);

    if (successfulCapture) {
      setCaptureResult(successfulCapture);
    } else {
      setCaptureResult({ success: false });
    }
  };

  const handleVehicleSelection = (selectedVehicle) => {
    const updatedVehicles = availableVehicles.map((vehicle) => {
      if (vehicle.kind === selectedVehicle) {
        return { ...vehicle, count: vehicle.count - 1 };
      }
      return vehicle;
    });
    setAvailableVehicles(updatedVehicles);

    // Update selected vehicle for each cop
    setSelectedCop1({ ...selectedCop1, selectedVehicle: selectedVehicle });
    setSelectedCop2({ ...selectedCop2, selectedVehicle: selectedVehicle });
    setSelectedCop3({ ...selectedCop3, selectedVehicle: selectedVehicle });
  };

  const handleCitySelection = (selectedCity) => {
    const updatedCities = availableCities.filter((city) => city.name !== selectedCity);
    setAvailableCities(updatedCities);
  
    // Update selected city for each cop
    setSelectedCop1({ ...selectedCop1, selectedCity: selectedCity });
    setSelectedCop2({ ...selectedCop2, selectedCity: selectedCity });
    setSelectedCop3({ ...selectedCop3, selectedCity: selectedCity });
  };

  return (
    <div className="App">
      <a href="/" className="header-link">
        <h1 className="header">CAPTURE THE FUGITIVE</h1>
      </a>
      {captureResult ? (
        <ResultPage result={captureResult} />
      ) : (
        <>
        <GameDescription/>
        <h2 style={{ textAlign: "center", marginTop: "110px", color: "black" }}> Let The Game Begin...</h2>
          <h2 style={{ textAlign: "center", marginTop: "50px", color: "black", backgroundColor:"#ccc", padding:"20px"}}>
            Cop 1
          </h2>
          <p>{cops[0]?.name}</p>
          <div className="image-container">
            <img src={cops[0]?.image} alt={cops[0]?.name} className="cop-image" />
          </div>
          <div className="select-container">
            <CitySelection
              cities={availableCities}
              handleCitySelection={handleCitySelection}
            />
          </div>
          <div className="select-container">
            <VehicleSelection
              vehicles={availableVehicles}
              handleVehicleSelection={handleVehicleSelection}
            />
          </div>

          <h2 style={{ textAlign: "center", marginTop: "70px", color: "Black" ,backgroundColor:"#ccc", padding:"20px"}}>
            Cop 2
          </h2>
          <p>{cops[1]?.name}</p>
          <div className="image-container">
            <img src={cops[1]?.image} alt={cops[1]?.name} className="cop-image" />
          </div>
          <div className="select-container">
            <CitySelection
              cities={availableCities}
              handleCitySelection={handleCitySelection}
              
            />
          </div>
          <div className="select-container">
            <VehicleSelection
              vehicles={availableVehicles}
              handleVehicleSelection={handleVehicleSelection}
            />
          </div>

          <h2 style={{ textAlign: "center", marginTop: "70px", color: "Black" ,backgroundColor:"#ccc", padding:"20px"}}>
            Cop 3
          </h2>
          <p>{cops[2]?.name}</p>
          <div className="image-container">
            <img src={cops[2]?.image} alt={cops[2]?.name} className="cop-image" />
          </div>
          <div className="select-container">
            <CitySelection
              cities={availableCities}
              handleCitySelection={handleCitySelection}
              
            />
          </div>
          <div className="select-container">
            <VehicleSelection
              vehicles={availableVehicles}
              handleVehicleSelection={handleVehicleSelection}
            />
          </div>
          <div className="button-container">
            <button onClick={handleCapture}>Capture</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
