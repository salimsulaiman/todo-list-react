import React from "react";
import TodoList from "./TodoList";
import ShowTodo from "./ShowTodo";

function TodoListMain() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center py-5 min-vh-100"
      style={{
        backgroundImage: `url('/background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="card p-4">
        <div className="card-body flex-column d-flex justify-content-center align-items-center">
          <img src={"/logo.png"} alt="" width={"100px"} className="mb-4" />
          <div className="todo">
            <h5 className="mb-5 fw-bold text-slate-600">Apa yang kamu rencanakan hari ini?</h5>
            <TodoList />
          </div>

          <div className="mt-3">
            <ShowTodo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoListMain;
