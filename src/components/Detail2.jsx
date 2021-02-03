import React from "react";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";

function Detail2({ type, videoID }) {
    const videoSettings = {
        type: "video",
        sources: [
            {
                src: videoID,
                provider: type && type.toLowerCase(),
            },
        ],
    };
    return (
        <div className="p-detail2 u-fade ">
            <div className="p-detail2__content">
                <div className="l-container">
                    <h3 className="c-title">Trailer</h3>
                </div>
                <Plyr source={videoSettings} />
            </div>
        </div>
    );
}

export default Detail2;
