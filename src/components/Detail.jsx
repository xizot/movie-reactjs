
import React from 'react'
import { Link } from 'react-router-dom'
import Detail1 from './Detail1'
import Detail2 from './Detail2'

function Detail({ID = null}) {
    return (
        <>
            <section className="p-detail">
                <Detail1 
                    title ="The rise of KingDom"
                    cat = {["Action", "Romance"]}
                    description = "She can truly celebrate who shie is. Directed by Ryan Murphu 'The Mando' is the spectacular, big-hearted flim."
                    poster = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362"
                    actors ="SOTN"
                    directors = "SOTN"
                    year= "2022"
                    nation ="LAOs"
                />
                <Detail2 />
                <div className="p-detail3">
                    <div className="l-container">
                        <h3 className="c-title2">Comments</h3>
                        <div className="p-detail3__content">
                            <div className="p-detail3__box">
                                <textarea name="" id="" className="" placeholder="Enter your comment"></textarea>
                                <button className="c-btn c-btn--primary">POST COMMENT</button>
                            </div>
                            <div className="p-detail3__comments">
                                <div className="p-detail3__item">
                                    <div className="p-detail3__image">
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/films/movies01.jpg`} alt=""/>
                                    </div>
                                    <div className="p-detail3__info">
                                        <span className="p-detail3__name">SOTN</span>
                                        <p className="p-detail3__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, fugiat.</p>
                                    </div>
                                </div>
                                <div className="p-detail3__item">
                                    <div className="p-detail3__image">
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/films/movies02.jpg`} alt=""/>
                                    </div>
                                    <div className="p-detail3__info">
                                        <span className="p-detail3__name">SOTN</span>
                                        <p className="p-detail3__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, fugiat.</p>
                                    </div>
                                </div>
                                <div className="p-detail3__item">
                                    <div className="p-detail3__image">
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/films/movies03.jpg`} alt=""/>
                                    </div>
                                    <div className="p-detail3__info">
                                        <span className="p-detail3__name">SOTN</span>
                                        <p className="p-detail3__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, fugiat.</p>
                                    </div>
                                </div>
                                <div className="p-detail3__item">
                                    <div className="p-detail3__image">
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/films/movies07.png`} alt=""/>
                                    </div>
                                    <div className="p-detail3__info">
                                        <span className="p-detail3__name">SOTN</span>
                                        <p className="p-detail3__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, fugiat.</p>
                                    </div>
                                </div>
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
    )
}

export default Detail
