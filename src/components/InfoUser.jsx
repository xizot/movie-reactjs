import React from "react";
function InfoUser() {
    return (
        <div className="infouser">
            <div className="c-overlayer"> </div>
            <div className="infouser__content">
            <div className='c-form'>
                <h3 className='c-form__title'>Personal Information</h3>
                <form action=''>
                    <div className='c-form__group'>
                        <input
                            className='c-form__input'
                            type='text'
                            required
                        />
                        <label className='c-form__label'>
                            Username
                        </label>
                    </div>
                    <div className='c-form__group'>
                        <input
                            className='c-form__input'
                            type='email'
                            required
                        />
                        <label className='c-form__label'>Email</label>
                    </div>
                    <div className='c-form__group'>
                        <input
                            className='c-form__input'
                            type='text'
                            required
                        />
                        <label className='c-form__label'>
                            Display name
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
                            Birthday
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
                            Password
                        </label>
                    </div>

                    <div className='c-form__group'>
                        <input
                            className='c-form__input'
                            type='password'
                            required
                        />
                        <label className='c-form__label'>
                            Retype password
                        </label>
                    </div>
                    <div className='c-form__actions'>
                        <button
                            className='c-btn c-btn--primary'
                            type='button'
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
}
export default InfoUser;
