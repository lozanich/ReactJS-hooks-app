import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import "./todoApp.css";

const init = () => {
  return JSON.parse(localStorage.getItem("tasks")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);
  // console.log(todos);

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

  const handleAddTodo = (newToDo) => {
    dispatch({
      type: "add",
      payload: newToDo,
    });
  };

  return (
    <>
      <h1>Todo App ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-sm-6">
          {todos.length > 0 && (
            <TodoList
              todos={todos}
              handleDelete={handleDelete}
              handleToggle={handleTaskCompleted}
            />
          )}
        </div>

        <div className="col-sm-6">
          <TodoAdd handleAddToDo={handleAddTodo} />
        </div>
      </div>
    </>
  );
};
