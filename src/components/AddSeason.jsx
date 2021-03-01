import React from "react";
import { useDispatch } from "react-redux";
import { ADD_RESET } from "../types/admin.type";
// import { useDispatch, useSelector } from "react-redux";
// import { getTvDetail } from "../actions/admin.action";
// import AddSeasonItem from "./AddSeasonItem";

function AddSeason({ nameClass, mediaId }) {
    // const tvDetailData = useSelector((state) => state.admin.tvDetailData);
    // const [currentSeason, setCurrentSeason] = useState(null);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getTvDetail("118255"));
    // }, [dispatch]);
    console.log(mediaId);
    const dispatch = useDispatch();
    const resetState = () => dispatch({ type: ADD_RESET });
    return (
        <>
            <div className={`c-popup2 c-popup2-season c-step2 ${nameClass}`}>
                <div className="c-popup2-season__content">
                    <div className="c-popup2-season__left">
                        <h3 className="c-popup2-season__title">Seasons</h3>
                        <ul>
                            <li>Season 1</li>
                            <li>Season 2</li>
                            <li>Season 3</li>
                            <li>Season 4</li>
                            <span className="c-popup2-season__addnew">
                                Add New
                            </span>
                        </ul>
                    </div>
                    <div className="c-popup2-season__right">
                        <h3 className="c-popup2-season__title">
                            Season Infomation/ Add New
                        </h3>
                        <div className="c-popup2-season__info">
                            <div className="c-form">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-4">
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
                                        <div className="col-lg-4">
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
                                        <div className="col-lg-4">
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
                                            <div className="c-form__group height-150">
                                                <div className="gutter">
                                                    <textarea
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
                                    </div>
                                </form>
                                <div className="c-popup2-season__actions">
                                    <button
                                        className="c-btn"
                                        onClick={() => resetState()}
                                    >
                                        Cancel
                                    </button>
                                    <button className="c-btn">Update</button>
                                    <button className="c-btn">Delete</button>
                                    <button className="c-btn">
                                        Show Episode
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="c-popup2 c-popup2-season c-popup2-episode">
                <div className="c-popup2-season__content">
                    <div className="c-popup2-season__left">
                        <h3 className="c-popup2-season__title">Seasons 1</h3>
                        <ul>
                            <li className="is-active">Episode 1</li>
                            <li>Episode 2</li>
                            <li>Episode 3</li>
                            <li>Episode 4</li>
                            <span className="c-popup2-season__addnew">
                                Add New
                            </span>
                        </ul>
                    </div>
                    <div className="c-popup2-season__right">
                        <h3 className="c-popup2-season__title">
                            Season Infomation/ Add New
                        </h3>
                        <div className="c-popup2-season__info">
                            <div className="c-form">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-4">
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
                                        <div className="col-lg-4">
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
                                        <div className="col-lg-4">
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
                                            <div className="c-form__group height-150">
                                                <div className="gutter">
                                                    <textarea
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
                                    </div>
                                </form>
                                <div className="c-popup2-season__actions">
                                    <button className="c-btn">Update</button>
                                    <button className="c-btn">Delete</button>
                                    <button className="c-btn">
                                        Back To Season
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddSeason;
