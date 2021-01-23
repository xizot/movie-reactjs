import { Router, Route, Switch } from 'react-router-dom';
// import Home from './pages/Home';
import { useDispatch } from 'react-redux';
import { loadUser } from './actions/user.action';
import { useEffect } from 'react';
import { history } from './helper';

// Pages
import Search from './pages/Search';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Recovery from './pages/Recovery';
import VerifyEmail from './pages/VerifyEmail';
import WatchLater from './pages/WatchLater';
import Home from './pages/Home';
import Info from './pages/Info';
import Movie from './pages/Movie';
import Admin from './pages/Admin';
import History from './pages/History';


// Components
import { PrivateRoute } from './components/common/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	const dispath = useDispatch();
	useEffect(
		() => {
			dispath(loadUser());
		},
		[dispath]
	);

	return (
		<div className="App">
			<Router history={history}>
				<Header />
				<Switch>
					<PrivateRoute path="/admin" component={Admin} />
					<Route path="/account" component={Info} />
					<Route path="/forgotpassword" component={ForgotPassword} />
					<Route path="/verifyemail" component={VerifyEmail} />
					<Route path="/recovery" component={Recovery} />
					<Route path="/login" component={Login} />
					<Route path="/movie" component={Movie} />
					<Route path="/search" component={Search} />
					<Route path="/history" component={History} />
					<Route path="/register" component={Register} />
					<Route path="/watchlater" component={WatchLater} />
					<Route exact path="/" component={Home} />
					<Route> 
						<>404 Not Found</>

					</Route>
				</Switch>
				<Footer />
			</Router>

		</div>
	);
}

export default App;
