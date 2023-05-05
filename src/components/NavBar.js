import { useState } from "react";
import "./css/NavBar.css";

const NavBar = ({ tickets, setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(event) {
    const {value} = event.target
    setSearchTerm(value);

    let result = [];
    result = tickets.filter((ticket) => ticket.name.includes(value));
    console.log(">>>>>>", value);
    if (value) {
       setSearchResults(result);
    } else {
       setSearchResults(tickets);
    }
   
  }

  return (
    <div className="menu">
      <div className="logo">
        <h3>TICKETOPIA</h3>
      </div>
      <nav>
        <ul className="navigation">
          <li className="nav-link">
            <a href="/">Home</a>
          </li>
          <li className="nav-link">
            <a href="/about">About</a>
          </li>
          <li className="nav-link">
            <a href="/contacts">Contacts</a>
          </li>
        </ul>
      </nav>
      <div className="search">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // handleSubmit();
          }}
        >
          <input
            type="text"
            placeholder="Search here"
            value={searchTerm}
            onChange={handleSearch}
            id="search-input"
            className="input"
          />
          {/* <button type="submit" className="search-button">
            Search
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default NavBar;
