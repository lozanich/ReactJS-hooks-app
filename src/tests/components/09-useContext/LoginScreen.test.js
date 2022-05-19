import React from "react";
import "@testing-library/jest-dom";
import { UserContext } from "../../../components/09-useContext/UserContext";
import { mount } from "enzyme";
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";

describe("Pruebas en el componente <LoginScreen />", () => {
  const setUser = jest.fn();
  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );
  test("Deberia de coincidir con el snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de llamar al metodo setUSer", () => {
    const button = wrapper.find("button");
    button.simulate("click");

    expect(setUser).toHaveBeenCalledTimes(1);
    expect(setUser).toHaveBeenCalledWith({
      id: expect.any(Number),
      name: expect.any(String),
      email: expect.any(String),
    });
  });
});
