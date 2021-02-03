import { DislikeOutlined, LikeOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";
// import { Link } from "react-router-dom";
import MoviePopup from "./MoviePopup";
import $ from "jquery";
function Detail1({ title, cat, description, poster, actors, year }) {
    const openPopUp = () => {
        $(".p-popup").fadeIn(500);
    };
    const closePopup = () => {
        $(".p-popup").fadeOut(500);
    };
    return (
        <div className="p-detail1 ">
            <div className="l-container">
                <MoviePopup
                    title="The rise of kingdom"
                    handlePopup={() => closePopup()}
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
                                <p className="p-detail1__item u-flex ">
                                    <b>Actor:</b> <span> {actors}</span>
                                </p>
                                <p className="p-detail1__item u-flex ">
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
