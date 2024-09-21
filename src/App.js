import { useState } from "react";
import "./App.css";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [fullName, setFullName] = useState("");
  const [isError, setIsError] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!fName || !lName) {
      setIsError("Both first and last names must be field.");
    } else {
      setFullName(`${fName} ${lName}`);
      setIsError(null);
    }
  };

  return (
    <div style={{ textAlign: "left", paddingLeft: "0.70%" }}>
      <h1>Full Name Display</h1>
      <form onSubmit={handleFormSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="fname"
          value={fName}
          onChange={(e) => setFName(e.target.value)}
          required
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          name="lname"
          value={lName}
          onChange={(e) => setLName(e.target.value)}
          required
        />
        <br />
        {isError && (
          <div>
            <span style={{ color: "#FF0000" }}>{isError}</span>
          </div>
        )}
        <div style={{ textAlign: "left", paddingLeft: "0.20%" }}>
          <button type="submit">Submit</button>
        </div>
      </form>

      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default App;
