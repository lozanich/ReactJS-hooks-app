import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);
  const handleLogout = () => {
    setUser({});
  };
  return (
    <div>
      <h1>About Screen</h1>
      <hr />

      <pre>{JSON.stringify(user)}</pre>

      <button onClick={handleLogout} className="btn btn-warning">
        Logout
      </button>
    </div>
  );
};
