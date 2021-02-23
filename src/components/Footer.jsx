import {
    FacebookOutlined,
    GooglePlusOutlined,
    InstagramOutlined,
    TwitterOutlined,
} from "@ant-design/icons";
import React from "react";

function Footer() {
    return (
        <footer className="c-footer footer ">
            <div className="p-footer ">
                <div className="l-container">
                    <div className="p-footer__top u-flex u-between u-a-center">
                        <a href="/" className="p-footer__logo">
                            <img
                                src="https://www.iconpacks.net/icons/1/free-movie-icon-850-thumb.png"
                                alt=""
                            />
                        </a>
                        <div className="p-footer__cgnav u-flex u-a-center">
                            <a href="/" className="p-footer__socials">
                                <FacebookOutlined />
                                <p>Facebook</p>
                            </a>
                            <a href="/" className="p-footer__socials">
                                <InstagramOutlined />
                                <p>Instagram</p>
                            </a>
                            <a href="/" className="p-footer__socials">
                                <TwitterOutlined />
                                <p>Twitter</p>
                            </a>
                            <a href="/" className="p-footer__socials">
                                <GooglePlusOutlined />
                                <p>Google</p>
                            </a>
                        </div>
                    </div>
                    <div className="p-footer__bottom row">
                        <div className="p-footer__item col-xs-12 col-lg-4">
                            <h3>Movie Categories</h3>
                            <ul className="p-footer__breadcrumb">
                                <li>
                                    <a href="/">Action</a>
                                </li>
                                <li>
                                    <a href="/">Adventure</a>
                                </li>
                                <li>
                                    <a href="/">Animation</a>
                                </li>
                                <li>
                                    <a href="/">Comedy</a>
                                </li>
                                <li>
                                    <a href="/">Crime</a>
                                </li>
                            </ul>
                        </div>
                        <div className="p-footer__item col-xs-12 col-lg-4">
                            <h3>TV Series</h3>
                            <ul className="p-footer__breadcrumb">
                                <li>
                                    <a href="/">Valentine Day</a>
                                </li>
                                <li>
                                    <a href="/">Underrated Comedies</a>
                                </li>
                                <li>
                                    <a href="/">Scary TV Series</a>
                                </li>
                                <li>
                                    <a href="/">Best 2018 Documentaries</a>
                                </li>
                                <li>
                                    <a href="/">classNameic Shows</a>
                                </li>
                            </ul>
                        </div>
                        <div className="p-footer__item col-xs-12 col-lg-4">
                            <h3>Support</h3>
                            <ul className="p-footer__breadcrumb">
                                <li>
                                    <a href="/account">My Account</a>
                                </li>
                                <li>
                                    <a href="/about">About Us</a>
                                </li>
                                <li>
                                    <a href="/">FAQ</a>
                                </li>
                                <li>
                                    <a href="/">Help Center</a>
                                </li>
                                <li>
                                    <a href="/">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="p-footer__copyright">
                    Copyright © 2020, HAMBURGER. All Rights Reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;
