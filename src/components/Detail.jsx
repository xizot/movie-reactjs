import React from 'react'

function Detail({title,cat,description, }) {
    return (
        <>
            <div className="p-detail">
                <div className="p-detail1">
                    <div className="l-container">
                        <div className="p-detail1__content row">
                            <div className="col-md-12 col-lg-6">
                                <h3 className="c-title">
                                    {title}
                                </h3>
                                <span className="p-detail1__cat">
                                    {cat}
                                </span>
                                <p className="p-detail1__des">
                                    {description}
                                </p>
                            </div>
                            <div className="col-md-12 col-lg-6"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail
