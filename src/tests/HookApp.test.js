import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe("Primer Test Hook APP", () => {
  test("Prueba correr test", () => {
    const wrapper = shallow(<HookApp />);

    expect(wrapper).toMatchSnapshot();
  });
});
