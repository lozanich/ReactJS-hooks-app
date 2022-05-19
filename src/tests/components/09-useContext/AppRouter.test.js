import React from "react";
import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { AppRouter } from "../../../components/09-useContext/AppRouter";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Pruebas en el componente <AppRouter />", () => {
  const user = { id: 1, name: "Ivan" };

  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <AppRouter />
    </UserContext.Provider>
  );

  test("Debe de mostarrse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
