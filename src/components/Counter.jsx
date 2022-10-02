import React, { useState } from 'react'
import "./counter.css"
const Counter = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
        <h1 data-testid="counter-text">Count:{count}</h1>
        <button data-testid="add-button" onClick={()=>setCount(count+5)}>Add</button>
        <button data-testid="reduce-button" onClick={()=>{
      
            setCount(count-5)
            }
        }
        >Reduce</button>
    </div>
  )
}

export default Counter