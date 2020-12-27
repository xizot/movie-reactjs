import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import queryString from "query-string";
import Detail from "../components/Detail";
import List2 from "../components/List2";
import { useDispatch, useSelector } from "react-redux";
import { getNewest } from "../actions/filmActions";
import Watch from "../components/Watch";
import { openWatch } from "../actions/watchActions";
import Loading from "../components/Loading";
// import axios from "./../axios";
function Movie() {
    window.scrollTo(0, 0);

    const isWatch = useSelector((state) => state.watch.isWatch);
    const [episode, setEpisode] = useState(1);
    const [ID, setID] = useState(null);
    // const [isMovie, setIsMovie] = useState(false);
    // const [isTV, setIsTV] = useState(false);
    const [isloading, setIsLoading] = useState(false);

    const listNew = useSelector((state) => state.film.new);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNewest());
      
        const parsed = queryString.parse(window.location.search);
        let ep = parsed.ep || 1;
        if (ep) setEpisode(ep);
        let pathName = window.location.pathname.split("/");
        // let type = pathName[pathName.length - 2];
        let id = pathName[pathName.length - 1];
        if (id) {
            setID(id);
        }
        if (parsed.watch === null) {
            dispatch(openWatch());
        }
        // if (type === 'movie') {
        //     setIsMovie(true);
        //     setIsTV(false);
        // } else {
        //     setIsMovie(false);
        //     setIsTV(true);
        // }
        setIsLoading(true);
    }, [dispatch, isloading]);
    return (
        <div className="pages-movie">
            {!isloading && <Loading />}
            {isWatch ? (
                <>
                    <Watch ID={ID} ep={episode} />
                </>
            ) : (
                <>
                    <Header isDark={true} />
                    <Detail
                        title="The Rise of Kingdom"
                        cat={["action", "romance"]}
                        description="She can truly celebrate who shie is. Directed by Ryan Murphu 'The Mando' is the spectacular, big-hearted flim."
                    />
                    {listNew.length ? (
                        <List2
                            subtitle=""
                            title="Recommended"
                            list={listNew}
                            className="u-fade"
                        />
                    ) : (
                        <></>
                    )}
                    <Footer />
                </>
            )}
        </div>
    );
}

export default Movie;
