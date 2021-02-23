import {
    FacebookOutlined,
    GithubOutlined,
    InstagramOutlined,
} from "@ant-design/icons";
import React from "react";

function AboutItem({
    name,
    mail,
    imgSrc,
    position,
    facebookLink,
    instagramLink,
    githubLink,
}) {
    return (
        <div>
            <div className="c-about-item">
                <div className="c-about-item__img">
                    <img src={imgSrc} alt="" />
                    <span className="c-about-item__circle"></span>
                </div>
                <h3 className="c-about-item__name">{name}</h3>
                <p className="c-about-item__mail">{mail}</p>
                <div className="c-about-item__content">
                    <div className="c-about-item__info">
                        <div className="c-about-item__info__img">
                            <img src={imgSrc} alt="" />
                        </div>
                        <div className="c-about-item__info__position">
                            <h3 className="c-about-item__name">{name}</h3>
                            <p className="c-about-item__mail">{position}</p>
                        </div>
                    </div>
                    <div className="c-about-item__socials">
                        <a
                            href={`https://www.facebook.com/${facebookLink}`}
                            target="_blank"
                            rel="noreferrer"
                            className="c-about-item__icon c-about-item__icon--facebook"
                        >
                            <FacebookOutlined />
                        </a>
                        <a
                            href={`https://www.facebook.com/${githubLink}`}
                            target="_blank"
                            rel="noreferrer"
                            className="c-about-item__icon c-about-item__icon--github"
                        >
                            <GithubOutlined />
                        </a>
                        <a
                            href={`https://www.facebook.com/${instagramLink}`}
                            target="_blank"
                            rel="noreferrer"
                            className="c-about-item__icon c-about-item__icon--instagram"
                        >
                            <InstagramOutlined />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutItem;
