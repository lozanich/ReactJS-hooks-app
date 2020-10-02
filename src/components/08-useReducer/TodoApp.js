import React, { useEffect, useReducer } from "react";
import "./todoApp.css";
import { todoReducer } from "./todoReducer";
import { useForm } from "../../hooks/useForm";

const init = () => {
  return JSON.parse(localStorage.getItem("tasks")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const { values, handleInputChange, reset } = useForm({
    description: "",
  });

  const { description } = values;

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);
  console.log(todos);

  const handleDelete = (item) => {
    const actionDelete = {
      type: "delete",
      payload: item,
    };
    dispatch(actionDelete);
  };

  const handleTaskCompleted = (item) => {
    const actionTaskCompleted = {
      type: "toggle",
      payload: item,
    };
    dispatch(actionTaskCompleted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }
    const newTask = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    const actionAdd = {
      type: "add",
      payload: newTask,
    };
    dispatch(actionAdd);
    reset();
  };

  return (
    <>
      <h1>Todo app ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-sm-6">
          <ul className="list-group list-group-flush">
            {todos.map((item, id) => {
              return (
                <li key={item.id} className="list-group-item">
                  <p
                    className={`${item.done && "complete"}`}
                    onClick={() => handleTaskCompleted(item)}
                  >
                    {id + 1}. {item.desc}
                  </p>

                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-danger"
                  >
                    Eliminar
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-sm-6">
          <h4>Agregar TODO</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              onChange={handleInputChange}
              value={description}
              name="description"
              placeholder="Aprender../"
              autoComplete="off"
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-1 btn-block"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
