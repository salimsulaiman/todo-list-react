import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../redux/action/todoAction";

function ShowTodo() {
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getTodo());
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="btn btn-light mx-1" onClick={() => setFilter("all")}>
          ALL
        </div>
        <div className="btn btn-light mx-1" onClick={() => setFilter("active")}>
          ACTIVE
        </div>
        <div className="btn btn-light mx-1" onClick={() => setFilter("completed")}>
          COMPLETED
        </div>
      </div>
      <div className="my-3">
        {filter == "all"
          ? todos.map((item) => {
              return (
                <div className="my-2" key={item.id}>
                  <TodoItem todo={item.todo} isDone={item.isDone} filter={filter} id={item.id} />
                </div>
              );
            })
          : null}
        {filter == "completed"
          ? todos
              .filter((el) => el.isDone)
              .map((item) => {
                return (
                  <div className="my-2" key={item.id}>
                    <TodoItem todo={item.todo} isDone={item.isDone} filter={filter} />
                  </div>
                );
              })
          : null}
        {filter == "active"
          ? todos
              .filter((el) => el.isDone == false)
              .map((item) => {
                return (
                  <div className="my-2" key={item.id}>
                    <TodoItem todo={item.todo} isDone={item.isDone} filter={filter} />
                  </div>
                );
              })
          : null}
      </div>
    </div>
  );
}

export default ShowTodo;
