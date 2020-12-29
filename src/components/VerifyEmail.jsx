import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { verifyEmail } from "./../actions/authen";
import queryString from 'query-string';

function VerifyEmail() {
    const dispath = useDispatch();

    const getCode = () => {
        const val = queryString.parse(window.location.search)
        return val.code; // CurrentURL?code=value    return value
    }
    useEffect(() => {
        let code = getCode()
        console.log("code", code)
        if (code && code.length >= 0) {
            dispath(verifyEmail(code));
        }
    }, []);

    return (
        <>
            <div className="login">
                <div className="c-overlayer"> </div>
                <div className="login__content">
                    <div className="c-form">
                        <h2 className="c-form__title c-form__title-mid">Verify Email</h2>
                        <h3 className="c-form__text">Please wait while we verifying your email...</h3>
                        <h3 className="c-form__title c-form__title-mid"></h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VerifyEmail;
