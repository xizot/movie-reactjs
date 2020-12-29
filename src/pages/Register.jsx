import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/user.action";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RegisterComponent from "../components/Register";
function Register() {
    const dispatch = useDispatch();
    useEffect(() => {
        // reset login state
        dispatch(logout());
    }, [dispatch]);
    return (
        <div>
            <Header />
            <RegisterComponent />
            <Footer />
        </div>
    );
}

export default Register;
