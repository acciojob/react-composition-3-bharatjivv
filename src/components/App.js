import React from 'react';
import Tooltip from './Tooltip';

function App() {
  return (
    <div style={{ padding: '50px' }}>
      <h2>React Tooltip Demo</h2>
      
      <Tooltip text="This is a tooltip for the button!">
        <button>Hover over me</button>
      </Tooltip>

      <br /><br />

      <Tooltip text="This is some tooltip text for a paragraph.">
        <p>Hover over this paragraph to see a tooltip.</p>
      </Tooltip>

      <br /><br />
      
      <Tooltip text="This is some tooltip text for a paragraph.">
        <h2>Hover over this paragraph to see a tooltip.</h2>
      </Tooltip>

      <br /><br />

      <Tooltip text="Even icons can have tooltips!">
        <span role="img" aria-label="info">ℹ️</span>
      </Tooltip>
    </div>
  );
}

export default App;
