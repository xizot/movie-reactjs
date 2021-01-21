import React, { useEffect, useState } from "react";
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
            <Mainvisuals />
            <PTop />
        </>
    );
}

export default Home;
