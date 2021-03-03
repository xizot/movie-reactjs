import { DislikeOutlined, LikeOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";
import MoviePopup from "./MoviePopup";
import $ from "jquery";
import { history } from "../helper";
import { useDispatch } from "react-redux";
import { addHistory } from "../actions/history.action";
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
    mediaId
}) {
    const dispath = useDispatch();
    const openPopUp = () => {
        const mediaInt = parseInt(mediaId);
        dispath(addHistory(mediaInt));
        if (type === "movie") {
            history.push(`/movie/${id}/watch`);
        } else {
            $(".p-popup").fadeIn(500);
        }
    };
    const closePopup = () => {
        if (type === "tv") {
            $(".p-popup").fadeOut(500);
        }
        
    };
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

                            <div className="p-detail1__action ">
                                <button className="c-icon is-hover">
                                    <PlusOutlined className="c-icon--plus" />
                                    <p>Add To Favourite</p>
                                </button>
                                <button className="c-icon">
                                    <LikeOutlined className="c-icon--like" />
                                </button>
                                <button className="c-icon">
                                    <DislikeOutlined className="c-icon--dislike" />
                                </button>
                                <span className="p-detail1__txt">
                                    99% liked this movie
                                </span>
                            </div>
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
                                <p className="p-detail1__item">
                                    <b>Actor:</b> <span> {actors}</span>
                                </p>
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
