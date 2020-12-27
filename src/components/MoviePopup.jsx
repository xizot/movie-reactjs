import React, { useEffect } from 'react';
import { CloseCircleFilled } from '@ant-design/icons';
import Episode from './Episode';
import { useDispatch, useSelector } from 'react-redux';
import { getEpisode } from '../actions/filmActions';
function MoviePopup({ ID, title, handlePopup }) {
    const dispatch = useDispatch();
    const listEpisode = useSelector((state) => state.film.episode);
    const focus = (e) => {
        e.stopPropagation();
    };
    useEffect(() => {
        dispatch(getEpisode(ID));
    }, [ID,dispatch]);

    return (
        <div>
            <div className='c-popup' onClick={() => handlePopup()}>
                <div className='p-popup'>
                    <div className='overlayer'></div>
                    <div className='p-popup__content' onClick={(e) => focus(e)}>
                        <div className='c-close' onClick={() => handlePopup()}>
                            <CloseCircleFilled />
                        </div>
                        <h3 className='c-title p-popup__title'>{title}</h3>
                        <h4 className='c-title4 p-popup__subtitle'>Episode</h4>
                        <div className='p-popup__episode'>
                            {listEpisode.length &&
                                listEpisode.map((item, index) => (
                                    <Episode
                                        ID={item.id}
                                        key={index}
                                        index={index}
                                        ep={item.ep}
                                        image={item.image}
                                        content={item.content}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoviePopup;
