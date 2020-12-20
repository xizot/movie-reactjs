import React, { useEffect } from 'react'
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import $ from "jquery";
function Header({ isDark = null }) {
    useEffect(() => {
        $('.js-bars').click(function (e) {
            e.preventDefault();


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
                    <a href="/" className="p-header__logo">
                        <img src="https://themezinho.net/digiflex/images/logo.png" alt="" />
                    </a>
                    <ul className="p-header__cgnav u-flex">
                        <li>
                            <a href="/">HOME</a>
                        </li>
                        <li>
                            <a href="/movie">MOVIES</a>
                        </li>
                        <li>
                            <a href="/tv">TV SHOWS</a>
                        </li>
                        <li>
                            <a href="/tips">ABOUT</a>
                        </li>
                    </ul>
                    <div className="p-header__actions u-flex u-a-center">
                        <a href="/" className="p-header__search">
                            <SearchOutlined />
                        </a>
                        <a href="/account" className="p-header__account u-flex u-a-center ">
                            <p>ACCOUNT</p>
                            <div className="icon-circle">
                                <UserOutlined />
                            </div>
                        </a>
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
                                    <a href="/">HOME</a>
                                </li>
                                <li>
                                    <a href="/">MOVIES</a>
                                </li>
                                <li>
                                    <a href="/">TV SHOWS</a>
                                </li>
                                <li>
                                    <a href="/">ABOUT</a>
                                </li>
                            </ul>
                            <div className="c-menusp__actions">
                                <a href="/" className="p-header__search">
                                    LOGIN
                                </a>
                                <a href="/register" className="p-header__account u-flex u-a-center ">
                                    SIGN UP
                                </a>
                            </div>
                            <div className="c-menusp__footer u-flex u-a-center">
                                <a href="/">
                                    <img src="./assets/img/icons/instagram@2x.png" alt="" />
                                </a>
                                <a href="/">
                                    <img src="./assets/img/icons/instagram@2x.png" alt="" />
                                </a>
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
