import React, { useState } from 'react'

const counter = () => {
  const [count,setCount] = useState(0)

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter:{count}</h1>
      <button onClick={()=>setCount(count + 1)}>Increament</button>
      <button onClick={()=>setCount(count - 1)}>Decreament</button>  
      <button onClick={()=>setCount(0)}>Reset</button>    
    </div>
  )
}

export default counter