import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React from 'react'
import { Link } from "react-router-dom";

function Mainvisuals() {
    return (
        <div className="c-mainvisuals js-mainvisuals" data-anchor="1">
            <div className="c-mainvisuals__content u-fullheight">
                {/* <!-- ▼ Slide Controller ▼ --> */}
                <div className="c-slide__controller">
                    <div className="c-slide__prev">
                        <LeftOutlined />
                    </div>
                    <div className="c-slide__number">

                    </div>
                    <div className="c-slide__border">
                    <span></span>
                    </div>
                    <p className="c-slide__total"></p>
                    <div className="c-slide__next">
                        <RightOutlined />
                    </div>
                </div>
                {/* <!-- ▲ Slide Controller ▲ --> */}
                <div className="c-slide">
                    <div className="c-slide__item">
                        <img className="c-slide__image" src={`${process.env.PUBLIC_URL}/assets/img/mainvisual/slide01.jpg`} alt="" loading="lazy" />
                        <div className="c-slide__info">
                            <div className="l-container">
                                <span className="c-slide__label">NEW RELEASES</span>
                                <h3 className="c-slide__title">The Rise Of Kingdoms</h3>
                                <div className="c-slide__cat">
                                    <span>Romance, Action</span>
                                </div>
                                <p className="c-slide__description">
                                    She can truly celebrate who shie is. Directed by Ryan Murphu 'The Mando' is the spectacular, big-hearted flim.
                                </p>
                                <div className="c-slide__actions">
                                    <button className="c-btn c-btn--primary">PLAY TRAILER</button>
                                    <Link to="/single-movie?id=xxx" className="c-btn">PLAY FILM</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="c-slide__item">
                        <img className="c-slide__image" src={`${process.env.PUBLIC_URL}/assets/img/mainvisual/slide02.jpg`} alt="" loading="lazy" />
                        <div className="c-slide__info">
                        <div className="l-container">
                                <span className="c-slide__label">NEW RELEASES</span>
                                <h3 className="c-slide__title">The Rise Of Football</h3>
                                <div className="c-slide__cat">
                                    <span>Romance, Action</span>
                                </div>
                                <p className="c-slide__description">
                                    She can truly celebrate who shie is. Directed by Ryan Murphu 'The Mando' is the spectacular, big-hearted flim.
                                </p>
                                <div className="c-slide__actions">
                                    <button className="c-btn c-btn--primary">PLAY TRAILER</button>
                                    <Link to="/single-movie?id=xxx" className="c-btn">PLAY FILM</Link>
                                </div>
                        </div>
                        </div>
                    </div>
                    <div className="c-slide__item">
                        <img className="c-slide__image" src={`${process.env.PUBLIC_URL}/assets/img/mainvisual/slide03.jpg`} alt="" loading="lazy" />
                        <div className="c-slide__info">
                            <div className="l-container">
                                <span className="c-slide__label">NEW RELEASES</span>
                                <h3 className="c-slide__title">The Rise Of Mandou</h3>
                                <div className="c-slide__cat">
                                    <span>Romance, Action</span>
                                </div>
                                <p className="c-slide__description">
                                    She can truly celebrate who shie is. Directed by Ryan Murphu 'The Mando' is the spectacular, big-hearted flim.
                                </p>
                                <div className="c-slide__actions">
                                    <button className="c-btn c-btn--primary">PLAY TRAILER</button>
                                    <Link to="/single-movie?id=xxx" className="c-btn">PLAY FILM</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Mainvisuals
