export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((i) => i.id !== action.payload.id);

    case "toggle":
      // console.log("toggle");
      // console.log(action.payload);
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, done: !item.done } : item
      );

    default:
      return state;
  }
};
