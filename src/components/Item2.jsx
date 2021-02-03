import React from "react";
import { Link } from "react-router-dom";
function Item2({
    id,
    image,
    resolution = [],
    rated,
    runtime,
    cat,
    age,
    name,
    type,
}) {
    return (
        <div className="c-item2 u-fade">
            <div className="gutter">
                <Link to={`/movie/${id}`}>
                    <div className="c-item2__image">
                        <img
                            src={
                                image
                                    ? image
                                    : `${process.env.PUBLIC_URL}/assets/img/no-img.jpg`
                            }
                            alt=""
                            loading="lazy"
                        />
                        <div className="is-hover">
                            <span className="c-item2__cat">{cat}</span>

                            <div className="c-item2__hover u-flex u-a-center u-between">
                                <div className="c-resolution">
                                    {resolution[0] ? resolution[0] : "720"}
                                    <span>
                                        {resolution[1] ? resolution[1] : "HD"}
                                    </span>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="c-item2__name">{name}</div>
                    <div className="c-item2__info">
                        {type === "movie " ? (
                            <span className="c-item2__minute">
                                {runtime} mins
                            </span>
                        ) : (
                            <span className="c-item2__minute">
                                Season number: {runtime}
                            </span>
                        )}
                        {age ? (
                            <span className="c-item2__age">PG{age}</span>
                        ) : (
                            <></>
                        )}
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Item2;
