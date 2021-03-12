import { CloudUploadOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import {
    addEpisode,
    deleteEpisode,
    updateEpisode,
} from "../actions/admin.action";
import axios from "../axios";
import { getErrorResponse } from "../helper";
import Alert from "./Alert";

function AddEpisode({ isOpen = false, currentSeason, mediaId, closePopup }) {
    const [episodes, setEpisodes] = useState(null);
    const [currentEpisode, setCurrentEpisode] = useState(null);
    const [type, setType] = useState("new");

    const [episode, setEpisode] = useState("");
    const [overview, setOverview] = useState("");
    const [streamPath, setStreamPath] = useState("");
    const [airDate, setAirDate] = useState("");
    const [name, setName] = useState("");
    const [stillPath, setStillPath] = useState("");

    const [isAdded, setIsAdded] = useState(false);
    const [isError, setIsError] = useState(false);
    const [resMessage, setResMessage] = useState("");

    const handleAddEpisode = () => {
        setIsAdded(false);
        setIsError(false);
        const data = {
            mediaId,
            season: currentSeason,
            episode: episode,
            streamPath: streamPath,
            isPublic: true,
            override: {
                airDate: airDate,
                name: name,
                overview: overview,
                stillPath: stillPath,
            },
        };
        addEpisode(data)
            .then((res) => {
                setIsAdded(true);
                setResMessage(res.data.message);
                axios
                    .get(`media/details/${mediaId}/season/${currentSeason}`)
                    .then((res) => {
                        setEpisodes(res.data.episodes);
                        handleAddNew();
                    })
                    .catch((err) => {
                        setEpisodes(null);
                        console.log(err);
                    });
            })
            .catch((err) => {
                const error = getErrorResponse(err);
                setResMessage(error);
                setIsError(true);
                setIsAdded(true);
            });
    };

    const handleUpdateEpisode = () => {
        setIsAdded(false);
        setIsError(false);
        const data = {
            mediaId,
            season: currentSeason,
            episode: episode,
            streamPath: streamPath,
            isPublic: true,
            override: {
                airDate: airDate,
                name: name,
                overview: overview,
                stillPath: stillPath,
            },
        };
        updateEpisode(data)
            .then((res) => {
                setIsAdded(true);
                setResMessage(res.data.message);
                axios
                    .get(`media/details/${mediaId}/season/${currentSeason}`)
                    .then((res) => {
                        setEpisodes(res.data.episodes);
                    })
                    .catch((err) => {
                        setEpisodes(null);
                        console.log(err);
                    });
            })
            .catch((err) => {
                const error = getErrorResponse(err);
                setResMessage(error);
                setIsError(true);
                setIsAdded(true);
            });
    };
    const handleDeleteEpisode = () => {
        if (currentEpisode) {
            setIsAdded(false);
            setIsError(false);
            deleteEpisode(mediaId, currentSeason, currentEpisode)
                .then((res) => {
                    setResMessage(res.data.message);
                    setIsAdded(true);
                    handleAddNew();

                    axios
                        .get(`media/details/${mediaId}`)
                        .then((res) => {
                            setEpisodes(res.data.episodes);
                        })
                        .catch((err) => {
                            setEpisodes(null);
                            console.log(err);
                        });
                })
                .catch((err) => {
                    setIsAdded(true);
                    setIsError(true);
                    const error = getErrorResponse(err);
                    setResMessage(error);
                });
        }
    };
    const resetState = () => {
        setType("new");
        setEpisode("");
        setCurrentEpisode(null);
        setStreamPath("");
        setAirDate("");
        setOverview("");
        setName("");
        setStillPath("");
        closePopup();
    };
    const handleEpisode = (ep) => {
        setCurrentEpisode(ep);
        setType("update");
        axios
            .get(
                `/media/details/${mediaId}/season/${currentSeason}/episode/${ep}`
            )
            .then((res) => {
                setAirDate(res.data.airDate);
                setOverview(res.data.overview);
                setName(res.data.name);
                setEpisode(res.data.episodeNumber);
                setStillPath(res.data.stillPath);
            });
    };
    const handleAddNew = () => {
        setType("new");
        setAirDate("");
        setOverview("");
        setName("");
        setEpisode("");
        setStillPath("");
        setStreamPath("");
    };
    //▼Fetch data▼
    useEffect(() => {
        if (mediaId) {
            axios
                .get(`media/details/${mediaId}/season/${currentSeason}`)
                .then((res) => {
                    setEpisodes(res.data.episodes);
                })
                .catch(() => setEpisodes(null));
        }
    }, [mediaId, currentSeason]);
    //▲Fetch data▲

    return (
        <div
            className={`c-popup2 c-popup2-season c-step2 ${
                isOpen ? "is-open" : ""
            }`}
        >
            {isAdded ? (
                <Alert
                    msg={resMessage}
                    type={isError ? "c-alert--error" : "c-alert--success"}
                />
            ) : (
                <></>
            )}
            <div className="c-popup2-season__content">
                <div className="c-popup2-season__left">
                    <h3 className="c-popup2-season__title">
                        Season: {currentSeason} <br />
                        Episodes
                    </h3>
                    <ul>
                        {(episodes &&
                            episodes.length &&
                            episodes.map((item, index) => (
                                <li
                                    className={
                                        item.episodeNumber === currentEpisode
                                            ? "is-current"
                                            : ""
                                    }
                                    key={index}
                                    onClick={() =>
                                        handleEpisode(item.episodeNumber)
                                    }
                                >
                                    {item.name}
                                </li>
                            ))) || <></>}
                        <span
                            className={`c-popup2-season__addnew ${
                                !currentEpisode ? "is-current" : ""
                            }`}
                            onClick={() => handleAddNew()}
                        >
                            Add New
                        </span>
                    </ul>
                </div>
                <div className="c-popup2-season__right">
                    <h3 className="c-popup2-season__title">
                        {type === "update" ? "Episode Infomations" : "Add New"}
                    </h3>
                    <div className="c-popup2-season__info">
                        <div className="c-form">
                            <form>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="c-episode__img">
                                            <img src={stillPath} alt="" />
                                        </div>
                                        <div className="c-form__group ">
                                            <div className="gutter">
                                                <input
                                                    className="c-form__input"
                                                    type="text"
                                                    value={stillPath}
                                                    onChange={(e) =>
                                                        setStillPath(
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                                <label className="c-form__label">
                                                    Still Path
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xs-12">
                                        <div className="c-form__group ">
                                            <div className="gutter">
                                                {type === "update" ? (
                                                    <input
                                                        className="c-form__input"
                                                        type="text"
                                                        value={episode}
                                                        onChange={(e) =>
                                                            setEpisode(
                                                                e.target.value
                                                            )
                                                        }
                                                        readOnly
                                                    />
                                                ) : (
                                                    <input
                                                        className="c-form__input"
                                                        type="text"
                                                        value={episode}
                                                        onChange={(e) =>
                                                            setEpisode(
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                    />
                                                )}
                                                <label className="c-form__label">
                                                    Episode Number
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xs-12">
                                        <div className="c-form__group ">
                                            <div className="gutter">
                                                <input
                                                    className="c-form__input"
                                                    type="text"
                                                    value={airDate}
                                                    onChange={(e) =>
                                                        setAirDate(
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                                <label className="c-form__label">
                                                    Air Date
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xs-12">
                                        <div className="c-form__group ">
                                            <div className="gutter">
                                                <input
                                                    className="c-form__input"
                                                    type="text"
                                                    value={name}
                                                    onChange={(e) =>
                                                        setName(e.target.value)
                                                    }
                                                    required
                                                />
                                                <label className="c-form__label">
                                                    Episode Name
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="c-form__group height-150">
                                            <div className="gutter">
                                                <textarea
                                                    className="c-form__input"
                                                    type="text"
                                                    value={overview}
                                                    onChange={(e) =>
                                                        setOverview(
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                                <label className="c-form__label">
                                                    Overview
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 ">
                                        <div className=" c-form__group  c-addfilm__upload">
                                            <div className="gutter">
                                                <input
                                                    className="c-form__input"
                                                    type="text"
                                                    required
                                                    value={streamPath}
                                                    onChange={(e) =>
                                                        setStreamPath(
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
                            <div className="c-popup2-season__actions">
                                {type === "update" ? (
                                    <>
                                        <button
                                            className="c-btn"
                                            onClick={() =>
                                                handleUpdateEpisode()
                                            }
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="c-btn"
                                            onClick={() =>
                                                handleDeleteEpisode()
                                            }
                                        >
                                            Delete
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        className="c-btn"
                                        onClick={() => handleAddEpisode()}
                                    >
                                        Add
                                    </button>
                                )}
                                <button
                                    className="c-btn"
                                    onClick={() => resetState()}
                                >
                                    Back to season
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddEpisode;
