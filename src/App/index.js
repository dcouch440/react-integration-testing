import { Route, Switch } from "react-router";
import Navbar from "../components/Navbar";
import Home from "../pages/Page1";

export default function App () {
  return (
    <>
      <Navbar />
      <Switch>
        <Route
          exact
          component={Home}
          path='page-1'
        />
        <Route
          exact
          component={Home}
          path='page-2'
        />
        <Route
          exact
          component={Home}
          path='page-3'
        />
      </Switch>
      <Home />
    </>
  );
}
