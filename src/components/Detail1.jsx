import { DislikeOutlined, LikeOutlined, PlusOutlined ,DeleteOutlined} from "@ant-design/icons";
import React, { useCallback, useEffect, useState } from "react";
import MoviePopup from "./MoviePopup";
import $ from "jquery";
import { getErrorResponseString, history } from "../helper";
import { useDispatch, useSelector } from "react-redux";
import { addHistory } from "../actions/history.action";
import { addWatchlist } from "../actions/watchlist.action";
import { getRatingCount, checkLiked, rateMedia,checkAdd ,addMedia} from "../helper/reusble";

function Detail1({
    type,
    title,
    cat,
    description,
    poster,
    actors,
    year,
    id,
    movieInfo,
    mediaId,
}) {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const [ratingCount, setRatingCount] = useState(0);
    const [isLiked, setIsLiked] = useState(null);
    const [isDisliked, setIsDisliked] = useState(null);
    const [isAdd, setIsAdd] = useState(null);

    const dispath = useDispatch();
    const openPopUp = () => {
        dispath(addHistory(mediaId));
        if (type === "movie") {
            history.push(`/movie/${id}/watch`);
        } else {
            $(".p-popup").fadeIn(500);
        }
    };
    const addFavorite = () => {
        dispath(addWatchlist(mediaId));
         if (isAdd) {
            addMedia(id)
                .then(() => {
                    reloadData();
                })
                .catch((err) => {
                    try {
                        const error = getErrorResponseString(err);
                        alert(error);
                    } catch (error) {
                        alert("Add failed. Please try again later!!!");
                    }
                });
        }
    };

    const closePopup = () => {
        if (type === "tv") {
            $(".p-popup").fadeOut(500);
        }
    };
    const handleLike = () => {
        if (isLiked) {
            rateMedia(id)
                .then(() => {
                    reloadData();
                })
                .catch((err) => {
                    try {
                        const error = getErrorResponseString(err);
                        alert(error);
                    } catch (error) {
                        alert("Rating failed. Please try again later!!!");
                    }
                });
        } else {
            rateMedia(id, "like")
                .then(() => {
                    reloadData();
                })
                .catch((err) => {
                    try {
                        const error = getErrorResponseString(err);
                        alert(error);
                    } catch (error) {
                        alert("Rating failed. Please try again later!!!");
                    }
                });
        }
    };
    const handleDislike = () => {
        if (isDisliked) {
            rateMedia(id)
                .then(() => {
                    reloadData();
                })
                .catch((err) => {
                    try {
                        const error = getErrorResponseString(err);
                        alert(error);
                    } catch (error) {
                        alert("Rating failed. Please try again later!!!");
                    }
                });
        } else {
            rateMedia(id, "dislike")
                .then(() => {
                    reloadData();
                })
                .catch((err) => {
                    try {
                        const error = getErrorResponseString(err);
                        alert(error);
                    } catch (error) {
                        alert("Rating failed. Please try again later!!!");
                    }
                });
        }
    };
    const reloadData = useCallback(() => {
        getRatingCount(id).then((res) => setRatingCount(res));
        if (isAuthenticated) {
            checkLiked(id).then((res) => {
                if (!res.message && res.liked) {
                    setIsLiked(true);
                    setIsDisliked(false);
                } else if (!res.message && !res.liked && res.liked !== null) {
                    setIsLiked(false);
                    setIsDisliked(true);
                } else {
                    setIsDisliked(false);
                    setIsLiked(false);
                }
            });
            checkAdd(id).then((res) => {
                if (!res.message && res.isAdded) {
                    setIsAdd(true);
                } else if (!res.message && !res.isAdded && res.isAdded !== null) {
                    setIsAdd(false);
                } else {
                    setIsAdd(false);
                }
            });
        }
    }, [id, isAuthenticated]);
    useEffect(() => {
        reloadData();
    }, [reloadData]);
    return (

        <div className="p-detail1 ">
            <div className="l-container">
                <MoviePopup
                    id={id}
                    title={title}
                    handlePopup={() => closePopup()}
                    seasons={movieInfo.tvShow && movieInfo.tvShow.seasons}
                />
                <div className="p-detail1__content js-dark-here">
                    <div className="row row-reverse">
                        <div className="col-sm-12 col-lg-8 p-detail1__left">
                            <h3 className="c-title1">{title}</h3>
                            <div className="p-detail1__cat">
                                <p className="c-title4">Genre:</p>
                                <a href="/"> {cat}</a>
                            </div>
                            <p className="p-detail1__des c-paragraph">
                                {description}
                            </p>
                            {isAuthenticated ? (
                                <div className="p-detail1__action ">
                                    <button
                                        className="c-icon is-hover"
                                        onClick={() => addFavorite()}
                                    >
                                        {isAdd ?<DeleteOutlined className="c-icon--trash"/>:<PlusOutlined className="c-icon--plus" />}
                                        {isAdd ?<p>Remove to Watch List</p> :<p>Add To Watch List</p> }
                                    </button>
                                    <button
                                        className={`c-icon ${
                                            isLiked ? "c-icon--active" : ""
                                        }`}
                                        onClick={() => handleLike()}
                                    >
                                        <LikeOutlined className="c-icon--like" />
                                    </button>
                                    <button
                                        className={`c-icon ${
                                            isDisliked ? "c-icon--active" : ""
                                        }`}
                                        onClick={() => handleDislike()}
                                    >
                                        <DislikeOutlined className="c-icon--dislike" />
                                    </button>
                                    <span className="p-detail1__txt">
                                        {ratingCount}{" "}
                                        {ratingCount > 1 ? "persons" : "person"}{" "}
                                        liked this movie
                                    </span>
                                </div>
                            ) : (
                                <></>
                            )}

                            <button
                                className="c-btn c-btn--primary"
                                onClick={() => openPopUp()}
                            >
                                Play
                            </button>
                        </div>

                        <div className="col-sm-12 col-lg-4 p-detail1__right">
                            <div className="gutter">
                                <div className="p-detail1__image">
                                    <img src={poster} alt="" />
                                </div>
                                {actors && <p className="p-detail1__item" >
                                    <b>Actor:</b> <span> {actors}</span>
                                </p> || <></> }

                                <p className="p-detail1__item">
                                    <b>Year:</b> <span>{year}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail1;
