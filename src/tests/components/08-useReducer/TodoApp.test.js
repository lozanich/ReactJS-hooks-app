import React from "react";
import "@testing-library/jest-dom";
import { mount, shallow } from "enzyme";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";
import { act } from "@testing-library/react";

describe("Pruebas en el componente <TodoApp />", () => {
  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem = jest.fn(() => {});

  test("Debe de coincidir con el snapshot ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de agregaar un TODO", () => {
    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find("TodoAdd").prop("handleAddToDo")(demoTodos[0]);
      wrapper.find("TodoAdd").prop("handleAddToDo")(demoTodos[1]);
    });

    expect(wrapper.find("h1").text().trim()).toBe("Todo App (2)");
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test("Debe de Eliminar un TODO", () => {
    wrapper.find("TodoAdd").prop("handleAddToDo")(demoTodos[0]);
    wrapper.find("TodoList").prop("handleDelete")(demoTodos[0]);

    expect(wrapper.find("h1").text().trim()).toBe("Todo App (0)");
  });
});
