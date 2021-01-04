import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { login, logout } from './../actions/user.action';
import { useDispatch } from 'react-redux';
import FormError from './FormError';
import { validateUsernameLogin, validatePassword } from '../helper/validator'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispath = useDispatch();
    const [errorUsername, setErrorUsername] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    const [errorServer, setErrorServer] = useState('');

    const handleLogin = () => {
        if(!errorUsername && !errorPassword && username !== '') {
            dispath(login(username, password));
        }
    };
    const onKeyPress = (e) => {
        if(e.which === 13) {
            handleLogin()
        }
    }
    const handleUsername = (e) => {
        let value = e.target.value;
        if (value.length >= 0) {
            setUsername(value);
            if(validateUsernameLogin(value) === true) {
                setErrorUsername(false)
            }
            else {
                setErrorUsername(true)
            }
        }
    };
    const handlePassword = (e) => {
        let value = e.target.value;
        if (value.length >= 0) {
            setPassword(value);
            if(validatePassword(value) === true) {
                setErrorPassword(false)
            }
            else {
                setErrorPassword(true)
            }
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
                                    onKeyPress={(e)=> onKeyPress(e)}
                                    onChange={(e) => handleUsername(e)}
                                    required
                                />
                                <label className='c-form__label'>
                                    Username
                                </label>
                            </div>
                            { errorUsername && (
                                <FormError text='Username or email must be at least 3 characters long' />
                            )}
                            <div className='c-form__group'>
                                <input
                                    className='c-form__input'
                                    type='password'
                                    value={password}
                                    autoComplete='new-password'
                                    onKeyPress={(e)=> onKeyPress(e)}

                                    onChange={(e) => handlePassword(e)}
                                    required
                                />
                                <label className='c-form__label'>
                                    Password
                                </label>
                            </div>
                            { errorPassword && (
                                <FormError text='Password must be at least 8 characters long.' />
                            )}
                            { errorServer !== '' && (
                                    <FormError text= {errorServer} />
                            )}
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
