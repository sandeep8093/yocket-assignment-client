import React from "react";
import "../App.css";

const VehicleSelection = ({ vehicles, handleVehicleSelection }) => {
  return (
    <div className="center-text">
      <h2 className="center-text">Select Vehicle</h2>
      <select onChange={(e) => handleVehicleSelection(e.target.value)}>
        <option value="">Select a vehicle</option>
        {vehicles.map((vehicle) => (
          <option
            key={vehicle.kind}
            value={vehicle.kind}
            disabled={vehicle.count === 0}
          >
            {vehicle.kind} - Range: {vehicle.range} km
          </option>
        ))}
      </select>
    </div>
  );
};

export default VehicleSelection;
