import { Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";

import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";

import "./css/App.css";

const apiURL = "http://localhost:4300/tickets";

function App() {
  const [tickets, setTickets] = useState([]);

  // 3. Create out useEffect function
  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => setTickets(data));
  }, [])

  return (
    <div>
      <NavBar tickets={tickets} setSearchResults={setTickets} />
      <Routes>
        <Route
          path="/"
          element={<Home tickets={tickets} setTickets={setTickets} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
