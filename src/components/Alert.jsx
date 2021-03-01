import React, { useState } from "react";

function Alert({ msg, type = "" }) {
    const [isHide, setIsHide] = useState(false);
    const handleClose = () => {
        setIsHide(true);
    };
    setTimeout(() => {
        setIsHide(true);
    }, 5000);
    return (
        <div className={`c-alert ${type} ${!isHide ? "is-show" : ""}`}>
            {msg}
            <span className="c-alert__close" onClick={() => handleClose()}>
                &#10006;
            </span>
        </div>
    );
}

export default Alert;
