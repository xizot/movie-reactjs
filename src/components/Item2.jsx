import React from "react";
import { Link } from "react-router-dom";
function Item2({ id, image, resolution = [], rated, minutes, cat, age, name }) {
    return (
        <div className="c-item2 u-fade">
            <div className="gutter">
                <Link to={`movie/${id}`}>
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
                            <div className="c-item2__hover u-flex u-a-center u-between">
                                <div className="c-resolution">
                                    {resolution[0] ? resolution[0] : "720"}
                                    <span>
                                        {resolution[1] ? resolution[1] : "HD"}
                                    </span>
                                </div>
                                <div className="c-rated">
                                    {rated ? rated : 0}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="c-item2__info">
                        <span className="c-item2__minute">{minutes} min,</span>
                        <span className="c-item2__cat">{cat}</span>
                        {age ? (
                            <span className="c-item2__age">PG{age}</span>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="c-item2__name">{name}</div>
                </Link>
            </div>
        </div>
    );
}

export default Item2;
