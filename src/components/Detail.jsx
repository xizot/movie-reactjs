import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getComment, loadComment } from "../actions/film.action";
import CommentItem from "./CommentItem";
import Detail1 from "./Detail1";
import Detail2 from "./Detail2";

function Detail({ ID = null }) {
    const comments = useSelector((state) => state.film.comment);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    const loadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    useEffect(() => {
        dispatch(loadComment(1));
    }, [dispatch]);

    useEffect(() => {
        dispatch(getComment(1, page));
    }, [dispatch, page]);
    return (
        <>
            <section className="p-detail">
                <Detail1
                    title="The rise of KingDom"
                    cat={["Action", "Romance"]}
                    description="She can truly celebrate who shie is. Directed by Ryan Murphu 'The Mando' is the spectacular, big-hearted flim."
                    poster="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362"
                    actors="SOTN"
                    directors="SOTN"
                    year="2022"
                    nation="LAOs"
                />
                <Detail2 />
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
                                    ></textarea>
                                    <button className="c-btn c-btn--primary">
                                        POST COMMENT
                                    </button>
                                </div>
                                <div className="p-detail3__comments">
                                    {comments.length &&
                                        comments.map((item, index) => (
                                            <React.Fragment key={item.id}>
                                                <CommentItem
                                                    id={item.id}
                                                    avatar={item.avatar}
                                                    name={item.name}
                                                    content={item.content}
                                                />
                                            </React.Fragment>
                                        ))}
                                </div>

                                <button
                                    className="c-btn c-btn--loadmore"
                                    onClick={(e) => loadMore()}
                                >
                                    Load more
                                </button>
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
