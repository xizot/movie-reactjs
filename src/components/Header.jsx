import React, { useEffect } from 'react'
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import $ from "jquery";
import { Link } from 'react-router-dom';
function Header({ isDark = null }) {
    useEffect(() => {
        $('.js-bars').click(function (e) {
            e.preventDefault()
            $(this).parent().toggleClass('is-open')
        });
        $('.js-blank').click(function (e) {
            e.preventDefault();
            $('.c-menusp').removeClass('is-open')
        });
    }, [])
    return (
        <header className="c-header">
            <div className={isDark ? "p-header js-header is-dark-2" : "p-header js-header "}>
                <div className="p-header__content u-flex u-a-center u-between">
                    <Link to="/" className="p-header__logo">
                        <img src="https://themezinho.net/digiflex/images/logo.png" alt="" />
                    </Link>
                    <ul className="p-header__cgnav u-flex">
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/movie">MOVIES</Link>
                        </li>
                        <li>
                            <Link to="/tv">TV SHOWS</Link>
                        </li>
                        <li>
                            <Link to="/tips">ABOUT</Link>
                        </li>
                    </ul>
                    <div className="p-header__actions u-flex u-a-center">
                        <Link to="/" className="p-header__search">
                            <SearchOutlined />
                        </Link>
                        <Link to="/account" className="p-header__account u-flex u-a-center ">
                            <p>ACCOUNT</p>
                            <div className="icon-circle">
                                <UserOutlined />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="c-menusp">
                    <div className="c-menusp__controller js-bars">
                        <span className="c-line c-line1"></span>
                        <span className="c-line c-line2"></span>
                    </div>
                    <div className="c-menusp__content">
                        <div className="c-menusp__blank js-blank"></div>
                        <div className="c-menusp__sidebar">
                            <div className="c-menusp__search">
                                <SearchOutlined />
                                <input type="text" placeholder="Films, Actors" />
                            </div>
                            <ul className="c-menusp__cgnav">
                                <li>
                                    <Link to="/">HOME</Link>
                                </li>
                                <li>
                                    <Link to="/">MOVIES</Link>
                                </li>
                                <li>
                                    <Link to="/">TV SHOWS</Link>
                                </li>
                                <li>
                                    <Link to="/">ABOUT</Link>
                                </li>
                            </ul>
                            <div className="c-menusp__actions">
                                <Link to="/login" className="p-header__search">
                                    LOGIN
                                </Link>
                                <Link to="/register" className="p-header__account u-flex u-a-center ">
                                    SIGN UP
                                </Link>
                            </div>
                            <div className="c-menusp__footer u-flex u-a-center">
                                <Link to="/">
                                    <img src="./assets/img/icons/instagram@2x.png" alt="" />
                                </Link>
                                <Link to="/">
                                    <img src="./assets/img/icons/instagram@2x.png" alt="" />
                                </Link>
                                <p>@hambuger </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
