import { Route, Switch, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadUser } from "./actions/user.action";
import { useEffect } from "react";

// Pages
import Search from "./pages/Search";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Recovery from "./pages/Recovery";
import VerifyEmail from "./pages/VerifyEmail";
import WatchLater from "./pages/WatchLater";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Movie from "./pages/Movie";
import Admin from "./pages/Admin";
import History from "./pages/History";
import Watch from "./pages/Watch";
import About from "./pages/About";
// Components
import { PrivateRoute } from "./components/common/ProtectedRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Browse from "./pages/Browse";

function App() {
    const location = useLocation();
    const dispath = useDispatch();
    useEffect(() => {
        dispath(loadUser());
    }, [dispath]);
    useEffect(() => {
        const header = document.querySelector(".c-header");
        const footer = document.querySelector(".c-footer");

        if (location.pathname.includes("/watch") && header && footer) {
            header.classList.add("is-hide");
            footer.classList.add("is-hide");
        } else {
            header.classList.remove("is-hide");
            footer.classList.remove("is-hide");
        }
    }, [location]);

    return (
        <div className="App">
            <Header />
            <Switch>
                <PrivateRoute path="/admin" component={Admin} />
                <Route path="/account" component={Info} />
                <Route path="/forgotpassword" component={ForgotPassword} />
                <Route path="/verifyemail" component={VerifyEmail} />
                <Route path="/recovery" component={Recovery} />
                <Route path="/login" component={Login} />
                <Route path="/movie/:id/watch" component={Watch} />
                <Route path="/movie/:id" component={Movie} />
                <Route path="/search" component={Search} />
                <Route path="/history" component={History} />
                <Route path="/register" component={Register} />
                <Route path="/watchlater" component={WatchLater} />
                <Route path="/about" component={About} />
                <Route path="/browse/movie" component={Browse} />
                <Route
                    path="/browse/tv"
                    component={() => <Browse type="tv" />}
                />
                <Route exact path="/" component={Home} />
                <Route>
                    <>404 Not Found</>
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
