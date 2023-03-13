import React from "react";
import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import "./App.css";
import FormList from "components/FormList";

const App = () => {
  return (
    <div className="root">
      <TodoList />
      <TodoResults />
      <FormList />
    </div>
  );
};

export default App;
