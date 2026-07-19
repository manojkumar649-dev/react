import React, { useState } from "react";

function App() {
 const [name, setName] = useState("");


  const [use, setUsers] = useState("");

  const handleChange =()=> {
   

   setUsers(name);
    setName("");


   

  };

  return (
    <div>
      
      <input
     type="text"
          
     onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
        <button type="submit" onClick={handleChange}>CHANGE</button>
      

      <p>{use}</p>

    </div>
      
  );
}

export default App;



