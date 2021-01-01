import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { login, logout } from './../actions/user.action';
import { useDispatch } from 'react-redux';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispath = useDispatch();

    const handleLogin = () => {
        dispath(login(username, password));
    };

    const handleUsername = (e) => {
        let value = e.target.value;
        if (value.length >= 0) {
            setUsername(value);
        }
    };
    const handlePassword = (e) => {
        let value = e.target.value;
        if (value.length >= 0) {
            setPassword(value);
        }
    };
    useEffect(() => {
        dispath(logout());
    }, [dispath]);
    return (
        <>
            <div className='login'>
                <div className='c-overlayer'> </div>
                <div className='login__content'>
                    <div className='c-form'>
                        <h3 className='c-form__title'>Login</h3>
                        <form action=''>
                            <div className='c-form__group'>
                                <input
                                    className='c-form__input'
                                    type='text'
                                    value={username}
                                    onChange={(e) => handleUsername(e)}
                                    required
                                />
                                <label className='c-form__label'>
                                    Username
                                </label>
                            </div>
                            <div className='c-form__group'>
                                <input
                                    className='c-form__input'
                                    type='password'
                                    value={password}
                                    autoComplete='new-password'
                                    onChange={(e) => handlePassword(e)}
                                    required
                                />
                                <label className='c-form__label'>
                                    Password
                                </label>
                            </div>
                            <div className='c-form__actions'>
                                <button
                                    className='c-btn c-btn--primary'
                                    type='button'
                                    onClick={() => handleLogin()}
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className='c-form__below'>
                            <Link to='/forgotpassword'>Forgot password?</Link>
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
