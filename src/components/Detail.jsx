import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getComment, postComment } from "../helper/reusble";
import CommentItem from "./CommentItem";
import Detail1 from "./Detail1";
import Detail2 from "./Detail2";

function Detail({ id }) {
    const [comments, setComments] = useState({});
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const movieInfo = useSelector((state) => state.movie.data);
    const type = useSelector((state) => state.movie.type);
    const [commentValue, setCommentValue] = useState("");
    const handleCommentValue = (e) => {
        const value = e.target.value;
        if (value && value.length < 1000) {
            setCommentValue(value);
        }
    };
    const handleSubmitComment = () => {
        postComment(id, commentValue)
            .then((res) => {
                setCommentValue("");
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    const loadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    useEffect(() => {
        getComment(id)
            .then((res) => {
                setComments(res);
            })
            .catch(() => {
                setComments({});
            });
    }, [dispatch, id]);

    return (
        <>
            <section className="p-detail">
                <Detail1
                    id={id}
                    type={type}
                    title={movieInfo.title}
                    cat={movieInfo.genres && movieInfo.genres.join(", ")}
                    description={movieInfo.overview}
                    poster={movieInfo.posterPath}
                    actors={
                        movieInfo.credits &&
                        movieInfo.credits.map((item) => item.name).join(", ")
                    }
                    year={
                        (movieInfo.movie && movieInfo.movie.releaseDate) ||
                        (movieInfo.tvShow && movieInfo.tvShow.firstAirDate)
                    }
                    movieInfo={movieInfo}
                />
                {movieInfo.videos &&
                    (movieInfo.videos.length ? (
                        <Detail2
                            type={movieInfo.videos[0].site}
                            videoID={movieInfo.videos[0].key}
                            poster={movieInfo.posterPath}
                        />
                    ) : (
                        <></>
                    ))}

                <div className="p-detail3 u-fade">
                    <div className="l-container">
                        <h3 className="c-title">Comments</h3>
                        {(isAuthenticated && (
                            <div className="p-detail3__content">
                                <div className="p-detail3__box">
                                    <textarea
                                        name=""
                                        id=""
                                        className=""
                                        placeholder="Enter your comment"
                                        onChange={(e) => handleCommentValue(e)}
                                    ></textarea>
                                    <button
                                        className="c-btn c-btn--primary"
                                        onClick={() => handleSubmitComment()}
                                    >
                                        POST COMMENT
                                    </button>
                                </div>
                                <div className="p-detail3__comments">
                                    {comments.results &&
                                        comments.results.length &&
                                        comments.results.map((item) => (
                                            <React.Fragment key={item.id}>
                                                <CommentItem
                                                    id={item.id}
                                                    avatar={item.avatar}
                                                    name={item.name}
                                                    content={item.content}
                                                    date={item.date}
                                                />
                                            </React.Fragment>
                                        ))}
                                </div>
                                {comments && page < comments.totalPages ? (
                                    <button
                                        className="c-btn c-btn--loadmore"
                                        onClick={() => loadMore()}
                                    >
                                        Load more
                                    </button>
                                ) : (
                                    <></>
                                )}
                            </div>
                        )) || (
                            <div className="p-detail3__notlogin">
                                <p>
                                    You must be{" "}
                                    <Link to="/login">logged in</Link> to see
                                    comment
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Detail;
