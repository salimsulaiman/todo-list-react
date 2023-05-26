import React from "react";
import TodoList from "./TodoList";
import ShowTodo from "./ShowTodo";

function TodoListMain() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center py-5">
      <div className="todo">
        <h3 className="mb-5 fw-bold text-slate-600">What's the plan for today?</h3>
        <TodoList />
      </div>
      <div className="mt-3">
        <ShowTodo />
      </div>
    </div>
  );
}

export default TodoListMain;
