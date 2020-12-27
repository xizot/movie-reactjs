import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Mainvisuals from "../components/MainVisuals";
import PTop from "../components/PTop";
function Home() {
    const [isloading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
    }, [isloading]);
    return (
        <>
            {!isloading && <Loading />}

            <Header />
            <Mainvisuals />
            <PTop />
            <Footer />
        </>
    );
}

export default Home;
