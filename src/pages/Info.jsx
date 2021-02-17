import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    PlusOutlined,
    DeleteOutlined,
    LoadingOutlined,
} from "@ant-design/icons";
import { clearError } from "../actions/error.action";
import FormError from "../components/FormError";
import { convertDateTime } from "../helper/converter";
import {
    update,
    getAvatar,
    upAvatar,
    delAvatar,
} from "../actions/infor.action";
import {
    validateEmail,
    validateUsername,
    validateDisplayName,
    validateDateOfBirth,
    validatePassword,
    validateConfirmPassword,
} from "../helper/validator";
import Loading from "../components/Loading";
import Alert from "../components/Alert";

function Info() {
    const dispath = useDispatch();
    let user = useSelector((state) => state.auth.user);
    let avatar = useSelector((state) => state.infor.urlAvatar);
    const isUploading = useSelector((state) => state.infor.isUploading);
    const isUploaded = useSelector((state) => state.infor.isUploaded);
    const isLoading = useSelector((state) => state.infor.isLoading);
    const isDeleted = useSelector((state) => state.infor.isDeleted);
    const errorServer = useSelector((state) => state.error);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [currentPassword, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    //error
    const [errorUsername, setErrorUsername] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorDisplayName, setErrorDisplayName] = useState(false);
    const [errorDateOfBirth, setErrorDateOfBirth] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
    const [errorNewPassword, setErrorNewPassword] = useState(false);

    if (!avatar) {
        console.log("handleError");
        avatar.uri = `${process.env.PUBLIC_URL}/assets/img/avata.jpg`;
    }

    const handleUpdate = () => {
        if (
            !errorUsername &&
            !errorEmail &&
            !errorDisplayName &&
            !errorDateOfBirth &&
            !errorPassword &&
            !errorConfirmPassword
        ) {
            if (
                username !== "" &&
                email !== "" &&
                displayName !== "" &&
                currentPassword !== "" &&
                confirmPassword !== "" &&
                newPassword !== ""
            ) {
                dispath(
                    update(
                        username,
                        displayName,
                        email,
                        currentPassword,
                        confirmPassword,
                        dateOfBirth,
                        newPassword
                    )
                );
            }
        }
    };
    const handleAvatar = (e) => {
        e.preventDefault();

        if (errorServer.id) {
            dispath(clearError());
        }

        var file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("image", file);
            dispath(upAvatar(formData));
        }
    };

    const handleDeleteAvatar = () => {
        if (errorServer.id) {
            dispath(clearError());
        }
        dispath(delAvatar());
    };
    const handleUsername = (e) => {
        e.preventDefault();
        if (errorServer.id) {
            dispath(clearError());
        }
        let value = e.target.value;
        setUsername((user && user.username) || "");
        if (value.length >= 0) {
            setUsername(value);
            if (validateUsername(value) === true) {
                setErrorUsername(false);
            } else {
                setErrorUsername(true);
            }
        }
    };

    const handleEmail = (e) => {
        e.preventDefault();
        if (errorServer.id) {
            dispath(clearError());
        }
        let value = e.target.value;
        setEmail((user && user.email) || "");
        if (value.length >= 0) {
            setEmail(value);
            if (validateEmail(value) === true) {
                setErrorEmail(false);
            } else {
                setErrorEmail(true);
            }
        }
    };

    const handleDisplayName = (e) => {
        e.preventDefault();
        if (errorServer.id) {
            dispath(clearError());
        }
        let value = e.target.value;
        setDisplayName((user && user.displayName) || "");
        if (value.length >= 0) {
            setDisplayName(value);
            if (validateDisplayName(value) === true) {
                setErrorDisplayName(false);
            } else {
                setErrorDisplayName(true);
            }
        }
    };

    const handleDateOfBirth = (e) => {
        if (errorServer.id) {
            dispath(clearError());
        }
        let value = e.target.value;
        setDateOfBirth((user && user.dateOfBirth) || "");
        if (value.length >= 0) {
            if (value.length === 0) value = user.dateOfBirth;
            setDateOfBirth(value);
            if (validateDateOfBirth(value)) {
                setErrorDateOfBirth(false);
            } else {
                setErrorDateOfBirth(true);
            }
        }
    };

    const handlePassword = (e) => {
        if (errorServer.id) {
            dispath(clearError());
        }
        let value = e.target.value;
        setPassword("");
        if (value.length >= 0) {
            setPassword(value);
            if (validatePassword(value) === true) {
                setErrorPassword(false);
            } else {
                setErrorPassword(true);
            }
        }
    };
    const handleConfirmPassword = (e) => {
        if (errorServer.id) {
            dispath(clearError());
        }
        let value = e.target.value;
        if (value.length >= 0) {
            setConfirmPassword(value);
            if (validateConfirmPassword(newPassword, value) === true) {
                setErrorConfirmPassword(false);
            } else {
                setErrorConfirmPassword(true);
            }
        }
    };

    const handleNewPassword = (e) => {
        if (errorServer.id) {
            dispath(clearError());
        }
        let value = e.target.value;
        setNewPassword("");
        if (value.length >= 0) {
            setNewPassword(value);
            if (validatePassword(value) === true) {
                setErrorNewPassword(false);
            } else {
                setErrorNewPassword(true);
            }
        }
    };

    useEffect(() => {
        dispath(getAvatar());
        if (user) {
            setUsername((user && user.username) || "");
            setDateOfBirth(user.dateOfBirth || "");
            setEmail(user.email || "");
            setDisplayName(user.displayName || "");
        }
    }, [dispath, user]);

    return (
        <div className="infouser">
            {isUploaded && isDeleted && (
                <Alert msg="Upload success" type="c-alert--success" />
            )}
            {isDeleted && isUploaded && (
                <Alert msg="Delete success" type="c-alert--success" />
            )}
            <Loading nameClass={isLoading ? "" : "is-fadeout"} />
            {user && (
                <>
                    <div className="c-overlayer"> </div>
                    <div className="infouser__content js-dark-here">
                        <div className="content_form">
                            <div className="title_form">
                                <div className="title_form__left">
                                    <p className="content_form__title">
                                        Your Profile
                                    </p>
                                    <h5 className="content_form__son">
                                        Edit your name, avatar, etc..
                                    </h5>
                                </div>
                                <div className="title_form__right">
                                    <button
                                        className="x-btn c-btn"
                                        type="button"
                                    >
                                        <p>&#10006;</p>
                                        <span>DISCARD CHANGES</span>
                                    </button>
                                </div>
                            </div>
                            <div className="index_form">
                                <div className="infouser__left">
                                    <div className="infouser__img">
                                        {isUploading && (
                                            <div className="infouser__loading">
                                                <LoadingOutlined />
                                            </div>
                                        )}

                                        <img
                                            src={avatar && avatar.uri}
                                            alt=""
                                        />
                                        <div className="is-hover">
                                            <label
                                                className="is-hover__handle is-hover__handle__upload"
                                                htmlFor="upload-avatar"
                                            >
                                                <PlusOutlined /> Upload Avatar
                                            </label>
                                            <button
                                                className="is-hover__handle is-hover__handle__delete"
                                                onClick={() =>
                                                    handleDeleteAvatar()
                                                }
                                            >
                                                <DeleteOutlined /> Delete Avatar
                                            </button>

                                            <input
                                                type="file"
                                                id="upload-avatar"
                                                accept="image/*"
                                                style={{ display: "none" }}
                                                onChange={(e) =>
                                                    handleAvatar(e)
                                                }
                                                onClick={(e) =>
                                                    (e.target.value = null)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="infouser__right">
                                    <div className="c-form">
                                        <form action="">
                                            <div className="c-form__group">
                                                <input
                                                    className="c-form__input"
                                                    type="text"
                                                    required
                                                    value={username}
                                                    onChange={(e) =>
                                                        handleUsername(e)
                                                    }
                                                />
                                                <label className="c-form__label">
                                                    USERNAME
                                                </label>
                                            </div>
                                            {errorUsername && (
                                                <FormError text="Username must be alphanumeric, between 3 and 32 characters long" />
                                            )}
                                            <div className="c-form__group">
                                                <input
                                                    className="c-form__input"
                                                    type="text"
                                                    name="displayName"
                                                    value={displayName}
                                                    onChange={(e) =>
                                                        handleDisplayName(e)
                                                    }
                                                    required
                                                />
                                                <label className="c-form__label">
                                                    NAME
                                                </label>
                                            </div>
                                            {errorDisplayName && (
                                                <FormError text="Display name must be less than 32 characters long" />
                                            )}
                                            <div className="c-form__group">
                                                <input
                                                    className="c-form__input"
                                                    type="text"
                                                    required
                                                    value={email}
                                                    onChange={(e) =>
                                                        handleEmail(e)
                                                    }
                                                />
                                                <label className="c-form__label">
                                                    EMAIL
                                                </label>
                                            </div>
                                            {errorEmail && (
                                                <FormError text="Email must be valid" />
                                            )}

                                            <div className="c-form__group is-focus">
                                                <input
                                                    className="c-form__input_date"
                                                    min="1920-01-01"
                                                    max="2021-12-12"
                                                    type="date"
                                                    required
                                                    value={
                                                        dateOfBirth &&
                                                        convertDateTime(
                                                            dateOfBirth,
                                                            "DD-MM-YYYY",
                                                            "YYYY-MM-DD"
                                                        )
                                                    }
                                                    onChange={(e) =>
                                                        handleDateOfBirth(e)
                                                    }
                                                />
                                                <label className="c-form__label">
                                                    BIRTHDAY
                                                </label>
                                            </div>
                                            {errorDateOfBirth && (
                                                <FormError text="Date of birth must not be after the current date" />
                                            )}

                                            <div className="c-form__group">
                                                <input
                                                    className="c-form__input"
                                                    autoComplete="new-password"
                                                    type="password"
                                                    required
                                                    value={currentPassword}
                                                    onChange={(e) =>
                                                        handlePassword(e)
                                                    }
                                                />
                                                <label className="c-form__label">
                                                    PASSWORD
                                                </label>
                                            </div>
                                            {errorPassword && (
                                                <FormError text="Password must be between 8 and 128 characters long" />
                                            )}

                                            <div className="c-form__group">
                                                <input
                                                    className="c-form__input"
                                                    autoComplete="new-password"
                                                    type="password"
                                                    required
                                                    value={newPassword}
                                                    onChange={(e) =>
                                                        handleNewPassword(e)
                                                    }
                                                />
                                                <label className="c-form__label">
                                                    NEW PASSWORD
                                                </label>
                                            </div>
                                            {errorNewPassword && (
                                                <FormError text="Password must be between 8 and 128 characters long" />
                                            )}

                                            <div className="c-form__group">
                                                <input
                                                    className="c-form__input"
                                                    type="password"
                                                    required
                                                    value={confirmPassword}
                                                    onChange={(e) =>
                                                        handleConfirmPassword(e)
                                                    }
                                                />
                                                <label className="c-form__label">
                                                    RE-PASSWORD
                                                </label>
                                            </div>
                                            {errorConfirmPassword && (
                                                <FormError text="Passwords and confirm passwords do not match" />
                                            )}
                                            <button
                                                className="c-btn c-btn"
                                                type="button"
                                                onClick={() => handleUpdate()}
                                            >
                                                SAVE CHANGES
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
export default Info;
