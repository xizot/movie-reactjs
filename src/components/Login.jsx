import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
function Login() {
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
            <div className='login'>
                <div className='c-overlayer'> </div>
                <div className='login__content'>
                    <div className='c-form'>
                        <h3 className='c-form__title'>Login</h3>
                        <form action=''>
                            <div className='c-form__group'>
                                <label className='c-form__label'>
                                    Username
                                </label>
                                <input className='c-form__input' type='text' />
                            </div>
                            <div className='c-form__group'>
                                <label className='c-form__label'>
                                    Password
                                </label>
                                <input className='c-form__input' type='password' />
                            </div>
                            <div className='c-form__actions'>
                                <button
                                    className='c-btn c-btn--primary'
                                    type='button'
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className='c-form__below'>
                            <Link to='/register'>Need help?</Link>
                        </div>
                        <div className='c-form__below'>
                            <Link to='/register'>Need an account?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
