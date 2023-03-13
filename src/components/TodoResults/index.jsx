import React from "react";
import "./styles.css";
import {  useSelector } from "react-redux";

const TodoResults = () => {
  // Fix an ability to calculate completed tasks
 
 const { tasks } = useSelector((store)=> store.task)
 const taskDone = tasks.filter(task => task.checked === true).length 

  return <div className="todo-results">Done: {taskDone}</div>;
};

export default TodoResults;
