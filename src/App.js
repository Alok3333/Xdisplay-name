import { useState } from 'react';
import './App.css';

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [fullName, setFullName] = useState("");
  const [isError, setIsError] = useState(null);

  return (
    <div style={{textAlign: "left", paddingLeft: "0.70%"}}>
     <h1>Full Name Display</h1>
     <form>
     </form>
    </div>
  );
}

export default App;
