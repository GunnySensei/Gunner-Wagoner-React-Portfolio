import React, { useState } from "react";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  const [navTabs] = useState([
    {
      name: "portfolio",
      description: "a grid of the author's projects",
    },
    {
      name: "resume",
      description: "check out the author's history and skills",
    },
  ]);

  const [contactSelected, setContactSelected] = useState(false);
  const [currentNavTab, setCurrentNavTab] = useState(navTabs[0]);

  return (
    <div className="App">
      <header className="App-header">
        <Nav
          navTabs={navTabs}
          setCurrentNavTab={currentNavTab}
          currentNavTab={currentNavTab}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        />
      </header>
    </div>
  );
}

export default App;
