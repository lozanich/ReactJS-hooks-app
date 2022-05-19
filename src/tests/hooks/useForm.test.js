import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Pruebas sobre el hook useForm", () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      name: "Ivan Lozano",
      email: "lozanich598@gmail.com",
    };
  });
  test("Debe de hacer el reset del useForm ", () => {
    const { result } = renderHook(() => useForm(initialState));

    expect(result.current.values).toEqual(initialState);
    expect(typeof result.current.handleInputChange).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  test("Debe de cambiar el valor del formulario (cambia name)", () => {
    const { result } = renderHook(() => useForm(initialState));

    const { handleInputChange } = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Marcos",
        },
      });
    });

    const { values } = result.current;
    expect(values.name).toBe("Marcos");
  });

  test("Debe de hacer el reset del formulario", () => {
    const { result } = renderHook(() => useForm(initialState));

    const { reset, handleInputChange } = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Marcos",
        },
      });

      reset();
    });

    const { values } = result.current;
    expect(values.name).toBe("Ivan Lozano");
  });
});
