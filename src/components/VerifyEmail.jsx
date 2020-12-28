import React, { useEffect, useState } from "react";

function VerifyEmail() {
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
