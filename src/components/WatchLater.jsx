import React from "react"; //, { useEffect }

function VerifyEmail() {
    // const dispath = useDispatch();

    // useEffect(() => {
    // }, [dispath]);
    let rows = [];
    for (let i = 0 ; i < 10; i ++) {
        rows.push(
        <div className = "c-wl-form__group">
            <h2 className="c-wl-form__label">
                item {i}
            </h2>
        </div>
    );}
    return (
        <>
            <div className="register">
                <div className="register__content">
                    <div className="c-wl-form">
                        <h2 className="c-wl-form__title c-wl-form__title-mid">
                            My watch later list
                        </h2>
                            {rows}
                    </div>
                </div>
            </div>
        </>
    );
}

export default VerifyEmail;
