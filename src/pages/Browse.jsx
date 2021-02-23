import React, { useEffect, useState } from "react";
import axios from "../axios";
import BrowseItem from "../components/BrowseItem";
import Loading from "../components/Loading";
import { truncateByLength } from "../helper";

function Browse({ type = "movie" }) {
    window.scrollTo(0, 0);
    const [isLoading, setIsLoading] = useState(false);
    const [movieData, setMovieData] = useState([]);
    const [currentMovieData, setCurrentMovieData] = useState([]);
    const [currentMoviePage, setCurrentMoviePage] = useState(1);

    //▼ Fetch data ▼
    useEffect(() => {
        if (type === "movie") {
            axios
                .get(
                    `/media/fetch?limit=10&type=movie&page=${currentMoviePage}`
                )
                .then((res) => {
                    setCurrentMovieData((prev) => [
                        ...prev,
                        ...res.data.results,
                    ]);
                    setMovieData(res.data);
                    setIsLoading(true);
                })
                .catch(() => {
                    setIsLoading(true);
                });
        } else {
            axios
                .get(`/media/fetch?limit=10&type=tv&page=${currentMoviePage}`)
                .then((res) => {
                    setCurrentMovieData((prev) => [
                        ...prev,
                        ...res.data.results,
                    ]);
                    setMovieData(res.data);
                    setIsLoading(true);
                })
                .catch(() => {
                    setIsLoading(true);
                });
        }
    }, [currentMoviePage, type]);
    //▲ Fetch data ▲
    return (
        <div className="p-browse">
            <Loading nameClass={isLoading ? "is-fadeout" : ""} />

            <div className="l-container">
                <h3 className="p-browse__title c-title js-dark-here">
                    {type === "movie" ? "Movies" : "Tv Shows"}
                </h3>
                <div className="p-browse__content row">
                    {currentMovieData && currentMovieData.length ? (
                        currentMovieData.map((item, index) => (
                            <div
                                className="p-browse__content__item"
                                key={index}
                            >
                                <BrowseItem
                                    imgSrc={item.backdropPath}
                                    title={item.title}
                                    overview={truncateByLength(
                                        item.overview,
                                        150
                                    )}
                                    id={item._id}
                                    cat={item.genres.join(",")}
                                />
                            </div>
                        ))
                    ) : (
                        <></>
                    )}
                </div>

                {movieData && movieData.totalPages ? (
                    movieData.totalPages > currentMoviePage ? (
                        <span
                            className="c-btn c-btn--loadmore"
                            onClick={() =>
                                setCurrentMoviePage((prev) => prev + 1)
                            }
                        >
                            Load more
                        </span>
                    ) : (
                        <></>
                    )
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default Browse;
