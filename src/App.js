import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("select something");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    alert("Your favorite flavor is: " + value);
    event.preventDefault();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>DropDown</h1>
        <select value={value} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
