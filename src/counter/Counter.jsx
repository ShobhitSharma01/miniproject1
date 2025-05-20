import React, { useEffect, useState } from 'react'
import "./counter.css"
 const Counter = () => {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("button was clicked!");
    },[count]);
    const handleReset = () => {
      setCount(0);
    };
  return (
    <div className="counter">
      <h1>Counter App</h1>
        <button className='count2'  onClick={()=>setCount(count+1)}>count+</button>
        <h1>{count}</h1>
        <button  className='count1' onClick={()=>setCount(count-1)}>count-</button>
        <button className='reset' onClick={(handleReset)}>Reset</button>
    </div>
  )
}
export default Counter;