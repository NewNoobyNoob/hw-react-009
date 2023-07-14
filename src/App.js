import './App.css';
import ToDoForm from './components/ToDoForm';
import { useState, useEffect } from "react";

const API_KEY = 'Rg5jRo78yraMK9HxTDJ8qkVYQagVH8O4ZBL49uOhi-ZML5Fcsg';
function App() {
  const [TODOList, setTODOList] = useState([])

  useEffect(() => {
    fetch('/api/v1/todos', {
      method: "GET", //!here we can even do not specify method as by default it is always "GET"
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      }
    })
    .then(res => {
      if(!res.ok) throw new Error("Response failed")
      return res.json()
    })
    .then(data => setTODOList(data.items.map(todo => {
      return {
        toDoName: todo.toDoName,
        isComplete: todo.isComplete,
        id: todo._uuid
      }
    })))
    .catch(err => console.log(err))

  }, [])


  const getToDos = () => {
    fetch('/api/v1/todos', {
      method: "GET", //!here we can even do not specify method as by default it is always "GET"
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      }
    })
    .then(res => {
      if(!res.ok) throw new Error("Response failed")
      return res.json()
    })
    .then(data => setTODOList(data.items.map(todo => {
      return {
        toDoName: todo.toDoName,
        isComplete: todo.isComplete,
        id: todo._uuid
      }
    })))
    .catch(err => console.log(err))
  }

  const onFormSubmit = (toDoName, isComplete) => {
    // console.log(firstName, lastName)
    fetch('/api/v1/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify([{toDoName, isComplete}])
    })
    .then(res => {
      if(!res.ok) throw new Error("Response failed")
      return res.json()
    })
    .then(data => setTODOList((prev) => [...prev, {
      toDoName: data.items[0].toDoName,
      isComplete: data.items[0].isComplete,
      id: data.items[0]._uuid
    }]))
    .catch(err => console.log(err))
  }


  return (
    <div className='App'>
      <ToDoForm onFormSubmit={onFormSubmit} />
      {/* <button onClick={getToDos}>GET Task</button> */}
      <button onClick={() => setTODOList([])}>Clear Task</button>


      {TODOList.map((todo) => <div key={todo.id} style={{border: "1px solid gray"}}>
          <h3>{todo.toDoName}</h3>
          <h3>{todo.isComplete}</h3>

      </div>)}
    </div>
  );
}

export default App;
