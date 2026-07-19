import React from 'react'
import { useState } from 'react'

const App = () => {

  const [skill, setSkills] = useState("python")
  return (
    <div>

         <h1>{skill}</h1>


      <button className='bg-amber-600' onClick={() => setSkills("react")}>onclick</button>
  </div>
  )
}

export default App