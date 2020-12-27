import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import LoginComponent from "../components/Login";

function Login() {
    const [isloading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
    }, [isloading]);
    return (
        <div>
            {!isloading && <Loading />}
            <Header />
            <LoginComponent />
            <Footer />
        </div>
    );
}

export default Login;
