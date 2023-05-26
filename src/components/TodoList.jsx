import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action/todoAction";
// import { useState } from "react";

function TodoList() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    if (todo == "") {
      alert("Harap isi todo");
    } else {
      dispatch(addTodo(todo));
      setTodo("");
    }
  };
  return (
    <form onSubmit={handleSave}>
      <div className="d-flex justify-content-center align-items-center">
        <div className="me-2">
          <input
            type="text"
            className="form-control"
            id="todoList"
            aria-describedby="emailHelp"
            placeholder="What to do"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
        </div>
        <button type="submit" className="btn btn-purple">
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoList;
