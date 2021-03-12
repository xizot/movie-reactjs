import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTV } from "../actions/admin.action";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getImageList } from "../helper/reusble";
var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    infinite: false,
};
function AddTv({ nameClass = 0, closePopUp }) {
    const tvDetailData = useSelector((state) => state.admin.tvDetailData);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [firstAirDate, setFirstAirDate] = useState("");
    const [lastAirDate, setLastAirDate] = useState("");
    const [genres, setGenres] = useState("");
    const [listImage, setListImage] = useState([]);

    const [poster, setPoster] = useState(null);
    // const [episodeCount, setpisodeCount] = useState(0);
    const dispatch = useDispatch();
    const handleClosePopUp = () => {
        closePopUp();
    };
    const handleAddTV = () => {
        const data = {
            tmdbId: tvDetailData.tmdbId,
            isPublic: true,
            override: {
                genres: genres.split("/"),
                tagline: tvDetailData.tagline,
                title: title,
                originalTitle: tvDetailData.originalTitle,
                overview: description,
                posterPath: poster,
                backdropPath: tvDetailData.backdropPath,
                popularity: tvDetailData.popularity,
                tvShow: {
                    episodeRuntime: tvDetailData.episodeRuntime || [],
                    firstAirDate: firstAirDate || tvDetailData.firstAirDate,
                    lastAirDate: lastAirDate || tvDetailData.lastAirDate,
                    status: "",
                },
            },
        };
        dispatch(addTV(data));
    };

    useEffect(() => {
        if (tvDetailData && !tvDetailData.movie) {
            console.log(tvDetailData);
            setTitle((tvDetailData && tvDetailData.title) || "");
            setDescription((tvDetailData && tvDetailData.overview) || "");
            setGenres((tvDetailData && tvDetailData.genres.join("/")) || "");
            setFirstAirDate((tvDetailData && tvDetailData.firstAirDate) || "");
            setLastAirDate((tvDetailData && tvDetailData.lastAirDate) || "");
            setPoster((tvDetailData && tvDetailData.posterPath) || null);
            getImageList(tvDetailData.tmdbId, "tv")
                .then((res) => {
                    console.log(res);
                    setListImage(res.data.posters);
                    if (res.data.posters.length > 4) {
                        settings.infinite = true;
                    }
                })
                .catch(() => {
                    setListImage([]);
                });
        }
    }, [dispatch, tvDetailData]);
    return (
        <div className={`c-popup2 c-popup2-addfilm ${nameClass}`}>
            <div className="c-popup2__content">
                <span
                    className="c-popup2__close"
                    onClick={() => handleClosePopUp()}
                >
                    <svg
                        height="365.696pt"
                        viewBox="0 0 365.696 365.696"
                        width="365.696pt"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0" />
                    </svg>
                </span>
                <div className="c-popup2__top">
                    <h3 className="c-popup2__title">{title}</h3>
                </div>
                <div className="c-popup2__bottom c-addfilm">
                    <div className="c-addfilm__poster">
                        <img className="c-addfilm__img" src={poster} alt="" />

                        {listImage.length ? (
                            <Slider {...settings} className="c-addfilm__slick">
                                {listImage.map((item, index) => (
                                    <div
                                        className="c-addfilm__select--img"
                                        key={index}
                                        onClick={() => setPoster(item)}
                                    >
                                        <img src={item} alt="" />
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="c-addfilm__info">
                        <div className="c-form">
                            <form>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="c-form__group ">
                                            <div className="gutter">
                                                <input
                                                    className="c-form__input"
                                                    type="text"
                                                    value={title}
                                                    onChange={(e) =>
                                                        setTitle(e.target.value)
                                                    }
                                                    required
                                                />
                                                <label className="c-form__label">
                                                    Title
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className=" c-form__group height-150">
                                            <div className="gutter">
                                                <textarea
                                                    className="c-form__input"
                                                    type="text"
                                                    value={description}
                                                    onChange={(e) =>
                                                        setDescription(
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                ></textarea>
                                                <label className="c-form__label">
                                                    Description
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className=" c-form__group ">
                                            <div className="gutter">
                                                <input
                                                    className="c-form__input"
                                                    type="text"
                                                    value={firstAirDate}
                                                    onChange={(e) =>
                                                        setFirstAirDate(
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                                <label className="c-form__label">
                                                    First Air Date
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className=" c-form__group ">
                                            <div className="gutter">
                                                <input
                                                    className="c-form__input"
                                                    type="text"
                                                    value={lastAirDate}
                                                    onChange={(e) =>
                                                        setLastAirDate(
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                                <label className="c-form__label">
                                                    Last Air Date
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="c-form__group">
                                            <div className="gutter">
                                                <input
                                                    className="c-form__input"
                                                    type="text"
                                                    required
                                                    value={genres}
                                                    onChange={(e) =>
                                                        setGenres(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <label className="c-form__label">
                                                    Genre/ Genres
                                                </label>
                                            </div>
                                        </div>
                                    </div>{" "}
                                </div>
                            </form>
                        </div>
                        <div className="c-addfilm__type">
                            <span>Item type: </span>
                            <div className="c-addfilm__type__item c-addfilm__tv">
                                <span className="c-radio is-check"></span>TV
                                Series
                            </div>
                            <div className="c-addfilm__type__item c-addfilm__movie">
                                <span className="c-radio "></span>
                                Movies
                            </div>
                        </div>
                        <div className="c-addfilm__handle">
                            <div
                                className="c-btn c-addfilm__publish"
                                onClick={() => handleAddTV()}
                            >
                                Publish
                            </div>
                            <div
                                className="c-btn c-addfilm__publish"
                                onClick={() => closePopUp()}
                            >
                                Cancel
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddTv;
