import React, { useState } from "react";
import checklistTrue from "../assets/checklist-active.png";
import checklistFalse from "../assets/checklist.png";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/action/todoAction";

function TodoItem(props) {
  const [todo, setTodo] = useState("");
  const [isDone, setIsDone] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = (id, todo, isDone) => {
    if (todo == "") {
      alert("Harap isi todo");
    } else {
      dispatch(updateTodo(id, todo, isDone));
    }
  };
  return (
    <div>
      <div className="item-container p-3 d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-stat align-items-center">
          <img src={props.isDone == true ? checklistTrue : checklistFalse} alt="" width={"30px"} className="me-2" />
          {props.isDone == true ? (
            <span>
              <s>{props.todo}</s>
            </span>
          ) : (
            <span> {props.todo} </span>
          )}
        </div>
        <div className="action d-flex justify-content-end align-items-center">
          <img
            src={editIcon}
            alt=""
            width={"25px"}
            className="mx-1 cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target={`#updateTodo` + props.id}
          />
          <img
            src={deleteIcon}
            alt=""
            width={"25px"}
            className="mx-1 cursor-pointer"
            onClick={() => handleDelete(props.id)}
          />
        </div>
        <div
          className="modal fade"
          id={`updateTodo` + props.id}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Update Todo ({props.todo})
                </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form>
                <div className="modal-body">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="todo"
                      placeholder="What to do?"
                      value={todo}
                      onChange={(e) => setTodo(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={isDone}
                      onChange={(e) => setIsDone(e.target.value)}
                    >
                      <option value="false">Incompleted</option>
                      <option value="true">Completed</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="button" className="btn btn-purple" onClick={() => handleUpdate(props.id, todo, isDone)}>
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
