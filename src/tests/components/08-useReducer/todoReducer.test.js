import "@testing-library/jest-dom";
import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en el reducer Todo", () => {
  test("Debe de retornar el estado por defecto ", () => {
    const state = todoReducer(demoTodos, "");

    expect(state).toEqual(demoTodos);
  });

  test("Debe de agregar un nuevo TODO ", () => {
    const action = {
      type: "add",
      payload: {
        id: 4,
        desc: "Aprender React",
        done: false,
      },
    };

    const state = todoReducer(demoTodos, action);

    expect(state.length).toEqual(3);
  });

  test("Debe de eliminar un TODO ", () => {
    const action = {
      type: "delete",
      payload: {
        id: 2,
        desc: "Aprender React",
        done: false,
      },
    };

    const state = todoReducer(demoTodos, action);
    expect(state.length).toEqual(1);
  });

  test("Debe de cambiar el estado done de un TODO ", () => {
    const action = {
      type: "toggle",
      payload: {
        id: 2,
        desc: "Aprender React",
        done: false,
      },
    };
    const state = todoReducer(demoTodos, action);
    expect(state.find((i) => i.id === 2).done).toEqual(true);
  });
});
