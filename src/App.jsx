import React from "react";
import TodoList from "./components/TodoList";
import { useState } from "react";
import TodoItem from "./components/TodoItem";
import ShowTodo from "./components/ShowTodo";
import { Route, Routes } from "react-router-dom";
import TodoListMain from "./components/TodoListMain";

function App() {
  // const [todo, setTodo] = useState("Salim");
  return (
    <Routes>
      <Route path="" element={<TodoListMain />} />
    </Routes>
  );
}

export default App;
