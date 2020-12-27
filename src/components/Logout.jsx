import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/authen";

function Logout() {
    const dispatch = useDispatch();
    dispatch(logout());

    return <div>Log out works</div>;
}

export default Logout;
