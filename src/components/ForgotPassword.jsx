import React from "react";
//import { Link } from "react-router-dom";
function ForgotPassword() {
    return (
        <>
            <div className="login">
                <div className="c-overlayer"> </div>
                <div className="login__content">
                    <div className="c-form">
                        <h3 className="c-form__title">Forgot Password</h3>
                        <form action="">
                            <div className="c-form__group">
                                <label className="c-form__label">
                                    Email
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

export default ForgotPassword;
