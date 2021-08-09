import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  CHANGE_TODO_TITLE
} from "./actionTypes.js";

const initState = {
  todo: [
    {
      id: "",
      title: "",
      status: ""
    }
  ]
};

export const TodosReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, payload]
      };

    case DELETE_TODO:
      const updatedTodo = state.todo.filter((ele) => {
        return ele.id !== payload.id;
      });
      console.log(updatedTodo, "update");
      return {
        ...state,
        todo: updatedTodo
      };

    case TOGGLE_TODO:
      state.todo.map((ele) => {
        if (ele.id === payload.id) {
          ele.status = !ele.status;
        }
        return ele;
      });
      return state;

    case CHANGE_TODO_TITLE:
      state.todo.map((ele) => {
        if (ele.id === payload.id) {
          ele.title = payload.title;
        }
        return ele;
      });
      return state;
    default:
      return state;
  }
};
