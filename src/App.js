import React, { useState } from "react";
import "./App.css";

import Header from "./Header";
import Main from "./Main";
import Navigation from "./Navigation";
import data from "./data";

const appstyle = {
  backgroundColor: "#222222",
};

export default function App() {
  const [userId, setUserId] = useState(0);

  function goNext() {
    if (userId < data.length - 1) {
      setUserId(userId + 1);
    }
  }
  function goPrevious() {
    if (userId >= 1) setUserId(userId - 1);
  }
  function deleteFn() {
    data.splice(userId, 1);
    setUserId(userId - 1);
  }

  return (
    <div className="App" style={appstyle}>
      <Header />
      <Main i={userId} />
      <Navigation goNext={goNext} goPrevious={goPrevious} deleteFn={deleteFn} />
    </div>
  );
}
