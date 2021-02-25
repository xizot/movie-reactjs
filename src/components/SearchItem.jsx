import React from "react";
import { Link } from "react-router-dom";

function SearchItem({ id, image, name, overview, cat, count }) {
    return (
        <Link
            to={"/movie/" + id}
            className="c-search-item col-lg-4 col-sm-6 col-xs-12"
        >
            <div className="gutter">
                <div className="c-search-item__img">
                    <img src={image} alt="" />
                </div>
                <div className="c-search-item__name">{name}</div>
                <div className="c-search-item__cat">{cat}</div>
                <div className="c-search-item__release">Watched: {count}</div>
                <div className="c-search-item__bottom">
                    <p className="c-search-item__overview">{overview}</p>
                </div>
            </div>
        </Link>
    );
}

export default SearchItem;
