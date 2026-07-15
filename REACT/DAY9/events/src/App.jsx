import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState("false");

  const handleClick = () => {
    setCount( "react native" );
  };

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={handleClick}>
        TRUE OR FALSE
      </button>
    </>
  );
};

export default App;