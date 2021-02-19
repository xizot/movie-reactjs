import React, { useState } from "react";

function AddSeasonItem({
    posterPath = "",
    mediaId = "",
    season = "",
    name = "",
    airDate = "",
    overview = "",
    isNew = true,
}) {
    const [currentPosterPath, setCurrentPosterPath] = useState(posterPath);
    const [currentMediaId, setCurrentMediaId] = useState(mediaId);
    const [currentSeason, setCurrentSeason] = useState(season);
    const [currentName, setCurrentName] = useState(name);
    const [currentOverview, setCurrentOverview] = useState(overview);
    const [currentAirDate, setCurrentAirDate] = useState(airDate);
    // const handleUpdate = () => {

    // };
    // const handleDelete = () => {

    // };
    // const handleAddNew = () => {

    // };
    return (
        <div className="c-addseason__item">
            <div className="c-addseason__title">Season 1</div>
            <div className="c-addseason__item__content">
                <img
                    className="c-addseason__item__img"
                    src={currentPosterPath}
                    alt=""
                    onChange={(e) => setCurrentPosterPath(e.target.value)}
                />
                <div className="row">
                    <div className="col-lg-3">
                        <div className="c-addseason__item__group ">
                            <label htmlFor="">ID:</label>
                            {isNew ? (
                                <input
                                    type="text"
                                    value={currentMediaId}
                                    onChange={(e) =>
                                        setCurrentMediaId(e.target.value)
                                    }
                                />
                            ) : (
                                <input type="text" value={mediaId} readOnly />
                            )}
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="c-addseason__item__group ">
                            <label htmlFor="">Season Number</label>
                            <input
                                type="text"
                                value={currentSeason}
                                onChange={(e) =>
                                    setCurrentSeason(e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="c-addseason__item__group ">
                            <label htmlFor="">Air Date</label>
                            <input
                                type="text"
                                value={currentAirDate}
                                onChange={(e) =>
                                    setCurrentAirDate(e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="c-addseason__item__group ">
                            <label htmlFor="">Name</label>
                            <input
                                type="text"
                                value={currentName}
                                onChange={(e) => setCurrentName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className=" c-addseason__item__group ">
                            <label htmlFor="">Overview</label>
                            <textarea
                                type="text"
                                value={currentOverview}
                                onChange={(e) =>
                                    setCurrentOverview(e.target.value)
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="c-addseason__item__actions"></div>
                {isNew ? (
                    <button>Add </button>
                ) : (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <button>View Epsisode</button>
                        <button>Update Season</button>
                        <button>Delete Season</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AddSeasonItem;
