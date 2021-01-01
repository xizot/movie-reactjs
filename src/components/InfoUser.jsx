import React from "react";
function InfoUser() {
    return (
        <div className="p-info">
            <div className="l-container">
                <div className="p-info__content">
                    <div className="p-info__left ">
                        <div className="p-info__avatar">
                            <label htmlFor="avatar">
                                <img
                                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362"
                                    alt=""
                                />
                            </label>
                        </div>
                            <div className="p-info__avatar__handle">
                                <input className="p-info__upload" type="file"  id="avatar" style={{display:"none"}}/>
                                <button className="p-info__delete">
                                    DELETE
                                </button>
                            </div>
                    </div>
                    <div className="p-info__right ">
                        <div className="c-form">
                            <form action="">
                                <div className="row">
                                    <div className="col-xs-12 col-lg-6">
                                        <div className="c-form__group">
                                            <input
                                                className="c-form__input"
                                                type="text"
                                                required
                                            />
                                            <label className="c-form__label">
                                                Username
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-lg-6">
                                        <div className="c-form__group">
                                            <input
                                                className="c-form__input"
                                                type="text"
                                                required
                                            />
                                            <label className="c-form__label">
                                                Display name
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="c-form__group">
                                    <input
                                        className="c-form__input"
                                        type="email"
                                        required
                                    />
                                    <label className="c-form__label">
                                        Email
                                    </label>
                                </div>

                                <div className="c-form__group is-focus">
                                    <input
                                        className="c-form__input_date"
                                        type="date"
                                        min="1920-01-01"
                                        max="2021-12-12"
                                        required
                                    />
                                    <label className="c-form__label">
                                        Birthday
                                    </label>
                                </div>
                                <div className="c-form__group">
                                    <input
                                        className="c-form__input"
                                        autoComplete="new-password"
                                        type="password"
                                        required
                                    />
                                    <label className="c-form__label">
                                        Password
                                    </label>
                                </div>
                                <div className="c-form__actions">
                                    <button
                                        className="c-btn c-btn--primary"
                                        type="button"
                                    >
                                        Save change
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default InfoUser;
