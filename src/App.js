import React from "react";
import './App.css';


function App() {
  const removeActive = (e) => {
    var element = document.querySelectorAll("div")
    element.forEach(e => e.classList.remove("active"));
  }

  const handleClick = (e) => {
    removeActive()
    e.currentTarget.classList.add('active')
  }
  
  return (
    <div className="App">
      <div className="panel active" onClick={handleClick}>
        <h3 className="text">Explore The Islands</h3>
      </div>
      <div className="panel1"  onClick={handleClick}>
        <h3 className="text"> Waterfall </h3>
      </div>
      <div className="panel2"  onClick={handleClick}>
        <h3 className="text">Sunny Beach</h3>
      </div>
      <div className="panel3 "  onClick={handleClick}>
        <h3 className="text">Sunrise</h3>
      </div>
      <div className="panel4"  onClick={handleClick}>
        <h3 className="text">Sunset</h3>
      </div>

    </div>
  )
}

export default App;
