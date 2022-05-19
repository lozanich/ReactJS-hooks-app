import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe("Pruebas en use Fetch", () => {
  test("Debe de retornar la informcacion por defecto", () => {
    const counter = 1;
    const { result } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    );
    const { data, loading, error } = result.current;

    expect(data.length).toBe(0);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test("Debemo de esperr el resultado de la peticion", async () => {
    const counter = 1;
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    );
    await waitForNextUpdate();
    const { data, loading, error } = result.current;

    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test("Deberia de ocasionar un error", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://reqres.in/apiis/users?page=2`)
    );
    await waitForNextUpdate();
    const { data, loading, error } = result.current;

    expect(data.length).toBe(0);
    expect(loading).toBe(false);
  });
});
