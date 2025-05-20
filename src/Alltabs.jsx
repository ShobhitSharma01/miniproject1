import React from 'react'
import Counter from './counter/Counter'
import Todolist from './todolist/Todolist'
import Calculator from './assets/calculator/Calculator'
import { useState } from 'react'

 const Alltabs = () => {

  const [page,setPage]=useState();

  const toggleSection=(section)=>{
    setPage(section);
  };
  return (
    <div className='main container'>      
      <div className=' button container'>
<button  onClick={()=>toggleSection("todo")}>Todo App</button>

<button onClick={()=>toggleSection("counter")}>Counter</button>

<button onClick={()=>toggleSection("calculator")}>calculator</button>
</div>
<div className='render container'>
{page==="todo"&& <Todolist/>}
{page==="counter" &&<Counter/>}
{page==="calculator"&& <Calculator/>}
</div>
</div>
)
}

export  default Alltabs;