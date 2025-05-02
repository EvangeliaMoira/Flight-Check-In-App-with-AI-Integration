import { useState } from "react";
import "./App.css";
import React from "react";

function App() {
  const [flightNumber, setFlightNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [passengers, setPassengers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Regex pattern for valid flight number (e.g., AA1234)
    const flightNumberRegex = /^[A-Z]{2}[0-9]{1,4}$/;

    // Passport number validation
    const passportNumberRegex = /^[A-Z0-9]{6,9}$/;

    // Check if flight number is valid
    if (!flightNumberRegex.test(flightNumber)) {
      alert("Invalid flight number. Please enter a valid flight number.");
      return;
    }

    // Check if passport number is valid
    if (!passportNumberRegex.test(passportNumber)) {
      alert("Invalid passport number. Please enter a valid passport number.");
      return;
    }

    // Check if passenger already exists
    const passengerExists = passengers.some(
      (p) =>
        p.flightNumber === flightNumber &&
        p.firstName === firstName &&
        p.lastName === lastName &&
        p.passportNumber === passportNumber
    );

    const newPassenger = {
      flightNumber,
      firstName,
      lastName,
      passportNumber,
    };

    setPassengers([...passengers, newPassenger]);

    setFlightNumber("");
    setFirstName("");
    setLastName("");
    setPassportNumber("");
  };
  return (
    <div className="App" style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>✈️ Flight Check-In</h1>
      <p>
        *Online check-in is available from 48 hours up to 30 minutes before your
        flight’s scheduled departure.
      </p>

      <form id="form" onSubmit={handleSubmit}>
        <label>
          <strong>Flight Number:</strong><p id='eg'>e.g. AA1234</p>

          <input
            type="text"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
            required
          />
        </label>
        <label>
          <strong>Last Name:</strong>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label>
          <strong>First Name:</strong>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
         <strong>Passport Number:</strong>
          <p id='eg'>e.g. A1234567</p>
          <input
            type="text"
            value={passportNumber}
            onChange={(e) => setPassportNumber(e.target.value)}
            required
          />
        </label>
        <button type="submit">Check In</button>
      </form>

      
      {passengers.length > 0 && (
  <>
    <h2>🧾 Checked-In Passengers:</h2>
    <ul>
      {passengers.map((p, index) => (
        <li key={index}>
          {p.firstName} {p.lastName} – Flight: {p.flightNumber}, Passport:{" "}
          {p.passportNumber}
        </li>
      ))}
    </ul>
  </>
)}

    </div>
  );
}

export default App;
