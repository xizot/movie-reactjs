import { CaretRightOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'

function Episode({index,ep,image,content = "No content"}) {
    return (
        <Link to="/" className="c-popup__item u-flex">
            <div className="c-popup__item__left u-flex u-a-center">
                <div className="c-popup__item__ep">{index}</div>
                <div className="c-popup__item__image">
                    <p to ="/" className="c-btn--play">
                        <CaretRightOutlined />
                    </p>
                    <img src={image} alt=""/>
                </div>
            </div>
            <div className="c-popup__item__right">
                <h4 className="c-title3">Ep {ep}</h4>
                <div className="c-popup__item__content">
                    {content}
                </div>
            </div>
        </Link>
    )
}

export default Episode
