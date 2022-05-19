import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en el componente <TodoListItem />", () => {
  const item = demoTodos[0];
  const index = 1;
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      item={item}
      index={index}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test("debe de mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de llamara a la funcion handle Delete", () => {
    const button = wrapper.find("button");
    button.simulate("click");

    expect(handleDelete).toHaveBeenCalled();
    expect(handleDelete).toHaveBeenCalledTimes(1);
    expect(handleDelete).toHaveBeenCalledWith(item);
  });

  test("Debe de llamara a la funcion handle Delete", () => {
    const p = wrapper.find("p");
    p.simulate("click");

    expect(handleToggle).toHaveBeenCalled();
    expect(handleToggle).toHaveBeenCalledTimes(1);
    expect(handleDelete).toHaveBeenCalledWith(item);
  });

  test("debe de mostar el texto corectamente", () => {
    const p = wrapper.find("p").text().trim();

    expect(p).toBe(`${index + 1}. ${item.desc}`.trim());
  });

  test("Debe de tener la clase complete cuando la tarea esta completa", () => {
    item.done = true;
    const wrapper = shallow(
      <TodoListItem
        item={item}
        index={index}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );

    const p = wrapper.find("p");
    expect(p.props().className).toBe("complete");
  });
});
