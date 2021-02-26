import React, { useEffect } from "react";
//import SearchItem from "../components/SearchItem";
import { useDispatch } from "react-redux";
import { getHistory } from "../actions/history.action";
function History() {
    const dispath = useDispatch();

    //let data = useSelector((state) => state.history.data);

    // const 
    useEffect(() => {
        dispath(getHistory());
    }, [dispath]);

    return (
        <div className="p-search">
            <div className="l-container">
                <div className="p-search__content">
                    <div className="p-search__top">
                        <h3>History</h3>
                    </div>
                    <div className="p-search__list row">
                        {/* {data.map((item, index) => (
                            <React.Fragment key={index}>
                                <SearchItem
                                    id={item._id}
                                    image={item.posterPath}
                                    name={item.title}
                                    rated={item.popularity}
                                    cat={item.genres.join(", ")}
                                    overview={
                                        item.overview.substring(0, 150) + "..."
                                    }
                                    type={item.tvShow ? "tvshow" : "movie"}
                                />
                            </React.Fragment>
                        ))} */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;
