import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("Pruebas en USe counter", () => {
  test("debe de retornar los valores por defecto ", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.state).toBe(110);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  test("Debe de tener el counter en 10 ", () => {
    const { result } = renderHook(() => useCounter(10));
    console.log(result.current);
    expect(result.current.state).toBe(10);
  });

  test("Debe de ejecutar la funcion incrementar", () => {
    const { result } = renderHook(() => useCounter(10));

    expect(result.current.state).toBe(10);
    act(() => {
      result.current.increment(1);
    });

    expect(result.current.state).toBe(11);
  });

  test("Debe de ejecutar la funcion decrementar", () => {
    const { result } = renderHook(() => useCounter(10));

    expect(result.current.state).toBe(10);
    act(() => {
      result.current.decrement(1);
    });

    expect(result.current.state).toBe(9);
  });

  test("Debe de ejecutar la funcion Reset", () => {
    const { result } = renderHook(() => useCounter(10));

    expect(result.current.state).toBe(10);
    act(() => {
      result.current.increment(1);
      result.current.reset();
    });

    expect(result.current.state).toBe(10);
  });
});
