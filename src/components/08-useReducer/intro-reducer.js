console.log("Hello world");

const initialState = [
  {
    id: 1,
    todo: "Comprar leche",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === "add") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Comprar leche",
  done: false,
};

const actionAdd = {
  type: "add",
  payload: newTodo,
};

todos = todoReducer(todos, actionAdd);

console.log(todos);
