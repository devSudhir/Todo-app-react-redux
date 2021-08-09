import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../store/Todos/actions.js";
export const Todos = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [, set] = useState(0);
  const handleAddTodo = () => {
    if (title === "") {
      alert("title is empty!");
      return;
    }
    const payload = {
      id: uuid(),
      title: title,
      status: false
    };
    dispatch(addTodo(payload));
  };
  const deleteTodos = (id) => {
    const payload = {
      id: id
    };
    dispatch(deleteTodo(payload));
  };

  const toggleTodos = (id) => {
    const payload = {
      id: id
    };
    dispatch(toggleTodo(payload));
    set(Math.random());
  };
  const todos = useSelector((state) => state.todo);
  console.log(todos);

  return (
    <div style={{ border: "2px solid green", margin: "10px auto" }}>
      <h1>Todos list</h1>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleAddTodo}>Add todo</button>
      <div
        style={{
          width: "50%",
          border: "1px solid greenyellow",
          margin: "10px auto"
        }}
      >
        {todos.map((ele) => {
          if (ele.id !== "") {
            return (
              <div style={{ padding: "5px", margin: "7px auto" }}>
                <span
                  style={ele.status ? { textDecoration: "line-through" } : {}}
                >
                  {ele.title}
                </span>
                <button onClick={() => deleteTodos(ele.id)}>Delete</button>
                <button onClick={() => toggleTodos(ele.id)}>Toggle</button>
                <Link to={`/todo/${ele.id}`}>Edit</Link>
              </div>
            );
          } else {
            return "";
          }
        })}
      </div>
    </div>
  );
};
