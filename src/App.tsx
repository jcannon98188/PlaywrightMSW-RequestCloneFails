import React, { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState<string>("No network call yet");
  const networkRequest = async () => {
    const request = new Request("/api/test", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ Message: "Hello World!" }),
    });
    const request2 = request.clone();
    const response = await fetch(request);
    const responseBody = await response.text();
    setMessage(responseBody);
  };

  return (
    <div className="App">
      <p data-testid="Message">{message}</p>
      <button onClick={networkRequest}>Click to make network request</button>
    </div>
  );
}

export default App;
