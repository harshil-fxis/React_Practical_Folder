import './App.css';
import { useState } from 'react';

function App() {
  let [todolist, setTodolist]=useState([])
  let [toname, setToname]=useState('')
  let [editIndex, setEditIndex] = useState(null)

  let saveToDoList=(event)=>{
    // let toname=event.target.toname.value;

    event.preventDefault();
    if(toname.trim() == '')return
    if(editIndex !== null){
      const updatedList = [...todolist]
      updatedList[editIndex] = toname
      setTodolist(updatedList)
      setEditIndex(null)
    }else{
      if(todolist.includes(toname)){
        alert('ToDo Name Already Exists...')
        return
      }
      setTodolist([...todolist,toname])
    }  
    setToname('');
    
  }

  let list=todolist.map((value,index)=>{
    return(
      <ToDoListItems value={value} key={index} indexNumber={index} 
      todolist={todolist} 
      setTodolist={setTodolist}
      setToname={setToname}
      setEditIndex={setEditIndex}
      />
    )
  })

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type='text' name='toname' value={toname} onChange={(e) => setToname(e.target.value)}/> <button>{ editIndex !== null ? 'Update' : 'Save'}</button>
      </form>
      <div className='outerDiv'>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;


function ToDoListItems({value,indexNumber,todolist,setTodolist,setToname,setEditIndex}){
  let deleteRow=()=>{
    let finalData=todolist.filter((v,i)=>i!=indexNumber)
    setTodolist(finalData)
  }
  let editRow = () => {
    setToname(value)
    setEditIndex(indexNumber);
  }
  return(
    <li>{value}
    &nbsp; <span onClick={editRow} style={{cursor:'pointer',color: 'blue',marginRight:'40px'}}>Edit</span>
    &nbsp; <span onClick={deleteRow}>&times;</span></li>
  )
}