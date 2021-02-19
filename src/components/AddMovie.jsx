import { CloudUploadOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../actions/admin.action";

function AddMovie({ nameClass, closePopUp }) {
    const movieDetailData = useSelector((state) => state.admin.movieDetailData);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [runtime, setRuntime] = useState("");
    const [genres, setGenres] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const dispatch = useDispatch();
    const handleClosePopUp = () => {
        closePopUp();
    };
    const handleAddMovie = () => {
        const data = {
            imdbId: movieDetailData && movieDetailData.imdbId,
            streamPath: videoLink,
            isPublic: true,
            override: {
                genres: genres.split("/"),
                tagline: movieDetailData.tagline,
                title: title,
                originalTitle: title,
                overview: description,
                posterPath: movieDetailData && movieDetailData.posterPath,
                backdropPath: movieDetailData.backdropPath,
                popularity: movieDetailData.popularity,
                movie: {
                    runtime: runtime,
                    releaseDate: releaseDate,
                    status: movieDetailData.status,
                    adult: movieDetailData.adult,
                },
            },
        };
        dispatch(addMovie(data));
    };

    useEffect(() => {
        if (movieDetailData) {
            console.log(movieDetailData);
            setTitle((movieDetailData && movieDetailData.title) || "");
            setDescription((movieDetailData && movieDetailData.overview) || "");
            setGenres(
                (movieDetailData && movieDetailData.genres.join("/")) || ""
            );
            setReleaseDate(
                (movieDetailData && movieDetailData.releaseDate) || ""
            );
            setRuntime((movieDetailData && movieDetailData.runtime) || "");
            setVideoLink(
                process.env.REACT_APP_VIDEO_URL +
                    (movieDetailData && movieDetailData.streamPath) || ""
            );
        }
    }, [dispatch, movieDetailData]);
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
                    <input
                        type="file"
                        id="upload-image"
                        style={{ display: "none" }}
                    />
                    <div className="c-addfilm__img">
                        <img
                            src={movieDetailData && movieDetailData.posterPath}
                            alt=""
                        />
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
                                                    value={releaseDate}
                                                    onChange={(e) =>
                                                        setReleaseDate(
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                                <label className="c-form__label">
                                                    Release Date
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="c-form__group ">
                                            <div className="gutter">
                                                <input
                                                    className="c-form__input"
                                                    type="text"
                                                    required
                                                    value={runtime}
                                                    onChange={(e) =>
                                                        setRuntime(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <label className="c-form__label">
                                                    Running timed in minute
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="c-form__group ">
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
                                    </div>
                                    <div className="col-lg-8 col-md-12">
                                        <div className=" c-form__group  c-addfilm__upload">
                                            <div className="gutter">
                                                <input
                                                    className="c-form__input"
                                                    type="text"
                                                    required
                                                    value={videoLink}
                                                    onChange={(e) =>
                                                        setVideoLink(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <label className="c-form__label">
                                                    Video Link
                                                </label>
                                                <a
                                                    className="c-addfilm__link"
                                                    href={
                                                        process.env
                                                            .REACT_APP_VIDEO_URL ||
                                                        "https://storage.whitefoo.workers.dev"
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <CloudUploadOutlined />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="c-addfilm__type">
                            <span>Item type: </span>
                            <div className="c-addfilm__type__item c-addfilm__tv">
                                <span className="c-radio "></span>TV Series
                            </div>
                            <div className="c-addfilm__type__item c-addfilm__movie">
                                <span className="c-radio is-check"></span>
                                Movies
                            </div>
                        </div>
                        <div className="c-addfilm__handle">
                            <div
                                className="c-btn c-addfilm__publish"
                                onClick={() => handleAddMovie()}
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

export default AddMovie;
