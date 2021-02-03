import React, { useState } from "react";

function Alert({ msg, type }) {
    const [isHide, setIsHide] = useState(false);
    const handleClose = () => {
        setIsHide(true);
    };
    return (
        <div className={`c-alert ${type} ${!isHide ? "is-show" : ""}`}>
            <p>{msg}</p>
            <span className="c-alert__close" onClick={() => handleClose()}>
                &#10006;
            </span>
        </div>
    );
}

export default Alert;
