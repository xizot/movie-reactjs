import { Router, Route } from 'react-router-dom';
// import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Account from './pages/Account';
import { useDispatch } from 'react-redux';
import { loadUser } from './actions/user.action';
import { useEffect } from 'react';
import Home from './pages/Home';
import Info from './pages/Info';
import Search from './pages/Search';
import ForgotPassword from './pages/ForgotPassword';
import Recovery from './pages/Recovery';
import VerifyEmail from './pages/VerifyEmail';
import Movie from './pages/Movie';
import WatchLater from './pages/WatchLater';
import { PrivateRoute } from './components/common/ProtectedRoute';
import { history } from './helper';
import AddFilm from './components/AddFilm';

function App() {
	const dispath = useDispatch();
	useEffect(
		() => {
			dispath(loadUser());
		},
		[ dispath ]
	);

	return (
		<div className="App">
			<Router history={history}>
				<PrivateRoute path="/account" component={Account} />
				<PrivateRoute path="/admin" component={AddFilm} />
				<Route path="/info" component={Info} />
				<Route path="/forgotpassword" component={ForgotPassword} />
				<Route path="/verifyemail" component={VerifyEmail} />
				<Route path="/recovery" component={Recovery} />
				<Route path="/login" component={Login} />
				<Route path="/movie" component={Movie} />
				<Route path="/search" component={Search} />
				<Route path="/register" component={Register} />
				<Route path="/watchlater" component={WatchLater} />
				{/* <Route exact path='/' component={Home} /> */}
				<Route exact path="/" component={Home} />
			</Router>
		</div>
	);
}

export default App;
