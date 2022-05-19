import React from "react";
import "@testing-library/jest-dom";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { demoTodos } from "../../fixtures/demoTodos";
import { shallow } from "enzyme";

describe("Pruebas en el componente <TodoList />", () => {
  const handleDelete = jest.fn();
  const handleToogle = jest.fn();
  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleDelete={handleDelete}
      handleToggle={handleToogle}
    />
  );

  test("Debe de mostarr correctamente el componente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostar 2 <TodoListItem />", () => {
    const todoItems = wrapper.find("TodoListItem");
    expect(todoItems.length).toBe(demoTodos.length);
    expect(todoItems.at(0).prop("handleDelete")).toEqual(expect.any(Function));
    expect(todoItems.at(0).prop("handleToggle")).toEqual(expect.any(Function));
  });
});
