import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "./../../../components/examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("Probando multiples hooks", () => {
  useCounter.mockReturnValue({
    counter: 1,
  });

  test("Debe de mostrarse correctamente ", () => {
    useFetch.mockReturnValue({ data: [], loading: true, error: null });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostar la informacion", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Ivan", quote: "Hola mundo" }],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-0").text().trim()).toBe("Hola mundo");
    expect(wrapper.find("footer").text().trim()).toBe("Ivan");
  });
});
