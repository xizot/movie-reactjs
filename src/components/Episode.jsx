import { CaretRightOutlined } from '@ant-design/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { openWatch } from '../actions/watchActions';

function Episode({ ID, index, ep, image, content = 'No content' }) {
    const dispatch = useDispatch();
    const handleWatch = (e) => {
        dispatch(openWatch());
    };

    return (
        <Link
            to={`/movie/${ID}?watch&ep=${ep}`}
            className='c-popup__item u-flex'
            onClick={(e) => handleWatch(e)}
        >
            <div className='c-popup__item__left u-flex u-a-center'>
                <div className='c-popup__item__ep'>{index}</div>
                <div className='c-popup__item__image'>
                    <p className='c-btn--play'>
                        <CaretRightOutlined />
                    </p>
                    <img src={image} alt='' />
                </div>
            </div>
            <div className='c-popup__item__right'>
                <h4 className='c-title3'>Ep {ep}</h4>
                <div className='c-popup__item__content'>{content}</div>
            </div>
        </Link>
    );
}

export default Episode;
