import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewest, getPopular, getFavor } from "./../actions/film.action";
import List1 from "./List1";
import List2 from "./List2";
function PTop() {
    const dispatch = useDispatch();
    const listNew = useSelector((state) => state.film.new);
    const listPopular = useSelector((state) => state.film.popular);
    const listFavor = useSelector((state) => state.film.favor);
    useEffect(() => {
        dispatch(getPopular());
        dispatch(getNewest());
        dispatch(getFavor());
    }, [dispatch]);
    return (
        <main style={{ zIndex: "1" }} className="home">
            <div className="p-top js-dark-here">
                {listPopular.length ? (
                    <List1
                        subtitle="Most watched movies by days"
                        title="Popular Movies"
                        list={listPopular}
                    />
                ) : (
                    <></>
                )}
                {listNew.length ? (
                    <List2
                        subtitle="Most watched movies by days"
                        title="Newest Movies"
                        list={listNew}
                    />
                ) : (
                    <></>
                )}
                {listFavor.length ? (
                    <List2
                        subtitle=""
                        title="Your Favourite Movies"
                        list={listFavor}
                    />
                ) : (
                    <></>
                )}
            </div>
        </main>
    );
}

export default PTop;
