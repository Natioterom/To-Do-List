import React from "react";
import "./styles.css";

const TodoListItem = ({ onCheck, checked, onDelete, label,onEdit }) => (
  <div className="todo-list-item">
    <div
      tabIndex="0"
      role="checkbox"
      aria-checked
      className="todo-list-item-content"
    >
      <input
        tabIndex="-1"
        type="checkbox"
        checked={checked}
        onChange={onCheck}
      />
      <span className={checked ? "todo-list-item-checked" : ""}>{label}</span>
    </div>
    <div className='container-todo-list-button'>
    <button type="button" className="todo-list-item-edit" onClick={onEdit}>
      Edit
    </button>
    <button type="button" className="todo-list-item-delete" onClick={onDelete}>
      Delete
    </button>    
    </div>
  
  </div>
);

export default TodoListItem;
