import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App";
import { store } from "./store/Todos/store";
import { BrowserRouter } from "react-router-dom";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <ReduxProvider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </ReduxProvider>
  </BrowserRouter>,
  rootElement
);
