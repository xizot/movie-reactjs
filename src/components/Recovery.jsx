import React, { useEffect } from "react";
import $ from "jquery";
function Recovery() {
    useEffect(() => {
        let $input = $(".c-form__input");
        $input
            .blur(function () {
                if (!$(this).val()) {
                    $(this).parent().removeClass("is-focus");
                }
            })
            .focus(function () {
                $(this).parent().addClass("is-focus");
            });
    }, []);
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
                                    New password
                                </label>
                                <input
                                    className="c-form__input"
                                    type="password"
                                />
                            </div>
                            <div className="c-form__group">
                                <label className="c-form__label">
                                    Retype new password
                                </label>
                                <input
                                    className="c-form__input"
                                    type="password"
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
