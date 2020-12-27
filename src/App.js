import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Movie from "./pages/Movie";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./actions/authen";
import { useEffect } from "react";
import Logout from "./components/Logout";
function App() {
    const dispath = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    useEffect(() => {
        dispath(loadUser());
    }, [dispath, isAuthenticated]);
    return (
        <div className="App">
            <Switch>
                <Route path="/movie">
                    <Movie />
                </Route>
                <Route path="/account">
                    {!isAuthenticated ? <Redirect to="/login" /> : <Account />}
                </Route>
                <Route path="/register">
                    {!isAuthenticated ? <Register /> : <Redirect to="/" />}
                </Route>
                <Route path="/login">
                    {!isAuthenticated ? <Login /> : <Redirect to="/" />}
                </Route>
                <Route path="/logout">
                    {!isAuthenticated ? <Redirect to="/login" /> : <Logout />}
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route>404 Not Found</Route>
            </Switch>
        </div>
    );
}

export default App;
