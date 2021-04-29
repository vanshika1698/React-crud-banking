import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import { Route, Switch, useHistory } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
import SignIn from "./components/pages/SignIn";
import { useEffect } from "react";
const Routes = () => {
  const history = useHistory();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user === "admin1") {
      history.push("/");
    }
    if (!user || user !== "admin1") {
      history.push("/signin");
    }
  }, [history]);
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signIn" component={SignIn} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/users/add" component={AddUser} />
        <Route exact path="/users/edit/:id" component={EditUser} />
        <Route exact path="/users/:id" component={User} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
