import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeTodoTitle } from "../store/Todos/actions.js";
export const TodosDetails = () => {
  const [newTitle, setnewTitle] = useState("");
  const hs = useHistory();
  const param = useParams();
  console.log(param);
  const todos = useSelector((state) => state.todo);
  console.log("todos", todos);
  const dispatch = useDispatch();
  const handleChange = () => {
    console.log(newTitle, "new");
    if (newTitle === "") {
      alert("title is empty!");
      return;
    }
    const payload = {
      id: param.id,
      title: newTitle
    };
    dispatch(changeTodoTitle(payload));
    alert("todo title Changed");
    hs.goBack();
  };
  return (
    <div>
      {todos
        .filter((ele) => {
          return ele.id === param.id;
        })
        .map((item) => {
          return (
            <div>
              <div>Your todo title: {item.title}</div>
              <input
                type="text"
                placeholder="Enter new title"
                onChange={(e) => setnewTitle(e.target.value)}
              />
              <button onClick={handleChange}>Change</button>
            </div>
          );
        })}
    </div>
  );
};
