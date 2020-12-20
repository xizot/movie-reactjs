import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
function Register() {
    useEffect(() => {
        let $input = $('.c-form__input');
        $input
            .blur(function () {
                if (!$(this).val()) {
                    $(this).parent().removeClass('is-focus');
                }
            })
            .focus(function () {
                $(this).parent().addClass('is-focus');
            });
    }, []);
    return (
        <>
            <div className='register'>
                <div className='c-overlayer'></div>
                <div className='register__content'>
                    <div className='c-form'>
                        <h3 className='c-form__title'>Register</h3>
                        <form action=''>
                            <div className='c-form__group'>
                                <label className='c-form__label'>
                                    Email or username
                                </label>
                                <input className='c-form__input' type='text' />
                            </div>
                            <div className='c-form__group'>
                                <label className='c-form__label'>
                                    Email or username
                                </label>
                                <input className='c-form__input' type='text' />
                            </div>
                            <div className='c-form__group'>
                                <label className='c-form__label'>
                                    Email or username
                                </label>
                                <input className='c-form__input' type='text' />
                            </div>
                            <div className='c-form__group'>
                                <label className='c-form__label'>
                                    Email or username
                                </label>
                                <input className='c-form__input' type='text' />
                            </div>
                            <div className='c-form__group'>
                                <label className='c-form__label'>
                                    Email or username
                                </label>
                                <input className='c-form__input' type='text' />
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
                        <div className='c-form__below'>
                            <Link to='/login'>Already have a account?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
