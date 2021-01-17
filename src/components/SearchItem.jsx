import { StarOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

function SearchItem({link,image,name,rated,actor}) {
    return (
        <Link to={link} className="c-search-item col-lg-4 col-sm-6 col-xs-12">
            <div className="gutter">
                <div className="c-search-item__img">
                    <img
                        src={image}
                        alt=""
                    />
                </div>
                <div className="c-search-item__name">{name}</div>
                <div className="c-search-item__bottom">
                    <div className="c-search-item__rated">
                        <StarOutlined /> {rated}
                    </div>
                    <div className="c-search-item__actor">by {actor}</div>
                </div>
            </div>
        </Link>
    );
}

export default SearchItem;
