import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { register } from "./../actions/authen";
import { useDispatch } from "react-redux";
function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispath = useDispatch();

    const handleRegister = () => {
        let newDateOfBirth = dateOfBirth //need format to DD-MM-YYYY
        dispath(register(username, displayName, email, password, confirmPassword, dateOfBirth));
    };

    const handleUsername = (e) => {
        let value = e.target.value;
        if (value.length >= 0) {
            setUsername(value);
        }
    };
    const handleEmail = (e) => {
        let value = e.target.value;
        if (value.length >= 0) {
            setEmail(value);
        }
    };
    const handleDisplayName = (e) => {
        let value = e.target.value;
        if (value.length >= 0) {
            setDisplayName(value);
        }
    };
    const handleDateOfBirth = (e) => {
        let value = e.target.value;
        if (value.length >= 0) {
            setDateOfBirth(value);
        }
    };
    const handlePassword = (e) => {
        let value = e.target.value;
        if (value.length >= 0) {
            setPassword(value);
        }
    };
    const handleConfirmPassword = (e) => {
        let value = e.target.value;
        if (value.length >= 0) {
            setConfirmPassword(value);
        }
    };

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
            <div className="register">
                <div className="c-overlayer"> </div>
                <div className="register__content">
                    <div className="c-form">
                        <h3 className="c-form__title">Register</h3>
                        <form action="">
                            <div className="c-form__group">
                                <label className="c-form__label">
                                    Username
                                </label>
                                <input
                                    className="c-form__input"
                                    type="text"
                                    value={username}
                                    onChange={(e) => handleUsername(e)}
                                />
                            </div>
                            <div className='c-form__warning'> ✤ Username must be alphanumeric, between 3 and 32 characters long </div>
                            <div className="c-form__group">
                                <label className="c-form__label">Email</label>
                                <input
                                    className="c-form__input"
                                    type="email"
                                    value={email}
                                    onChange={(e) => handleEmail(e)} />
                            </div>
                            <div className='c-form__warning'> ✤ Email must be valid</div>
                            <div className='c-form__group'>
                                <label className='c-form__label'>
                                    Display name
                                </label>
                                <input
                                    className='c-form__input'
                                    type='text'
                                    value={displayName}
                                    onChange={(e) => handleDisplayName(e)}
                                />
                            </div>
                            <div className='c-form__warning'> ✤ Display name must be less than 32 characters long</div>
                            <div className="c-form__group is-focus">
                                <label className="c-form__label">
                                    Birthday
                                </label>
                                <input
                                    className="c-form__input_date"
                                    type="date"
                                    min="1920-01-01"
                                    max="2021-12-12"
                                    value={dateOfBirth}
                                    onChange={(e) => handleDateOfBirth(e)}
                                />
                            </div>
                            <div className='c-form__warning'> ✤ Date of birth must not be after the current date</div>
                            <div className="c-form__group">
                                <label className="c-form__label">
                                    Password
                                </label>
                                <input
                                    className="c-form__input"
                                    autoComplete="new-password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => handlePassword(e)}
                                />
                            </div>
                            <div className='c-form__warning'> ✤ Password must be between 8 and 128 characters long</div>
                            <div className="c-form__group">
                                <label className="c-form__label">
                                    Retype password
                                </label>
                                <input
                                    className="c-form__input"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => handleConfirmPassword(e)}
                                />
                            </div>
                            <div className='c-form__warning'> ✤ Passwords and confirm passwords do not match</div>
                            <div className="c-form__actions">
                                <button
                                    className="c-btn c-btn--primary"
                                    type="button"
                                    onClick={() => handleRegister()}
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                        <div className="c-form__below">
                            <Link to="/login">Already have a account?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
