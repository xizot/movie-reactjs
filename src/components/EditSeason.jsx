import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "../axios";
import {
    addSeason,
    updateSeason,
    deleteSeason,
} from "./../actions/admin.action";
import { getErrorResponse } from "../helper";
import Alert from "./Alert";
import AddEpisode from "./AddEpisode";
// import { useDispatch, useSelector } from "react-redux";
// import { getTvDetail } from "../actions/admin.action";
// import AddSeasonItem from "./AddSeasonItem";

function EditSeason({ mediaId, nameClass, closePopup }) {
    const dispatch = useDispatch();

    const [tvDetailData, setTvDetailData] = useState(null);
    const [seasonNumber, setSeasonNumber] = useState("");
    const [airDate, setAirDate] = useState("");
    const [overview, setOverview] = useState("");
    const [seasonName, setSeasonName] = useState("");
    const [isAdded, setIsAdded] = useState(false);
    const [isError, setIsError] = useState(false);
    const [resMessage, setResMessage] = useState("");
    const [currentSeason, setCurrentSeason] = useState(null);
    const [isOpenEpisode, setIsOpenEpisode] = useState(false);

    const [type, setType] = useState("new");

    const handleAddSeason = () => {
        setIsAdded(false);
        setIsError(false);
        const data = {
            mediaId: mediaId,
            season: seasonNumber,
            isPublic: true,
            override: {
                airDate: airDate,
                name: seasonName,
                overview: overview,
                posterPath: "",
            },
        };
        addSeason(data)
            .then((res) => {
                setIsAdded(true);
                setResMessage(res.data.message);
                axios
                    .get(`media/details/${mediaId}`)
                    .then((res) => {
                        setTvDetailData(res.data);
                        handleAddNew();
                    })
                    .catch((err) => {
                        setTvDetailData(null);
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
    const resetState = () => {
        closePopup();
    };
    const handleUpdateSeason = () => {
        setIsAdded(false);
        setIsError(false);
        const data = {
            mediaId: mediaId,
            season: seasonNumber,
            isPublic: true,
            override: {
                airDate: airDate,
                name: seasonName,
                overview: overview,
                posterPath: "",
            },
        };
        updateSeason(data)
            .then((res) => {
                setIsAdded(true);
                setResMessage(res.data.message);
                axios
                    .get(`media/details/${mediaId}`)
                    .then((res) => {
                        setTvDetailData(res.data);
                    })
                    .catch((err) => {
                        setTvDetailData(null);
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
    const handleDeleteSeason = () => {
        if (currentSeason) {
            setIsAdded(false);
            setIsError(false);
            deleteSeason(mediaId, currentSeason)
                .then((res) => {
                    setResMessage(res.data.message);
                    setIsAdded(true);
                    handleAddNew();

                    axios
                        .get(`media/details/${mediaId}`)
                        .then((res) => {
                            setTvDetailData(res.data);
                        })
                        .catch((err) => {
                            setTvDetailData(null);
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
    const handleSeasonTabLet = (e) => {
        const value = e.target.value;
        if (value === "new") {
            setType("new");
            handleAddNew();
            return;
        } else {
            handleSeason(value);
        }
    };
    const handleSeason = (season) => {
        setCurrentSeason(season);
        setType("update");
        axios.get(`media/details/${mediaId}/season/${season}`).then((res) => {
            setAirDate(res.data.airDate);
            setOverview(res.data.overview);
            setSeasonName(res.data.name);
            setSeasonNumber(res.data.seasonNumber);
        });
    };
    const handleAddNew = () => {
        setType("new");
        setCurrentSeason(null);
        setAirDate("");
        setOverview("");
        setSeasonName("");
        setSeasonNumber("");
    };
    const handleCloseEpisodePopup = () => {
        setIsOpenEpisode(false);
    };
    useEffect(() => {
        if (mediaId) {
            axios
                .get(`media/details/${mediaId}`)
                .then((res) => {
                    setTvDetailData(res.data);
                })
                .catch(() => setTvDetailData(null));
        }
    }, [dispatch, mediaId]);
    return (
        <>
            {(isAdded && (
                <Alert
                    msg={resMessage}
                    type={isError ? "c-alert--error" : "c-alert--success"}
                />
            )) || <></>}
            <div
                className={`c-popup2 c-popup2-season c-step2 ${nameClass} `}
                onClick={() => resetState()}
            >
                <div
                    className="c-popup2-season__content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="c-popup2-season__left">
                        <h3 className="c-popup2-season__title">Seasons</h3>
                        <ul>
                            {(tvDetailData &&
                                tvDetailData.tvShow.seasons.length &&
                                tvDetailData.tvShow.seasons.map(
                                    (item, index) => (
                                        <li
                                            className={
                                                item.seasonNumber ===
                                                currentSeason
                                                    ? "is-current"
                                                    : ""
                                            }
                                            key={index}
                                            onClick={() =>
                                                handleSeason(item.seasonNumber)
                                            }
                                        >
                                            {item.name}
                                        </li>
                                    )
                                )) || <></>}
                            <span
                                className={`c-popup2-season__addnew ${
                                    !currentSeason ? "is-current" : ""
                                }`}
                                onClick={() => handleAddNew()}
                            >
                                Add New
                            </span>
                        </ul>
                    </div>
                    <div className="c-popup2-season__top show-tab-only">
                        <h3 className="c-popup2-season__title">Seasons</h3>
                        <select
                            value={currentSeason || "new"}
                            onChange={(e) => handleSeasonTabLet(e)}
                        >
                            {(tvDetailData &&
                                tvDetailData.tvShow.seasons.length &&
                                tvDetailData.tvShow.seasons.map(
                                    (item, index) => (
                                        <option
                                            value={item.seasonNumber}
                                            key={index}
                                        >
                                            {item.name}
                                        </option>
                                    )
                                )) || <></>}
                            <option value="new">Add New</option>
                        </select>
                    </div>
                    <div className="c-popup2-season__right">
                        <h3 className="c-popup2-season__title">
                            {type === "update"
                                ? "Season Infomation"
                                : "Add New"}
                        </h3>
                        <div className="c-popup2-season__info">
                            <div className="c-form">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-4 col-xs-12">
                                            <div className="c-form__group ">
                                                <div className="gutter">
                                                    {type === "update" ? (
                                                        <input
                                                            className="c-form__input"
                                                            type="text"
                                                            value={seasonNumber}
                                                            onChange={(e) =>
                                                                setSeasonNumber(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            readOnly
                                                        />
                                                    ) : (
                                                        <input
                                                            className="c-form__input"
                                                            type="text"
                                                            value={seasonNumber}
                                                            onChange={(e) =>
                                                                setSeasonNumber(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            required
                                                        />
                                                    )}
                                                    <label className="c-form__label">
                                                        Season Number
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
                                                        value={seasonName}
                                                        onChange={(e) =>
                                                            setSeasonName(
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                    />
                                                    <label className="c-form__label">
                                                        Season Name
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
                                    </div>
                                </form>
                                <div className="c-popup2-season__actions">
                                    {type === "update" ? (
                                        <>
                                            <button
                                                className="c-btn"
                                                onClick={() =>
                                                    handleUpdateSeason()
                                                }
                                            >
                                                Update
                                            </button>
                                            <button
                                                className="c-btn"
                                                onClick={() =>
                                                    handleDeleteSeason()
                                                }
                                            >
                                                Delete
                                            </button>
                                            <button
                                                className="c-btn"
                                                onClick={() =>
                                                    setIsOpenEpisode(true)
                                                }
                                            >
                                                Show Episode
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            className="c-btn"
                                            onClick={() => handleAddSeason()}
                                        >
                                            Add
                                        </button>
                                    )}
                                    <button
                                        className="c-btn"
                                        onClick={() => resetState()}
                                    >
                                        Back to Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AddEpisode
                mediaId={mediaId}
                currentSeason={currentSeason}
                isOpen={isOpenEpisode}
                closePopup={() => handleCloseEpisodePopup()}
            />
        </>
    );
}

export default EditSeason;
