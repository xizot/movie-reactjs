import React from "react";
import { Link } from "react-router-dom";
function Recovery() {
    return (
        <>
            <div className="login">
                <div className="c-overlayer"> </div>
                <div className="login__content">
                    <div className="c-form">
                        <h3 className="c-form__title">Recovery Password</h3>
                        <form action="">
                            <div className="c-form__group">
                                <label className="c-form__label">
                                    Password
                                </label>
                                <input
                                    className="c-form__input"
                                    type="text"
                                />
                            </div>
                            <div className="c-form__group">
                                <label className="c-form__label">
                                    Re-password
                                </label>
                                <input
                                    className="c-form__input"
                                    type="text"
                                />
                            </div>                            
                            <div className="c-form__actions">
                                <button
                                    className="c-btn c-btn--primary"
                                    type="button"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Recovery;
