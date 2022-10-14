import React from "react";

function App() {
  const get = async () => {
    const result = await fetch("http://localhost:8000");

    console.log(result);
  };

  get();
  return (
    <div>
      well come to App
      <div className="all_friends_icon"></div>
    </div>
  );
}

export default App;
