import React from "react";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeWatch } from "../actions/watch.action";

function Watch({ id, videoSrc, listEpisode, ep }) {
    const dispatch = useDispatch();
    const videoSettings = {
        type: "video",
        sources: [
            {
                src: videoSrc,
            },
        ],
    };

    const handleWatch = (e) => {
        dispatch(closeWatch());
    };

    return (
        <div>
            <Link to={`/movie/${id}`} onClick={(e) => handleWatch(e)}>
                Back
            </Link>
            <Plyr source={videoSettings} />
        </div>
    );
}

export default Watch;
