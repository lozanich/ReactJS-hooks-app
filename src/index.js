import React from "react";
import ReactDOM from "react-dom";
import { TodoApp } from "./components/08-useReducer/TodoApp";
// import { Padre } from "./components/07-tarea-memo/Padre";
// import { CallBackHook } from "./components/06-memos/CallBackHook";
// import { MemoHook } from "./components/06-memos/MemoHook";
// import { RealExapleRef } from "./components/04-useRef/RealExapleRef";
// import { LayoutEffect } from "./components/05-useLayoutEffect/LayoutEffect";
// import { Memorize } from "./components/06-memos/Memorize";
// import { FocusScreen } from "./components/04-useRef/FocusScreen";
// import { MultipleCustomHooks } from "./components/examples/MultipleCustomHooks";
// import { FormWithCustomHook } from "./components/02-useEffect/FormWithCustomHook";
// import { SimpleForm } from "./components/02-useEffect/SimpleForm";
// import { HookApp } from "./HookApp";
// import { CounterApp } from "./components/01-useState/CounterApp";
// import { CounterWithCustomHook } from "./components/01-useState/CounterWithCustomHook";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// import "./components/08-useReducer/intro-reducer";
