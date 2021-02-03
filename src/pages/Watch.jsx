import React, { useEffect } from "react";
import Plyr from "plyr-react";
// import "plyr-react/dist/plyr.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovieVideo } from "../actions/stream.action";
import Loading from "../components/Loading";

function Watch({ match }) {
    const dispatch = useDispatch();
    const { id, episode } = match.params;
    const videoLinks = useSelector((state) => state.stream.data);
    const isLoading = useSelector((state) => state.stream.isLoading);
    const videoSettings = {
        type: "video",
        sources: [
            {
                src: videoLinks.length && videoLinks[0].url,
            },
        ],
    };
    useEffect(() => {
        if (!episode) {
            dispatch(getMovieVideo(id));
        }
    }, [dispatch, episode, id]);
    return (
        <div>
            <Loading nameClass={isLoading ? "" : "is-fadeout"} />
            {videoLinks.length ? (
                <Plyr source={videoSettings} />
            ) : (
                "No data available"
            )}
        </div>
    );
}

export default Watch;
