import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);
  const user = {
    id: 123838,
    name: "Ivan Lozano",
    email: "lozanich598@gmail.com",
  };
  return (
    <div>
      <h1>Login Screen</h1>
      <hr />

      <button onClick={() => setUser(user)} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};
