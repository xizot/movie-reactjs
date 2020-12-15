import { DislikeOutlined, LikeOutlined, PlusOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'

function Detail({title,cat,description}) {
    return (
        <>
            <section className="p-detail">
                <div className="p-detail1">
                    <div className="l-container">
                        <div className="p-detail1__content">
                            <div className="row row-reverse">
                                <div className="col-sm-12 col-lg-8 p-detail1__left">
                                    <h3 className="c-title1">
                                        {title}
                                    </h3>
                                    <div className="p-detail1__cat">
                                        <p className="c-title4">Genre:</p>
                                        {cat.length && cat.map(item=>(
                                            <Link key={item} to={`/category/${item}`}>{item} </Link>
                                        ))}
                                    </div>
                                    <p className="p-detail1__des c-paragraph">
                                        {description}
                                    </p>
                                
                                    <div className="p-detail1__action ">
                                        <Link to="" className="c-icon is-hover">
                                            <PlusOutlined className="c-icon--plus"/>
                                            <p>Add To Favourite</p>
                                        </Link>
                                        <Link to="" className="c-icon"><LikeOutlined className="c-icon--like" /></Link>
                                        <Link to="" className="c-icon"><DislikeOutlined className="c-icon--dislike" /></Link>
                                        <span className="p-detail1__txt">99% liked this movie</span>
                                    </div>
                                    <Link to="" className="c-btn c-btn--primary">Play</Link>
                                </div>
                               
                                <div className="col-sm-12 col-lg-4 p-detail1__right">
                                    <div className="gutter">
                                        <div className="p-detail1__image">
                                            <img src={`${process.env.PUBLIC_URL}/assets/img/films/movies02.jpg`} alt=""/>
                                        </div>
                                        <span className="p-detail1__item"><b>Actor:</b> SOTN </span>
                                        <span className="p-detail1__item"><b>Drirector:</b> SOTN </span>
                                        <span className="p-detail1__item"><b>Year:</b> SOTN </span>
                                        <span className="p-detail1__item"><b>Actor:</b> SOTN </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-detail2">
                    <video src="https://storage.whitefoo.workers.dev/Encodes/Mama_2013_1080p.mp4" poster={`${process.env.PUBLIC_URL}/assets/img/films/movies07.png`} preload = "true" autoPlay loop muted playsInline></video>
                </div>
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
                            <div className="p-detail3__paginate u-flex u-a-center u-between">
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
