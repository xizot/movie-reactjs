import React, { useEffect } from "react";
import Plyr from "plyr";
import { useDispatch, useSelector } from "react-redux";
import { getMovieVideo } from "../actions/stream.action";
import Loading from "../components/Loading";
import { SwapLeftOutlined } from "@ant-design/icons";
import { history } from "./../helper";
function Watch({ match }) {
    const dispatch = useDispatch();
    const { id, episode } = match.params;
    const videoSources = useSelector((state) => state.stream.data);
    const isLoading = useSelector((state) => state.stream.isLoading);

    useEffect(() => {
        if (!episode) {
            dispatch(getMovieVideo(id));
        }
    }, [dispatch, episode, id]);

    useEffect(() => {
        if (videoSources.length) {
            const player = new Plyr("#player");
            const videoSettings = {
                type: "video",
                sources: videoSources,
            };
            console.log(videoSettings);
            player.source = videoSettings;
        }
    }, [videoSources]);
    return (
        <div className="p-watch">
            <Loading nameClass={isLoading ? "" : "is-fadeout"} />
            <video id="player" playsInline controls>
                <source
                    src={videoSources.length && videoSources[0].src}
                    type="video/mp4"
                />
            </video>

            <div className="p-watch__back">
                <SwapLeftOutlined
                    onClick={() => {
                        history.goBack();
                    }}
                />
                <p>Back to detail</p>
            </div>
        </div>
    );
}

export default Watch;
