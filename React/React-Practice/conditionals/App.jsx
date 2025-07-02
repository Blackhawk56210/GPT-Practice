import React, { useState } from "react";

function App() {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div>
      <h1>Header Text</h1>
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? "Hide Message" : "Show Message"}
      </button>
      {showMessage && (<p>maybe?</p>)}
    </div>
  );
}

export default App;
