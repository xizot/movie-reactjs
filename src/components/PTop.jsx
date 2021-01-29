import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie, getTvShow, getWatchLater } from "./../actions/film.action";
import List1 from "./List1";
import List2 from "./List2";
function PTop() {
    const dispatch = useDispatch();
    const listMovie = useSelector((state) => state.film.movie);
    const listTV = useSelector((state) => state.film.tv);
    const listWatchLater = useSelector((state) => state.film.watchLater);

    useEffect(() => {
        dispatch(getMovie());
        dispatch(getTvShow());
        dispatch(getWatchLater());
    }, [dispatch]);
    return (
        <main style={{ zIndex: "1" }} className="home">
            <div className="p-top js-dark-here">
                {listMovie.length && (
                    <List1
                        subtitle="Most watched movies by days"
                        title="Popular Movies"
                        list={listMovie}
                    />
                )}
                {listTV.length && (
                    <List2
                        subtitle="Most watched movies by days"
                        title="TV Shows"
                        list={listTV}
                    />
                )}
                {listWatchLater.length && (
                    <List2
                        subtitle=""
                        title="Your Favourite Movies"
                        list={listWatchLater}
                    />
                )}
            </div>
        </main>
    );
}

export default PTop;
