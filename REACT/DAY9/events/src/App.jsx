import React from 'react'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState("")
      
    const handleChange=(e)=>{
      setData(e.target.value)
    }
  return (
    <div>
       <h1>{data}</h1>

     <form>

      <input   type="text" value={data} onChange={handleChange} placeholder='Enter data'/>
     </form>
      <button onClick={(e) => setData("")}>click</button>


  </div>
  )
}

export default App