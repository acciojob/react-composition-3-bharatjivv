import React from "react";
import Tooltip from "./Tooltip";
import "../styles/Tooltip.css";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      <h2>React Tooltip Demo</h2>
      
      <h2 className="tooltip">
        <div>
        <Tooltip text="This is a tooltip for the button!">
          Hover over me
        </Tooltip>
        </div>
      </h2>
      <br />
      <br />

      <p className="tooltip">
        <Tooltip text="This is some tooltip text for a paragraph.">
          Hover over this paragraph to see a tooltip.
        </Tooltip>
      </p>

      <br />
      <br />

      {/* <h2 className="tooltip">
        <Tooltip text="Even icons can have tooltips!">Lorem2</Tooltip>
      </h2> */}
    </div>
  );
}

export default App;
