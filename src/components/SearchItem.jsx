import React from "react";
import { Link } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
function SearchItem({
    id,
    image,
    name,
    overview,
    cat,
    count,
    lg = 4,
    md = 4,
    sm = 6,
    xs = 12,
    haveDeleteIcon = false,
}) {
    const handleDelete = (e) => {
        e.stopPropagation();
        let rs = window.confirm("Are you sure to want to delete this item ?");
        if (rs) {
            alert("action");
        }
    };
    return (
        <div
            className={`c-search-item col-lg-${lg} col-md-${md} col-sm-${sm} col-xs-${xs}`}
        >
            <div className="gutter">
                {haveDeleteIcon ? (
                    <div className="c-search-item__delete">
                        <DeleteOutlined onClick={(e) => handleDelete(e)} />
                    </div>
                ) : (
                    <></>
                )}
                <Link to={"/movie/" + id}>
                    <div className="c-search-item__img">
                        <img src={image} alt="" />
                    </div>
                    <div className="c-search-item__name">{name}</div>
                    <div className="c-search-item__cat">{cat}</div>
                    <div className="c-search-item__bottom">
                        <p className="c-search-item__overview">{overview}</p>
                    </div>
                    <div className="c-search-item__release">{count}</div>
                </Link>
            </div>
        </div>
    );
}

export default SearchItem;
