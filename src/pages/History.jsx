import React, { useEffect, useState } from "react";
import SearchItem from "../components/SearchItem";
import { useDispatch, useSelector } from "react-redux";
import { getHistory } from "../actions/history.action";
function History() {
    const dispath = useDispatch();

    let data = useSelector((state) => state.history.data);
    
    const [page, setPage] = useState(0);

    useEffect(() => {
        setPage(1);
        dispath(getHistory(page));
    }, [dispath,page]);

    return (
        <div className="p-search">
            <div className="l-container">
                <div className="p-search__content">
                    <div className="p-search__top">
                        <h3>History</h3>
                    </div>
                    <div className="p-search__list row">
                        {data.results &&
                            data.results.length &&
                            data.results.map((item, index) => (
                                <React.Fragment key={index}>
                                    <SearchItem
                                        id={item.media._id}
                                        image={item.media.posterPath}
                                        name={item.media.title}
                                        rated={item.media.popularity}
                                        cat={item.media.genres.join(", ")}
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
                                        count={"Watched: " + item.watchCount}
                                    />
                                </React.Fragment>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;
