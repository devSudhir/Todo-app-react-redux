import { Switch, Route } from "react-router-dom";
import { Todos } from "../Todos";
import { TodosDetails } from "../TodosDetails";
import { Home } from "../Home";
export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/todos">
          <Todos />
        </Route>
        <Route path="/todo/:id">
          <TodosDetails />
        </Route>
      </Switch>
    </>
  );
};
