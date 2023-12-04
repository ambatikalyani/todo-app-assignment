import "./App.css";
import React, { useState } from "react";

function Todoassignment() {
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
      priority: newPriority,
    };

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
  };

  const emptyit = (index) => {
    let updatedTodoArr = [...allTodos];
    let initialtodolist = updatedTodoArr.slice(0, index);
    let lasttodolist = updatedTodoArr.slice(index + 1);
    let modifiedlist = initialtodolist.concat(lasttodolist);
    setTodos(modifiedlist);
  };

  return (
    <div>

      <div>
        <h1 className = "title"> Todo-List </h1>
      </div>

      <div className = "input-box">
        <div className = "user-input">
          <label> Title </label>
          <input
            type = "text"
            value = {newTitle}
            onChange = {(e) => setNewTitle(e.target.value)}
            placeholder = "write here"
          />
        </div>

        <div className = "user-input">
          <label> Description </label>
          <textarea
            type = "text"
            placeholder = "write here"
            value = {newDescription}
            onChange = {(e) => setNewDescription(e.target.value)}
          />
        </div>

        <div className = "user-input">
          <label> Date </label>
          <input
            type = "date"
            value = {newDate}
            onChange = {(e) => setNewDate(e.target.value)}
          />
        </div>

        <div
          className = "user-input"
          onChange = {(e) => setPriority(e.target.value)}
        >
          <label> Priority </label>
          <select>
            <option value = "high"> high </option>
            <option value = "medium"> medium </option>
            <option value = "low"> low </option>
          </select>
        </div>

        <button className = "adding" onClick = {handleAddTodo}>
          Add
        </button>
      </div>

      {allTodos.map(({ title, description, date, priority }, index) => {
        return (
          <div key = {index}>
            <div className = "list">
              <h3> {title} </h3>
              <p> {description} </p>
              <h3> {date} </h3>
              <h3> {priority} </h3>
              <button className = "delete-icon" onClick = {(e) => emptyit(index)}>
                x
              </button>
              <input type = "checkbox" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Todoassignment;