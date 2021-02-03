import React, { useEffect, useState } from "react";
import queryString from "query-string";
import Detail from "../components/Detail";
// import List2 from "../components/List2";
import { useDispatch, useSelector } from "react-redux";
import Watch from "../components/Watch";
import { openWatch } from "../actions/watch.action";
import Loading from "../components/Loading";
import { history } from "../helper";
import { getMovieInfo } from "../actions/movie.action";
import List2 from "../components/List2";
import { getMovie } from "../actions/film.action";
// import axios from "./../axios";
function Movie({ match }) {
    window.scrollTo(0, 0);

    const dispatch = useDispatch();
    const listMovie = useSelector((state) => state.film.movie);
    const { id = null } = match.params;
    if (id) {
        dispatch(getMovieInfo(id));
    } else {
        history.goBack();
    }

    const isWatch = useSelector((state) => state.watch.isWatch);
    const [episode, setEpisode] = useState(1);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        //
        // const reg = /[^\w\s]/;
        // const path = window.location.pathname.split(reg);
        // const movieID = path[2];
        const parsed = queryString.parse(window.location.search);

        const movieEpisode = parsed.ep || 1;
        if (movieEpisode) setEpisode(movieEpisode);

        if (parsed.watch === null) {
            dispatch(openWatch());
        }

        setIsLoading(true);
        dispatch(getMovie());
    }, [dispatch]);

    return (
        <>
            <Loading nameClass={isLoading ? "is-fadeout" : ""} />
            <div className="pages-movie">
                {isWatch ? (
                    <Watch id={id} ep={episode} />
                ) : (
                    <>
                        <Detail />
                        {listMovie.length && (
                            <List2
                                subtitle="Most watched movies by days"
                                title="TV Shows"
                                list={listMovie}
                            />
                        )}
                    </>
                )}
            </div>
        </>
    );
}

export default Movie;
