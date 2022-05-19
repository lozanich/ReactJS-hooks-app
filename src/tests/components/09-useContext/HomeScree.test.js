import React from "react";
import "@testing-library/jest-dom";
import { mount, shallow } from "enzyme";
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Pruebas en <HomeScreen />", () => {
  const user = {
    name: "Ivan Lozano",
    email: "lozanich598@gmail.com",
  };
  const wrapper = mount(
    <UserContext.Provider
      value={{
        user,
      }}
    >
      <HomeScreen />
    </UserContext.Provider>
  );

  test("Debe de coincidir con el screenShot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
