import React from "react";
import CommentItem from "./CommentItem";
import Detail1 from "./Detail1";
import Detail2 from "./Detail2";

function Detail({ ID = null }) {
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
                                <CommentItem
                                    avatar={`${process.env.PUBLIC_URL}/assets/img/films/movies02.jpg`}
                                    name="SOTN"
                                    content="Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Sint,
                                fugiat."
                                />
                                <CommentItem
                                    avatar={`${process.env.PUBLIC_URL}/assets/img/films/movies02.jpg`}
                                    name="SOTN"
                                    content="Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Sint,
                                fugiat."
                                />
                                <CommentItem
                                    avatar={`${process.env.PUBLIC_URL}/assets/img/films/movies02.jpg`}
                                    name="SOTN"
                                    content="Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Sint,
                                fugiat."
                                />
                            </div>

                            <div className="c-paginate u-flex u-a-center u-between">
                                <p>Previous</p>
                                <ul className="u-flex u-a-center">
                                    <li className="is-current">1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>...</li>
                                    <li>99</li>
                                </ul>
                                <p>Next</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Detail;
