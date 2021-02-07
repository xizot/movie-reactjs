import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "../actions/user.action";
import $ from "jquery";
import { CloudUploadOutlined, DownOutlined } from "@ant-design/icons";
import Loading from "../components/Loading";

function Admin() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [openOption, setOpenOption] = useState(false);
    const [openMoviePopUp, setOpenMoviePopUp] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [type, setType] = useState("");
    const handleOption = () => {
        setOpenOption(!openOption);   
    };
    const handleType = (type) => {
        setType(type);
    };

    const HandleOpenSearch = (type) => {
        setOpenSearch(true);
        handleType(type);
        setOpenOption(false)
        alert(type)
    };
    const closeSearch = () => {
        setOpenSearch(false);
        handleType("");
    };

    const openMovie = () => {
        setOpenMoviePopUp(true);
    };
    const closePopUp = () => {
        setOpenMoviePopUp(false);
        handleType("");
    };
    useEffect(() => {
        // Event
        $(".js-toggle-option").click(function (e) {
            e.preventDefault();
            $(".c-panel").toggleClass("is-open");
        });

        $(".js-priority").on("click", function (e) {
            e.stopPropagation();
        });

        dispatch(loadUser());
        setIsLoading(true);
    }, [dispatch]);
    return (
        <>
            <Loading nameClass={isLoading ? "is-fadeout" : ""} />

            <div
                className={`c-popup2 c-popup2-search ${
                    openSearch ? "is-open" : ""
                }`}
            >
                <div className="c-popup2__content">
                    <span
                        className="c-popup2__close"

                        onClick={()=> closeSearch()}
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
                        <h3 className="c-popup2__title">Title</h3>
                    </div>
                    <div className="c-popup2__bottom c-search">
                        <div className="c-search__box">
                            <form>
                                <div className="c-search__box__icon">
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
                                />
                            </form>
                        </div>
                        <div className="c-search__content">
                            <div className="c-search__item js-open-addfilm">
                                <div className="c-search__left">
                                    <div className="c-search__img">
                                        <img
                                            src="https://cdn.vox-cdn.com/thumbor/J2XSqgAqREtpkGAWa6rMhkHA1Y0=/0x0:1600x900/1400x933/filters:focal(672x322:928x578):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66320060/Tanjiro__Demon_Slayer_.0.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="c-search__right">
                                    <div className="c-search__info">
                                        <h4 className="c-search__info__name">
                                            Sotn va nhung nguoi ban
                                        </h4>
                                        <div className="c-search__info__cat">
                                            Action
                                        </div>
                                        <div className="c-search__info__bottom">
                                            <span className="c-search__info__minutes">
                                                100 minutes
                                            </span>
                                            <span className="c-search__info__actor">
                                                by SOTN
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="c-search__item js-open-addfilm">
                                <div className="c-search__left">
                                    <div className="c-search__img">
                                        <img
                                            src="https://cdn.vox-cdn.com/thumbor/J2XSqgAqREtpkGAWa6rMhkHA1Y0=/0x0:1600x900/1400x933/filters:focal(672x322:928x578):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66320060/Tanjiro__Demon_Slayer_.0.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="c-search__right">
                                    <div className="c-search__info">
                                        <h4 className="c-search__info__name">
                                            Sotn va nhung nguoi ban
                                        </h4>
                                        <div className="c-search__info__cat">
                                            Action
                                        </div>
                                        <div className="c-search__info__bottom">
                                            <span className="c-search__info__minutes">
                                                100 minutes
                                            </span>
                                            <span className="c-search__info__actor">
                                                by SOTN
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Không có kết quả tìm kiếm */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="c-popup2 c-popup2-addfilm">
                <div className="c-popup2__content  js-priority">
                    <span className="c-popup2__close" onClick={()=>closePopUp()}>
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
                        <h3 className="c-popup2__title">Title</h3>
                    </div>
                    <div className="c-popup2__bottom c-addfilm">
                        <input
                            type="file"
                            id="upload-image"
                            style={{ display: "none" }}
                        />
                        <div className="c-addfilm__img">
                            <img
                                src="https://cdn.vox-cdn.com/thumbor/J2XSqgAqREtpkGAWa6rMhkHA1Y0=/0x0:1600x900/1400x933/filters:focal(672x322:928x578):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66320060/Tanjiro__Demon_Slayer_.0.png"
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
                                                    />
                                                    <label className="c-form__label">
                                                        Genre/ Genres
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
                                                    />
                                                    <label className="c-form__label">
                                                        Age
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
                                                    />
                                                    <label className="c-form__label">
                                                        Video Link
                                                    </label>
                                                    <a
                                                        className="c-addfilm__link"
                                                        href="http://"
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
                                    <span className="c-radio is-check"></span>TV
                                    Series
                                </div>
                                <div className="c-addfilm__type__item c-addfilm__movie">
                                    <span className="c-radio"></span>Movies
                                </div>
                            </div>
                            <div className="c-addfilm__handle">
                                <div className="c-btn c-addfilm__publish">
                                    Publish
                                </div>
                                <div className="c-btn c-addfilm__publish js-close-addfilm">
                                    Cancel
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                                <a
                                    href="/"
                                    data-title="Home"
                                    className="c-option__text"
                                >
                                    Home
                                </a>
                            </div>
                            <div className="c-option">
                                <span className="c-option__number">2</span>
                                <a
                                    href="/"
                                    data-title="Movies"
                                    className="c-option__text"
                                >
                                    Movies
                                </a>
                            </div>
                            <div className="c-option">
                                <span className="c-option__number">3</span>
                                <a
                                    href="/"
                                    data-title="TV Shows"
                                    className="c-option__text"
                                >
                                    TV Shows
                                </a>
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
                                        <li onClick={() => HandleOpenSearch("movie")}>
                                            Add new movie
                                        </li>
                                        <li onClick={() => HandleOpenSearch("tv")}>Add new tv show</li>
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
                                                <th>Like</th>
                                                <th>Dislike</th>
                                                <th>Option</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr id={1}>
                                                <td>1</td>
                                                <td className="t-left">
                                                    Sotn va nhung nguoi ban
                                                </td>
                                                <td className="c-view__publish">
                                                    Publish
                                                </td>
                                                <td>-9999999</td>
                                                <td>999999+</td>
                                                <td className="c-view__option">
                                                    <button className="c-view__edit">
                                                        edit
                                                    </button>
                                                    <button className="c-view__del">
                                                        delete
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr id={1}>
                                                <td>1</td>
                                                <td className="t-left">
                                                    Sotn va nhung nguoi ban
                                                </td>
                                                <td className="c-view__publish">
                                                    Publish
                                                </td>
                                                <td>-9999999</td>
                                                <td>999999+</td>
                                                <td className="c-view__option">
                                                    <button className="c-view__edit">
                                                        edit
                                                    </button>
                                                    <button className="c-view__del">
                                                        delete
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr id={1}>
                                                <td>1</td>
                                                <td className="t-left">
                                                    Sotn va nhung nguoi ban
                                                </td>
                                                <td className="c-view__hidden">
                                                    Hidden
                                                </td>
                                                <td>-9999999</td>
                                                <td>999999+</td>
                                                <td className="c-view__option">
                                                    <button className="c-view__edit">
                                                        edit
                                                    </button>
                                                    <button className="c-view__del">
                                                        delete
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr id={1}>
                                                <td>1</td>
                                                <td className="t-left">
                                                    Sotn va nhung nguoi ban
                                                </td>
                                                <td className="c-view__publish">
                                                    Publish
                                                </td>
                                                <td>-9999999</td>
                                                <td>999999+</td>
                                                <td className="c-view__option">
                                                    <button className="c-view__edit">
                                                        edit
                                                    </button>
                                                    <button className="c-view__del">
                                                        delete
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr id={1}>
                                                <td>1</td>
                                                <td className="t-left">
                                                    Sotn va nhung nguoi ban
                                                </td>
                                                <td className="c-view__hidden">
                                                    Hidden
                                                </td>
                                                <td>-9999999</td>
                                                <td>999999+</td>
                                                <td className="c-view__option">
                                                    <button className="c-view__edit">
                                                        edit
                                                    </button>
                                                    <button className="c-view__del">
                                                        delete
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr id={1}>
                                                <td>1</td>
                                                <td>Sotn va nhung nguoi ban</td>
                                                <td className="c-view__publish">
                                                    Publish
                                                </td>
                                                <td>-9999999</td>
                                                <td>999999+</td>
                                                <td className="c-view__option">
                                                    <button className="c-view__edit">
                                                        edit
                                                    </button>
                                                    <button className="c-view__del">
                                                        delete
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="c-view__paginate">
                                    <p className="c-view__prev">prev</p>
                                    <p className="c-view__page">
                                        <span className="c-view__current">
                                            1
                                        </span>
                                        /
                                        <span className="c-view__total">3</span>
                                    </p>
                                    <p className="c-view__next"> next </p>
                                </div>
                            </div>
                            <div className="c-view">
                                <div className="c-view__title">
                                    <h3>TV Shows</h3>
                                    <div className="c-btn" onClick={() => HandleOpenSearch("tv")}>
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
                                                    Session's Number
                                                </th>
                                                <th className="t-center">
                                                    Episode's Number
                                                </th>
                                                <th>Status</th>
                                                <th>Like</th>
                                                <th>Dislike</th>
                                                <th>Option</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr id={1}>
                                                <td>1</td>
                                                <td className="t-left">
                                                    Sotn va nhung nguoi ban
                                                </td>
                                                <td className="t-center">
                                                    999
                                                </td>
                                                <td className="t-center">0</td>
                                                <td className="c-view__hidden">
                                                    Hidden
                                                </td>
                                                <td>-9999999</td>
                                                <td>999999+</td>
                                                <td className="c-view__option">
                                                    <button className="c-view__edit">
                                                        edit
                                                    </button>
                                                    <button className="c-view__del">
                                                        delete
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr id={1}>
                                                <td>1</td>
                                                <td className="t-left">
                                                    Sotn va nhung nguoi ban
                                                </td>
                                                <td className="t-center">
                                                    999
                                                </td>
                                                <td className="t-center">0</td>
                                                <td className="c-view__hidden">
                                                    Hidden
                                                </td>
                                                <td>-9999999</td>
                                                <td>999999+</td>
                                                <td className="c-view__option">
                                                    <button className="c-view__edit">
                                                        edit
                                                    </button>
                                                    <button className="c-view__del">
                                                        delete
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr id={1}>
                                                <td>1</td>
                                                <td className="t-left">
                                                    Sotn va nhung nguoi ban
                                                </td>
                                                <td className="t-center">
                                                    999
                                                </td>
                                                <td className="t-center">0</td>
                                                <td className="c-view__hidden">
                                                    Hidden
                                                </td>
                                                <td>-9999999</td>
                                                <td>999999+</td>
                                                <td className="c-view__option">
                                                    <button className="c-view__edit">
                                                        edit
                                                    </button>
                                                    <button className="c-view__del">
                                                        delete
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr id={1}>
                                                <td>1</td>
                                                <td className="t-left">
                                                    Sotn va nhung nguoi ban
                                                </td>
                                                <td className="t-center">
                                                    999
                                                </td>
                                                <td className="t-center">0</td>
                                                <td className="c-view__publish">
                                                    Publish
                                                </td>
                                                <td>-9999999</td>
                                                <td>999999+</td>
                                                <td className="c-view__option">
                                                    <button className="c-view__edit">
                                                        edit
                                                    </button>
                                                    <button className="c-view__del">
                                                        delete
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr id={1}>
                                                <td>1</td>
                                                <td className="t-left">
                                                    Sotn va nhung nguoi ban
                                                </td>
                                                <td className="t-center">
                                                    999
                                                </td>
                                                <td className="t-center">0</td>
                                                <td className="c-view__hidden">
                                                    Hidden
                                                </td>
                                                <td>-9999999</td>
                                                <td>999999+</td>
                                                <td className="c-view__option">
                                                    <button className="c-view__edit">
                                                        edit
                                                    </button>
                                                    <button className="c-view__del">
                                                        delete
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr id={1}>
                                                <td>1</td>
                                                <td className="t-left">
                                                    Sotn va nhung nguoi ban
                                                </td>
                                                <td className="t-center">
                                                    999
                                                </td>
                                                <td className="t-center">0</td>
                                                <td className="c-view__publish">
                                                    Publish
                                                </td>
                                                <td>-9999999</td>
                                                <td>999999+</td>
                                                <td className="c-view__option">
                                                    <button className="c-view__edit">
                                                        edit
                                                    </button>
                                                    <button className="c-view__del">
                                                        delete
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr id={1}>
                                                <td>1</td>
                                                <td className="t-left">
                                                    Sotn va nhung nguoi ban
                                                </td>
                                                <td className="t-center">
                                                    999
                                                </td>
                                                <td className="t-center">0</td>
                                                <td className="c-view__publish">
                                                    Publish
                                                </td>
                                                <td>-9999999</td>
                                                <td>999999+</td>
                                                <td className="c-view__option">
                                                    <button className="c-view__edit">
                                                        edit
                                                    </button>
                                                    <button className="c-view__del">
                                                        delete
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="c-view__paginate">
                                    <p className="c-view__prev">prev</p>
                                    <p className="c-view__page">
                                        <span className="c-view__current">
                                            1
                                        </span>
                                        /
                                        <span className="c-view__total">3</span>
                                    </p>
                                    <p className="c-view__next"> next </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Admin;
