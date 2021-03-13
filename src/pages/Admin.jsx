import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";
import { DeleteOutlined, DownOutlined, EditOutlined } from "@ant-design/icons";
import Loading from "../components/Loading";
import {
    getMovieDetail,
    getTvDetail,
    searchMovieByQuery,
    searchTvByQuery,
} from "../actions/admin.action";
import { getErrorResponse, truncateByLength } from "../helper";
import AddMovie from "../components/AddMovie";
import Alert from "../components/Alert";
import AddTv from "../components/AddTv";
import AddSeason from "../components/AddSeason";
import axios from "../axios";
import { deleteByID } from "../actions/common.action";
import { ADD_RESET } from "../types/admin.type";
import { Link } from "react-router-dom";
import EditMovie from "../components/EditMovie";
import EditTv from "../components/EditTv";

function Admin() {
    const dispatch = useDispatch();
    const addSuccessMessage = useSelector(
        (state) => state.admin.addSuccessMessage
    );
    const isTv = useSelector((state) => state.admin.tv);
    const [isLoading, setIsLoading] = useState(false);

    const [openOption, setOpenOption] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    // const [searchPage, setSearchPage] = useState(1);
    const [openSearch, setOpenSearch] = useState(false);
    const [type, setType] = useState(null);

    //▼ Popup flags ▼
    const [isOpenMoviePopUp, setIsOpenMoviePopUp] = useState(false);
    const [isOpenTvPopUp, setIsOpenTvPopUp] = useState(false);
    //▲ Popup flags ▲

    const [currentMoviePage, setCurrentMoviePage] = useState(1);
    const [currentTvPage, setCurrentTvPage] = useState(1);
    const [movieData, setMovieData] = useState({});
    const [tvData, setTvData] = useState({});
    const [tvID, setTvID] = useState(null);

    const [isShowDeleteAlert, setIsShowDeleteAlert] = useState(false);
    const [deleteAlertMsg, setDeleteAlertMsg] = useState("");
    const [isDeletedError, setIsDeletedError] = useState(false);

    const searchData = useSelector((state) => state.admin.searchData);
    const isAdded = useSelector((state) => state.admin.isAdded);
    const addError = useSelector((state) => state.admin.addError);

    const handleOption = () => {
        setOpenOption(!openOption);
    };

    const handleDeleteByID = (mediaId, type) => {
        // ▼ Reset state ▼
        setIsShowDeleteAlert(false);
        setDeleteAlertMsg("");
        setIsDeletedError(false);
        // ▲ Reset state ▲
        let result = window.confirm("Are you sure to delete this item?");
        if (result) {
            deleteByID(mediaId, type)
                .then((data) => {
                    setIsDeletedError(false);
                    setIsShowDeleteAlert(true);
                    setDeleteAlertMsg(data.message);
                    //▼ Reload data ▼
                    if (type === "movie") {
                        axios
                            .get(
                                `/media/fetch?limit=10&type=movie&page=${currentMoviePage}`
                            )
                            .then((res) => {
                                setMovieData(res.data);
                            });
                    } else {
                        axios
                            .get(
                                `/media/fetch?limit=10&type=tv&page=${currentTvPage}`
                            )
                            .then((res) => {
                                setTvData(res.data);
                            });
                    }
                    //▲ Reload data ▲
                })
                .catch((err) => {
                    const error = getErrorResponse(err);
                    setIsDeletedError(true);
                    setIsShowDeleteAlert(true);
                    setDeleteAlertMsg(error);
                });
        }
    };

    const HandleOpenSearch = (type) => {
        setType(type);
        setOpenSearch(true);
        setOpenOption(false);
        if (searchValue && searchValue.length) {
            // alert(searchValue);
            if (type === "movie") {
                dispatch(searchMovieByQuery(searchValue, 1));
            } else if (type === "tv") {
                dispatch(searchTvByQuery(searchValue, 1));
            }
        }
    };
    const closeSearch = () => {
        setOpenSearch(false);
        setType(null);
    };
    const handleSearchValue = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        if (type === "movie") {
            dispatch(searchMovieByQuery(value, 1));
        } else if (type === "tv") {
            dispatch(searchTvByQuery(value, 1));
            console.log(tvData);
        }
    };
    const handleSubmitSearch = (e, page) => {
        e.preventDefault();
        if (type === "movie") {
            dispatch(searchMovieByQuery(searchValue, page));
        } else if (type === "tv") {
            dispatch(searchTvByQuery(searchValue, page));
        }
    };
    const handleOpenPopUp = (id) => {
        if (type === "movie") {
            openMovie(id);
        } else if (type === "tv") {
            openTV(id);
        }
    };
    const openMovie = (id) => {
        dispatch(getMovieDetail(id));
        setIsOpenMoviePopUp(true);
        setIsOpenTvPopUp(false);
    };
    const openTV = (id) => {
        dispatch(getTvDetail(id));
        setIsOpenTvPopUp(true);
        setIsOpenMoviePopUp(false);
    };
    const closePopUp = () => {
        setIsOpenTvPopUp(false);
        setIsOpenMoviePopUp(false);
    };

    // ▼ VARIABLES FOR EDIT MOVIE & TV ▼
    const [currentEditID, setCurrentEditID] = useState(null);
    const [isOpenMovieEditPopUp, setIsOpenMovieEditPopUp] = useState(false);
    const [isOpenTvEditPopUp, setIsOpenTvEditPopUp] = useState(false);
    const [editType, setEditType] = useState(null);
    const closeEditPopup = () => {
        setIsOpenMovieEditPopUp(false);
        setIsOpenTvEditPopUp(false);
        setEditType(null);
    };

    const handleTvEdit = (id) => {
        setCurrentEditID(id);
        setIsOpenTvEditPopUp(true);
        setEditType("tv");
    };
    const handleMovieEdit = (id) => {
        setCurrentEditID(id);
        setIsOpenMovieEditPopUp(true);
        setIsOpenTvEditPopUp(false);
        setEditType("movie");
    };
    // ▲ VARIABLES FOR EDIT MOVIE & TV ▲

    useEffect(() => {
        document.title = `Admin | ${process.env.REACT_APP_WEB_NAME}`;
        // Event
        $(".js-toggle-option").click(function (e) {
            e.preventDefault();
            $(".c-panel").toggleClass("is-open");
        });

        $(".js-priority").on("click", function (e) {
            e.stopPropagation();
        });
        setIsLoading(true);
        dispatch({ type: ADD_RESET });
    }, [dispatch]);
    useEffect(() => {
        if (isAdded && !addError) {
            setIsOpenTvPopUp(false);
            setIsOpenMoviePopUp(false);
            setOpenSearch(false);
            if (isTv) {
                setTvID((addSuccessMessage && addSuccessMessage._id) || null);
            }
        }
    }, [isAdded, addSuccessMessage, addError, isTv]);

    //▼ Fetch movie data ▼
    useEffect(() => {
        axios
            .get(`/media/fetch?limit=10&type=movie&page=${currentMoviePage}`)
            .then((res) => {
                setMovieData(res.data);
            });
    }, [currentMoviePage, isAdded, editType]);
    //▲ Fetch movie data ▲

    //▼ Fetch tvshow data ▼
    useEffect(() => {
        axios
            .get(`/media/fetch?limit=10&type=tv&page=${currentTvPage}`)
            .then((res) => {
                setTvData(res.data);
            });
    }, [currentTvPage, isAdded, editType]);
    //▲ Fetch tvshow data ▲

    return (
        <>
            {isShowDeleteAlert ? (
                <Alert
                    msg={deleteAlertMsg}
                    type={
                        isDeletedError ? "c-alert--error" : "c-alert--success"
                    }
                />
            ) : (
                <></>
            )}
            {isAdded ? (
                <Alert
                    msg={addError ? addError : addSuccessMessage.message}
                    type={addError ? "c-alert--error" : "c-alert--success"}
                />
            ) : (
                <></>
            )}
            <Loading nameClass={isLoading ? "is-fadeout" : ""} />

            <div
                className={`c-popup2 c-popup2-search ${
                    openSearch ? "is-open" : ""
                }`}
                onClick={() => setOpenSearch(false)}
            >
                <div
                    className="c-popup2__content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <span
                        className="c-popup2__close"
                        onClick={() => closeSearch()}
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
                        <h3 className="c-popup2__title">
                            {type === "movie"
                                ? "Search for Movie"
                                : "Search for TV show"}
                        </h3>
                    </div>
                    <div className="c-popup2__bottom c-search">
                        <div className="c-search__box">
                            <form
                                action=""
                                onSubmit={(e) => handleSubmitSearch(e, 1)}
                            >
                                <div
                                    className="c-search__box__icon"
                                    onClick={(e) => {
                                        handleSubmitSearch(e, 1);
                                    }}
                                >
                                    <span
                                        role="img"
                                        aria-label="search"
                                        className="anticon anticon-search"
                                    >
                                        <svg
                                            viewBox="64 64 896 896"
                                            focusable="false"
                                            data-icon="search"
                                            width="1em"
                                            height="1em"
                                            aria-hidden="true"
                                        >
                                            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter your film"
                                    onChange={(e) => handleSearchValue(e)}
                                />
                            </form>
                        </div>
                        <div className="c-search__content">
                            {searchData && searchData.results.length ? (
                                searchData.results.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="c-search__item"
                                        onClick={() =>
                                            handleOpenPopUp(item.tmdbId)
                                        }
                                    >
                                        <div className="c-search__left">
                                            <div className="c-search__img">
                                                <img
                                                    src={item.posterPath}
                                                    alt={item.title}
                                                />
                                            </div>
                                        </div>
                                        <div className="c-search__right">
                                            <div className="c-search__info">
                                                <h4 className="c-search__info__name">
                                                    {item.title}
                                                </h4>
                                                <div className="c-search__info__cat">
                                                    {item.releaseDate}
                                                </div>
                                                <div className="c-search__info__bottom">
                                                    <span>
                                                        {truncateByLength(
                                                            item.overview,
                                                            200
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <>No search results found</>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* ▼ADD MOVIE & TV▼ */}

            {type && type === "movie" ? (
                <AddMovie
                    nameClass={isOpenMoviePopUp ? "is-open" : ""}
                    closePopUp={() => closePopUp()}
                />
            ) : (
                <></>
            )}
            {type && type === "tv" ? (
                <>
                    <AddTv
                        nameClass={isOpenTvPopUp ? "is-open" : ""}
                        closePopUp={() => closePopUp()}
                    />
                    <AddSeason
                        nameClass={
                            isTv && !addError && isAdded && type == "tv"
                                ? "is-open"
                                : ""
                        }
                        mediaId={tvID}
                    />
                </>
            ) : (
                <></>
            )}

            {/* ▲ADD MOVIE & TV▲ */}

            <div className="p-admin ">
                <div className="c-panel ">
                    <div className="u-flex">
                        <div className="c-panel__content">
                            <div className="c-panel__close js-toggle-option">
                                <svg
                                    height="365.696pt"
                                    viewBox="0 0 365.696 365.696"
                                    width="365.696pt"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0" />
                                </svg>
                            </div>
                            <div className="c-option">
                                <span className="c-option__number">1</span>
                                <Link
                                    to="/"
                                    data-title="Home"
                                    className="c-option__text"
                                >
                                    Home
                                </Link>
                            </div>
                            <div className="c-option">
                                <span className="c-option__number">2</span>
                                <Link
                                    to="/browse/movie"
                                    data-title="Movies"
                                    className="c-option__text"
                                >
                                    Movies
                                </Link>
                            </div>
                            <div className="c-option">
                                <span className="c-option__number">3</span>
                                <Link
                                    to="/browse/tv"
                                    data-title="TV Shows"
                                    className="c-option__text"
                                >
                                    TV Shows
                                </Link>
                            </div>
                        </div>
                        <div className="c-panel__bg">
                            <img
                                src="https://images.pexels.com/photos/5116831/pexels-photo-5116831.jpeg?cs=srgb&dl=pexels-clara-ngo-5116831.jpg&fm=jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="p-admin__top js-dark-here">
                    <div className="l-container">
                        <div className="u-flex a-center">
                            <div className="p-admin__top__item p-admin__toggle js-toggle-option">
                                {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                <svg
                                    version="1.1"
                                    id="Capa_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 512 512"
                                    style={{
                                        enableBackground: "new 0 0 512 512",
                                    }}
                                    xmlSpace="preserve"
                                >
                                    <g>
                                        <g>
                                            <path
                                                d="M176.792,0H59.208C26.561,0,0,26.561,0,59.208v117.584C0,209.439,26.561,236,59.208,236h117.584
                                        C209.439,236,236,209.439,236,176.792V59.208C236,26.561,209.439,0,176.792,0z M196,176.792c0,10.591-8.617,19.208-19.208,19.208
                                        H59.208C48.617,196,40,187.383,40,176.792V59.208C40,48.617,48.617,40,59.208,40h117.584C187.383,40,196,48.617,196,59.208
                                        V176.792z"
                                            />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path
                                                d="M452,0H336c-33.084,0-60,26.916-60,60v116c0,33.084,26.916,60,60,60h116c33.084,0,60-26.916,60-60V60
                                        C512,26.916,485.084,0,452,0z M472,176c0,11.028-8.972,20-20,20H336c-11.028,0-20-8.972-20-20V60c0-11.028,8.972-20,20-20h116
                                        c11.028,0,20,8.972,20,20V176z"
                                            />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path
                                                d="M176.792,276H59.208C26.561,276,0,302.561,0,335.208v117.584C0,485.439,26.561,512,59.208,512h117.584
                                        C209.439,512,236,485.439,236,452.792V335.208C236,302.561,209.439,276,176.792,276z M196,452.792
                                        c0,10.591-8.617,19.208-19.208,19.208H59.208C48.617,472,40,463.383,40,452.792V335.208C40,324.617,48.617,316,59.208,316h117.584
                                        c10.591,0,19.208,8.617,19.208,19.208V452.792z"
                                            />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path
                                                d="M452,276H336c-33.084,0-60,26.916-60,60v116c0,33.084,26.916,60,60,60h116c33.084,0,60-26.916,60-60V336
                                        C512,302.916,485.084,276,452,276z M472,452c0,11.028-8.972,20-20,20H336c-11.028,0-20-8.972-20-20V336c0-11.028,8.972-20,20-20
                                        h116c11.028,0,20,8.972,20,20V452z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div
                                className="p-admin__top__item c-btn p-admin__top__item--dropdown"
                                onClick={() => handleOption()}
                            >
                                <p>Add Film </p>
                                <DownOutlined className="p-adamin__top__down" />
                                <div
                                    className={`p-admin__top__option ${
                                        openOption ? "is-open" : ""
                                    }`}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <ul className="">
                                        <li
                                            onClick={() =>
                                                HandleOpenSearch("movie")
                                            }
                                        >
                                            Add new movie
                                        </li>
                                        <li
                                            onClick={() =>
                                                HandleOpenSearch("tv")
                                            }
                                        >
                                            Add new tv show
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-admin__bottom">
                    <div className="l-container">
                        <div className="u-flex u-between">
                            <div className="c-view">
                                <div className="c-view__title ">
                                    <h3>Movies</h3>
                                    <div
                                        className="c-btn"
                                        onClick={() =>
                                            HandleOpenSearch("movie")
                                        }
                                    >
                                        Add New
                                    </div>
                                </div>
                                <div className="c-view__table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th className="t-left">
                                                    Title
                                                </th>
                                                <th>Status</th>
                                                <th>Release Date</th>
                                                <th>Last Update</th>
                                                <th>Option</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {movieData.results &&
                                            movieData.results.length ? (
                                                movieData.results.map(
                                                    (item, idx) => (
                                                        <tr
                                                            id={item._id}
                                                            key={idx}
                                                        >
                                                            <td>{item._id}</td>
                                                            <td className="t-left">
                                                                {item.title}
                                                            </td>
                                                            <td
                                                                className={
                                                                    item.isPublic
                                                                        ? "c-view__publish"
                                                                        : "c-view__hidden"
                                                                }
                                                            >
                                                                {item.isPublic
                                                                    ? "Publish"
                                                                    : "Hidden"}
                                                            </td>
                                                            <td>
                                                                {
                                                                    item.releaseDate
                                                                }
                                                            </td>
                                                            <td>
                                                                {item.updatedAt}
                                                            </td>
                                                            <td className="c-view__option">
                                                                <button
                                                                    className="c-view__edit"
                                                                    onClick={() =>
                                                                        handleMovieEdit(
                                                                            item._id
                                                                        )
                                                                    }
                                                                >
                                                                    <EditOutlined />
                                                                    Edit
                                                                </button>
                                                                <button
                                                                    className="c-view__del"
                                                                    onClick={() =>
                                                                        handleDeleteByID(
                                                                            item._id,
                                                                            "movie"
                                                                        )
                                                                    }
                                                                >
                                                                    <DeleteOutlined />
                                                                    Delete
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                )
                                            ) : (
                                                <></>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="c-view__paginate">
                                    <p
                                        className="c-view__prev"
                                        onClick={() =>
                                            setCurrentMoviePage((prev) =>
                                                prev > 1 ? prev - 1 : prev
                                            )
                                        }
                                    >
                                        Prev
                                    </p>
                                    <p className="c-view__page">
                                        <span className="c-view__current">
                                            {currentMoviePage}
                                        </span>
                                        /
                                        <span className="c-view__total">
                                            {movieData.totalPages
                                                ? movieData.totalPages
                                                : 1}
                                        </span>
                                    </p>
                                    <p
                                        className="c-view__next"
                                        onClick={() =>
                                            setCurrentMoviePage((prev) =>
                                                movieData.totalPages
                                                    ? prev <
                                                      movieData.totalPages
                                                        ? prev + 1
                                                        : prev
                                                    : prev
                                            )
                                        }
                                    >
                                        Next
                                    </p>
                                </div>
                            </div>
                            <div className="c-view">
                                <div className="c-view__title">
                                    <h3>TV Shows</h3>
                                    <div
                                        className="c-btn"
                                        onClick={() => HandleOpenSearch("tv")}
                                    >
                                        Add New
                                    </div>
                                </div>
                                <div className="c-view__table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th className="t-left">
                                                    Title
                                                </th>
                                                <th className="t-center">
                                                    Session Count
                                                </th>
                                                <th>Status</th>
                                                <th>First Air Date</th>
                                                <th>Last Air Date</th>
                                                <th>Last Update</th>
                                                <th>Option</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tvData.results &&
                                            tvData.results.length ? (
                                                tvData.results.map(
                                                    (item, idx) => (
                                                        <tr
                                                            id={item._id}
                                                            key={idx}
                                                        >
                                                            <td>{item._id}</td>
                                                            <td className="t-left">
                                                                {item.title}
                                                            </td>
                                                            <td className="t-center">
                                                                {
                                                                    item.tvShow
                                                                        .seasonCount
                                                                }
                                                            </td>
                                                            <td
                                                                className={
                                                                    item.isPublic
                                                                        ? "c-view__publish"
                                                                        : "c-view__hidden"
                                                                }
                                                            >
                                                                {item.isPublic
                                                                    ? "Publish"
                                                                    : "Hidden"}
                                                            </td>
                                                            <td>
                                                                {
                                                                    item.tvShow
                                                                        .firstAirDate
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    item.tvShow
                                                                        .lastAirDate
                                                                }
                                                            </td>
                                                            <td>
                                                                {item.updatedAt}
                                                            </td>
                                                            <td className="c-view__option">
                                                                <button
                                                                    className="c-view__edit"
                                                                    onClick={() =>
                                                                        handleTvEdit(
                                                                            item._id
                                                                        )
                                                                    }
                                                                >
                                                                    <EditOutlined />
                                                                    Edit
                                                                </button>
                                                                <button
                                                                    className="c-view__del"
                                                                    onClick={() =>
                                                                        handleDeleteByID(
                                                                            item._id,
                                                                            "tv"
                                                                        )
                                                                    }
                                                                >
                                                                    <DeleteOutlined />
                                                                    Delete
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                )
                                            ) : (
                                                <></>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="c-view__paginate">
                                    <p
                                        className="c-view__prev"
                                        onClick={() =>
                                            setCurrentTvPage((prev) =>
                                                prev > 1 ? prev - 1 : prev
                                            )
                                        }
                                    >
                                        Prev
                                    </p>
                                    <p className="c-view__page">
                                        <span className="c-view__current">
                                            {currentTvPage}
                                        </span>
                                        /
                                        <span className="c-view__total">
                                            {tvData.totalPages
                                                ? tvData.totalPages
                                                : 1}
                                        </span>
                                    </p>
                                    <p
                                        className="c-view__next"
                                        onClick={() =>
                                            setCurrentTvPage((prev) =>
                                                tvData.totalPages
                                                    ? prev < tvData.totalPages
                                                        ? prev + 1
                                                        : prev
                                                    : prev
                                            )
                                        }
                                    >
                                        {" "}
                                        next{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ▼EDIT MOVIE & TV▼ */}
            {editType && editType === "tv" ? (
                <EditTv
                    mediaId={currentEditID}
                    nameClass={isOpenTvEditPopUp ? "is-open" : ""}
                    closePopUp={() => closeEditPopup()}
                />
            ) : (
                <></>
            )}
            {editType && editType === "movie" ? (
                <EditMovie
                    mediaId={currentEditID}
                    nameClass={isOpenMovieEditPopUp ? "is-open" : ""}
                    closePopUp={() => closeEditPopup()}
                />
            ) : (
                <></>
            )}

            {/* ▲EDIT MOVIE & TV▲ */}
        </>
    );
}

export default Admin;
