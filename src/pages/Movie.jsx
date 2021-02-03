import React, { useEffect, useState } from "react";
import queryString from "query-string";
import Detail from "../components/Detail";
// import List2 from "../components/List2";
import { useDispatch, useSelector } from "react-redux";
import Watch from "../components/Watch";
import { openWatch } from "../actions/watch.action";
import Loading from "../components/Loading";
import { history } from "../helper";
// import axios from "./../axios";
function Movie() {
    window.scrollTo(0, 0);

    const [id, setID] = useState(null);
    const [type, setType] = useState(null);

    const isWatch = useSelector((state) => state.watch.isWatch);
    const [episode, setEpisode] = useState(1);

    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        //
        const reg = /[^\w\s]/;
        const path = window.location.pathname.split(reg);
        const movieID = path[2];
        const parsed = queryString.parse(window.location.search);

        const movieEpisode = parsed.ep || 1;
        const movieType = parsed.type || null;
        if (movieEpisode) setEpisode(movieEpisode);

        if (movieID) {
            setID(movieID);
        }
        if (parsed.watch === null) {
            dispatch(openWatch());
        }
        setType(movieType);
        if (movieID && movieType) {
            console.log(type);
        } else {
            history.goBack();
        }

        setIsLoading(true);
    }, [dispatch, type]);
    return (
        <>
            <Loading nameClass={isLoading ? "is-fadeout" : ""} />
            <div className="pages-movie">
                {isWatch ? (
                    <Watch id={id} ep={episode} />
                ) : (
                    <>
                        <Detail
                            title="The Rise of Kingdom"
                            cat={["action", "romance"]}
                            description="She can truly celebrate who shie is. Directed by Ryan Murphu 'The Mando' is the spectacular, big-hearted flim."
                        />
                        {/* {listNew.length ? (
                            <List2
                                subtitle=""
                                title="Recommended"
                                list={listNew}
                                className="u-fade"
                            />
                        ) : (
                            <></>
                        )} */}
                    </>
                )}
            </div>
        </>
    );
}

export default Movie;
