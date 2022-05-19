import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe("Pruebas en el componente <TodoAdd />", () => {
  const handleAddToDo = jest.fn();
  const wrapper = shallow(<TodoAdd handleAddToDo={handleAddToDo} />);

  test("Debe de mostrar correctamente el snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("No debe de llamar al handleAddToDo", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");

    formSubmit({ preventDefault() {} });

    expect(handleAddToDo).toHaveBeenCalledTimes(0);
  });

  test("Debe de llamar la handleAddTodo", () => {
    const input = wrapper.find("input");
    const value = "Descripion add";
    input.simulate("change", { target: { value, name: "description" } });

    // wrapper.find("form").simulate("submit", { preventDefault() {} });

    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });

    expect(handleAddToDo).toHaveBeenCalledTimes(1);
    expect(handleAddToDo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddToDo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false,
    });

    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
