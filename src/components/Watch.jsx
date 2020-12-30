import React from "react";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeWatch } from "../actions/watch.action";

function Watch({
    videoSrc = "https://storage.whitefoo.workers.dev/Encodes/Mama_2013_1080p.mp4",
    listEpisode = [],
    ID,
    ep,
}) {
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
            <Link to={`/movie/${ID}`} onClick={(e) => handleWatch(e)}>
                Back
            </Link>
            <Plyr source={videoSettings} />
        </div>
    );
}

export default Watch;
