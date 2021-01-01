import { Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Account from "./pages/Account";
import { useDispatch } from "react-redux";
import { loadUser } from "./actions/user.action";
import { useEffect } from "react";
import Info from "./pages/Info";
import ForgotPassword from "./pages/ForgotPassword";
import Recovery from "./pages/Recovery";
import VerifyEmail from "./pages/VerifyEmail";
import { PrivateRoute } from "./components/common/ProtectedRoute";
import { history } from "./helper";
function App() {
    const dispath = useDispatch();

    useEffect(() => {
        dispath(loadUser());
    }, [dispath]);

    return (
        <div className="App">
            <Router history={history}>
                <PrivateRoute path="/account" component={Account} />
                <Route path="/info" component={Info} />
                <PrivateRoute
                    path="/forgotpassword"
                    component={ForgotPassword}
                />
                <Route path="/verifyemail" component={VerifyEmail} />
                <Route path="/recovery" component={Recovery} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route exact path="/" component={Home} />
            </Router>
        </div>
    );
}

export default App;
