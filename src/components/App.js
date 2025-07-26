import React from "react";
import Tooltip from "./Tooltip";
import "../styles/Tooltip.css";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      <h2>React Tooltip Demo</h2>
      <button className="tooltip">
        <Tooltip text="This is a tooltip for the button!">
          Hover over me
        </Tooltip>
      </button>
      <br />
      <br />

      <p className="tooltip">
        <Tooltip text="This is some tooltip text for a paragraph.">
          Hover over this paragraph to see a tooltip.
        </Tooltip>
      </p>

      <br />
      <br />

      <span role="img" aria-label="info" className="tooltip">
        <Tooltip text="Even icons can have tooltips!">ℹ️</Tooltip>
      </span>
    </div>
  );
}

export default App;
