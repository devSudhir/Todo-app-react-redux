import "./styles.css";
//import { Todos } from "./Components/Todos";
import { Routes } from "./Components/Route/Routes";
import { Link } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <nav style={{ width: "100%", padding: "10px", backgroundColor: "#333" }}>
        <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
      </nav>
      <Routes />
    </div>
  );
}
