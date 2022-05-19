import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { RealExapleRef } from "../../../components/04-useRef/RealExapleRef";

describe("Pruebas en el componente <RealExapleRef />", () => {
  test("Debe de coincidir con el snapshot", () => {
    const wrapper = shallow(<RealExapleRef />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostar el componente multiple custom hooks", () => {
    const wrapper = shallow(<RealExapleRef />);
    const button = wrapper.find("button");
    button.simulate("click");
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
  });
});
