import React from 'react';
function InfoUser() {
    return (
        <div className='infouser'>
            <div className='c-overlayer'> </div>
            <div className='infouser__content'>
                <div className='content_form'>
                    <div className='title_form'>
                        <div className='title_form__left'>
                            <p className='content_form__title'>
                                Your Profile
                            </p>
                            <h5 className='content_form__son'>
                                Edit your name, avatar, etc..
                            </h5>
                        </div>
                        <div className='title_form__right'>
                            <button className='x-btn c-btn' type='button'>
                                <p>&#10006;</p>
                                <span>DISCARD CHANGES</span>
                            </button>
                        </div>
                    </div>
                    <div className='index_form'>                       
                        <div className='infouser__left'>
                            <div className="infouser__img">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/img/avata.jpg`}
                                    alt=''
                                />
                                <div className="is-hover">
                                    <label  class="is-hover__handle" htmlFor="upload-avatar">Upload Avatar</label>
                                    <span class="is-hover__handle" >
                                        Delete Avatar
                                    </span>

                                    <input
                                    type='file'
                                    name=''
                                    id='upload-avatar'
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    />
                                </div>
                            </div>
                            
                        </div>
                        <div className='infouser__right'>
                            <div className='c-form'>
                                <form action=''>
                                    <div className='c-form__group'>
                                        <input
                                            className='c-form__input'
                                            type='text'
                                            required
                                        />
                                        <label className='c-form__label'>
                                            USERNAME
                                        </label>
                                    </div>
                                    <div className='c-form__group'>
                                        <input
                                            className='c-form__input'
                                            type='text'
                                            required
                                        />
                                        <label className='c-form__label'>
                                            NAME
                                        </label>
                                    </div>
                                    <div className='c-form__group'>
                                        <input
                                            className='c-form__input'
                                            type='text'
                                            required
                                        />
                                        <label className='c-form__label'>
                                            EMAIL
                                        </label>
                                    </div>

                                    <div className='c-form__group is-focus'>
                                        <input
                                            className='c-form__input_date'
                                            type='date'
                                            min='1920-01-01'
                                            max='2021-12-12'
                                            required
                                        />
                                        <label className='c-form__label'>
                                            BIRTHDAY
                                        </label>
                                    </div>
                                    <div className='c-form__group'>
                                        <input
                                            className='c-form__input'
                                            autoComplete='new-password'
                                            type='password'
                                            required
                                        />
                                        <label className='c-form__label'>
                                            PASSWORD
                                        </label>
                                    </div>
                                    <div className='c-form__group'>
                                        <input
                                            className='c-form__input'
                                            type='password'
                                            required
                                        />
                                        <label className='c-form__label'>
                                            RE-PASSWORD
                                        </label>
                                    </div>
                                    <button
                                        className='c-btn c-btn'
                                        type='button'
                                    >
                                        SAVE CHANGES
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default InfoUser;
