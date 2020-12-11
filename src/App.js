import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Account from "./pages/Account";
function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/account">
                    <Account/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route>
                    404 Not Found
                </Route>
            </Switch>
        </div>
    );
}

export default App;
