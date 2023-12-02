import "./App.css";
import React, { useState } from "react";

function App() {
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newPriority, setPriority] = useState("");

  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
      date: newDate,
      priority: newPriority
    };

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
  };

  const emptyit = (index) => {
      let updatedTodoArr = [...allTodos];
      let arr = updatedTodoArr.slice(0,index);
      let arr1 = updatedTodoArr.slice(index+1,);
      let arr2 = arr.concat(arr1);
      setTodos(arr2);
  }
    
  return (
    <div>
      <h1>Todo-List</h1>
      <div className="main-content">
        <label>Title</label>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="write here"
        />
      </div>

      <div className="main-content">
        <label>Description</label>
        <textarea
          type="text"
          placeholder="write here"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      </div>

      <div className="main-content">
        <label>Date</label>
         <input type="date" 
         value={newDate} 
         onChange={(e) => setNewDate(e.target.value)} /> 
      </div>

      <div className="main-content" onChange={(e) => setPriority(e.target.value)}>
        <label>Priority</label>
        <select>
          <option value = "high"> high </option>
          <option value = "medium"> medium </option>
          <option value = "low"> low </option>
        </select>
      </div>

      <button className="first-button" onClick={handleAddTodo}>
        Add
      </button>

      {allTodos.map(({ title, description, date, priority }, index) => {
        return (
          <div key={index}>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
              <h3>{date}</h3>
              <h3>{priority}</h3>
              <button onClick={(e) => emptyit(index)}>delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default App;
