import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getErrorResponseString } from "../helper";
import { deleteComment, getComment, postComment } from "../helper/reusble";
import CommentItem from "./CommentItem";
import Detail1 from "./Detail1";
import Detail2 from "./Detail2";

function Detail({ id }) {
    const [currentComments, setCurrentComments] = useState(null);
    const [comments, setComments] = useState(null);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const movieInfo = useSelector((state) => state.movie.data);
    const type = useSelector((state) => state.movie.type);
    const [commentValue, setCommentValue] = useState("");
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const handleCommentValue = (e) => {
        const value = e.target.value;
        setCommentValue(value);
    };
    const handleSubmitComment = () => {
        postComment(id, commentValue)
            .then(() => {
                setCommentValue("");
                setPage(1);
                reloadData();
            })
            .catch((err) => {
                try {
                    const error = getErrorResponseString(err);
                    alert(error);
                } catch (error) {
                    alert("Post comment failed. Please try again later!!!");
                }
            });
    };

    const handleDeleteComment = (commentID) => {
        let result = window.confirm("Are you sure to delete this item?");
        if (result) {
            deleteComment(commentID)
                .then(() => {
                    alert("Delete successfully");
                    setPage(1);
                    reloadData();
                })
                .catch(() => {
                    alert("Delete failed. Try again");
                });
        }
    };

    const loadMore = () => {
        getComment(id, page + 1)
            .then((res) => {
                setComments(res.data);
                setCurrentComments((prev) => [...prev, ...res.data.results]);
            })
            .catch(() => {
                setComments(null);
                setCurrentComments(null);
            });
        setPage((prevPage) => prevPage + 1);
    };

    const reloadData = useCallback(() => {
        if (id) {
            getComment(id)
                .then((res) => {
                    setComments(res.data);
                    setCurrentComments(res.data.results);
                })
                .catch(() => {
                    setComments(null);
                    setCurrentComments(null);
                });
        }
    }, [id]);
    useEffect(() => {
        reloadData();
    }, [dispatch, reloadData]);

    return (
        <>
            <section className="p-detail">
                <Detail1
                    id={id}
                    type={type}
                    mediaId={movieInfo._id}
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
                                        value={commentValue}
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
                                    {currentComments &&
                                    currentComments.length ? (
                                        currentComments.map((item, index) => (
                                            <React.Fragment key={index}>
                                                <CommentItem
                                                    id={item._id}
                                                    userID={item.user._id}
                                                    name={item.user.displayName}
                                                    content={item.content}
                                                    date={item.createdAt}
                                                    handleDeleteComment={(e) =>
                                                        handleDeleteComment(e)
                                                    }
                                                />
                                            </React.Fragment>
                                        ))
                                    ) : (
                                        <></>
                                    )}
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
