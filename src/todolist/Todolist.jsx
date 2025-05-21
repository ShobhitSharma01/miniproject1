import React, { useState } from 'react'
import "./todo.css"
//import { list } from 'postcss';
//  const Todolist = () => {
//   let [todolist,setTodolist]=useState([]);
//   let saveToDolist=(event)=>{
//     event.preventDefault();
//      let toname=event.target.toname.value;
//      if(!todolist.includes(toname)){
//       let finalDolist=[...todolist,toname]
//       setTodolist(finalDolist);
        
//      }
//      else{
//       alert ("ToDo already add");
//      }
   
//   }
//   return (
//     <div className='App'>
//       <h1>Todo app</h1>
//       <form onSubmit={saveToDolist}>
//         <input type="Todo"  name="toname"/>
//         <button>Add Todo</button>
//         </form> 
//     </div>
//   )
// }

// export default Todolist;
const Todolist=()=>{
const [todolist,setTodolist]=useState([]);



let saveTodoList=(event)=>{
  event.preventDefault();
  let toname=event.target.toname.value;
  if(!todolist.includes(toname)){
    let finalDolist=[...todolist,toname]
    setTodolist(finalDolist);
  }

else{
  alert("already add!");
}
}
let list=todolist.map((value,index)=>{
  return(
    <ToDolistItem value={value} key={index} indexNumber={index}
    todolist={todolist}
    setTodolist={setTodolist}
    />
  )
})

return(
  <div className="App">
    <h1>Todo app</h1>
    <form onSubmit={saveTodoList}>
    <input type="text"  name="toname"/>
    <button>Add</button>
    </form>
    <div className="outerDiv">
    <ul>

{list}
 
    </ul>
    </div>
  </div>
);
}
export default Todolist;

function ToDolistItem({value,indexNumber,todolist,setTodolist}){
 let deleteRow=()=>{
  let finalData=todolist.filter((v,i)=>i!=indexNumber)
  setTodolist(finalData)
 }
  return(
    <li> {indexNumber}{value} <span onClick={deleteRow}>&times;</span></li>
  )
}