import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Detail from "../components/Detail";
import Loading from "../components/Loading";
import { history } from "../helper";
import { getMovieInfo } from "../actions/movie.action";
import List2 from "../components/List2";
import { getTvShow } from "../actions/film.action";
function Movie({ match }) {
    window.scrollTo(0, 0);

    const dispatch = useDispatch();
    const listMovie = useSelector((state) => state.film.tv);
    const { id = null } = match.params;
    if (id) {
        dispatch(getMovieInfo(id));
    } else {
        history.goBack();
    }
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        dispatch(getTvShow());
        setIsLoading(true);
    }, [dispatch]);

    return (
        <>
            <Loading nameClass={isLoading ? "is-fadeout" : ""} />
            <div className="pages-movie">
                <Detail id={id} />
                {listMovie.length && (
                    <List2
                        subtitle="Most watched movies by days"
                        title="TV Shows"
                        list={listMovie}
                    />
                )}
            </div>
        </>
    );
}

export default Movie;
