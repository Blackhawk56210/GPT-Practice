import React, { useState } from "react";

function App() {
  const [showSection, setShowSection] = useState(true);
  const [showSectionA, setShowSectionA] = useState(true);
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h1>Toggle a Specific Section</h1>

        <button onClick={() => setShowSection((prev) => !prev)}>
          {showSection ? "Hide Section" : "Show Section"}
        </button>

        {showSection && (
          <div style={{ display: showSection ? "block" : "none" }}>
            <p>This is the section you're hiding or showing 🫣</p>
          </div>
        )}
      </div>

      <div style={{ padding: "20px" }}>
        <h1>Independent toggle</h1>

        <button onClick={() => setShowSectionA((prev) => !prev)}>
          {showSectionA ? "Hide Section" : "Show Section"}
        </button>

        {showSectionA && (
          <div>
            <p>This is the section you're hiding or showing 🫣</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
