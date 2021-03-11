import React, { useEffect, useState } from "react";
import SearchItem from "../components/SearchItem";
import { useDispatch, useSelector } from "react-redux";
import { getWatchlist } from "../actions/watchlist.action";
import Paginate from "../components/Paginate";
function Watchlater() {
    const dispath = useDispatch();
    let data = useSelector((state) => state.watchlist.data);

    const [page, setPage] = useState(1);

    // const loadMore = () => {
    //     dispath(getWatchlist(page + 1));
    //     setPage((prev) => prev + 1);
    // };
    const onPageChange = (e, value) => {
        e.preventDefault();
        if (Number(value)) {
            setPage(value);
        }
    };

    useEffect(() => {
        dispath(getWatchlist(page));
    }, [dispath, page]);

    return (
        <div className="p-search">
            <div className="l-container">
                <div className="p-search__content">
                    {/* <div className="p-search__left"></div> */}
                    <div className="p-search__right">
                        <div className="p-search__top">
                            <h3>My List</h3>
                        </div>
                        <div className="p-search__list row">
                            {data.results &&
                                data.results.length &&
                                data.results.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <SearchItem
                                            haveDeleteIcon={true}
                                            id={item.media._id}
                                            image={item.media.posterPath}
                                            name={item.media.title}
                                            rated={item.media.popularity}
                                            cat={item.media.genres.join(", ")}
                                            lg={3}
                                            overview={
                                                item.media.overview.substring(
                                                    0,
                                                    150
                                                ) + "..."
                                            }
                                            type={
                                                item.media.tvShow
                                                    ? "tvshow"
                                                    : "movie"
                                            }
                                        />
                                    </React.Fragment>
                                ))}
                        </div>
                    </div>
                    <div className="p-search__paginate">
                        <Paginate
                            page={page}
                            totalPage={data.totalPages || 0}
                            onPageChange={(e, value) => onPageChange(e, value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Watchlater;
