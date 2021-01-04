import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { logout, register } from './../actions/user.action';
import { useDispatch } from 'react-redux';
import { convertDateTime } from '../helper/converter'
import FormError from './FormError';
import { validateEmail, validateUsername, validateDisplayName, validateDateOfBirth, validatePassword, validateConfirmPassword } from '../helper/validator'

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispath = useDispatch();

    //can not use all with 1 state included json properties.
    const [errorUsername, setErrorUsername] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorDisplayName, setErrorDisplayName] = useState(false);
    const [errorDateOfBirth, setErrorDateOfBirth] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

    const [errorServer, setErrorServer] = useState('');

    const onKeyPress = (e) => {
        if(e.which === 13) {
            handleRegister()
        }
    }

    const handleRegister = () => {
        let newDateOfBirth = convertDateTime(dateOfBirth, "YYYY-MM-DD","DD-MM-YYYY");
        
        // please check before
        //setErrorValidator({ ...errorValidator });
        //if all error status are false = mean all are ok
        if(!errorUsername && !errorEmail && !errorDisplayName && !errorDateOfBirth && !errorPassword && !errorConfirmPassword) {
             dispath(
                register(
                    username,
                    displayName,
                    email,
                    password,
                    confirmPassword,
                    newDateOfBirth,
                )
            );
        }
        
    };

    const handleUsername = (e) => {
        let value = e.target.value;
        if (value.length >= 0) {
            setUsername(value);
            if(validateUsername(value) === true) {
                setErrorUsername(false)
            }
            else {
                setErrorUsername(true)
            }
        }
    };
    const handleEmail = (e) => {
        let value = e.target.value;
        if (value.length >= 0) {
            setEmail(value);
            if(validateEmail(value) === true) {
                setErrorEmail(false)
            }
            else {
                setErrorEmail(true)
            }
        }
    };
    const handleDisplayName = (e) => {
        let value = e.target.value;
        if (value.length >= 0) {
            setDisplayName(value);
            if(validateDisplayName(value) === true){
                setErrorDisplayName(false)
            }
            else {
                setErrorDisplayName(true)
            }
        }
    };
    const handleDateOfBirth = (e) => {
        let value = e.target.value;
        if (value.length >= 0) {
            setDateOfBirth(value);
            if(validateDateOfBirth(value) === true) {
                setErrorDateOfBirth(false)
            }
            else {
                setErrorDateOfBirth(true)
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
    const handleConfirmPassword = (e) => {
        let value = e.target.value;
        if (value.length >= 0) {
            setConfirmPassword(value);
            if(validateConfirmPassword(password, value) === true) {
                setErrorConfirmPassword(false)
            }
            else {
                setErrorConfirmPassword(true)
            }
        }
    };
    useEffect(() => {
        dispath(logout());
    }, [dispath]);

    return (
        <>
            <div className='register'>
                <div className='c-overlayer'> </div>
                <div className='register__content'>
                    <div className='c-form'>
                        <h3 className='c-form__title'>Register</h3>
                        <form action=''>
                            <div className='c-form__group'>
                                <input
                                    className='c-form__input'
                                    type='text'
                                    value={username}
                                    onChange={(e) => handleUsername(e)}
                                    onKeyPress={(e)=> onKeyPress(e)}
                                    required
                                />
                                <label className='c-form__label'>
                                    Username
                                </label>
                            </div>
                            { errorUsername && (
                                <FormError text='Username must be alphanumeric, between 3 and 32 characters long' />
                            )}
                            <div className='c-form__group'>
                                <input
                                    className='c-form__input'
                                    type='text'
                                    value={email}
                                    onChange={(e) => handleEmail(e)}
                                    onKeyPress={(e)=> onKeyPress(e)}
                                    required
                                />
                                <label className='c-form__label'>Email</label>
                            </div>
                            { errorEmail && (
                                <FormError text='Email must be valid' />
                            )}
                            <div className='c-form__group'>
                                <input
                                    className='c-form__input'
                                    type='text'
                                    value={displayName}
                                    onChange={(e) => handleDisplayName(e)}
                                    onKeyPress={(e)=> onKeyPress(e)}
                                    required
                                />
                                <label className='c-form__label'>
                                    Display name
                                </label>
                            </div>
                            { errorDisplayName && (
                                <FormError text='Display name must be less than 32 characters long' />
                            )}
                            <div className='c-form__group is-focus'>
                                <input
                                    className='c-form__input_date'
                                    type='date'
                                    min='1920-01-01'
                                    max='2021-12-12'
                                    value={dateOfBirth}
                                    onChange={(e) => handleDateOfBirth(e)}
                                    onKeyPress={(e)=> onKeyPress(e)}
                                    required
                                />
                                <label className='c-form__label'>
                                    Birthday
                                </label>
                            </div>
                            { errorDateOfBirth && (
                                <FormError text='Date of birth must not be after the current date' />
                            )}
                            <div className='c-form__group'>
                                <input
                                    className='c-form__input'
                                    autoComplete='new-password'
                                    type='password'
                                    value={password}
                                    onChange={(e) => handlePassword(e)}
                                    onKeyPress={(e)=> onKeyPress(e)}
                                    required
                                />
                                <label className='c-form__label'>
                                    Password
                                </label>
                            </div>
                            { errorPassword && (
                                <FormError text='Password must be between 8 and 128 characters long' />
                            )}

                            <div className='c-form__group'>
                                <input
                                    className='c-form__input'
                                    type='password'
                                    value={confirmPassword}
                                    onChange={(e) => handleConfirmPassword(e)}
                                    onKeyPress={(e)=> onKeyPress(e)}
                                    required
                                />
                                <label className='c-form__label'>
                                    Retype password
                                </label>
                            </div>

                            { errorConfirmPassword && (
                                    <FormError text='Passwords and confirm passwords do not match' />
                            )}
                            { errorServer !== '' && (
                                    <FormError text= {errorServer} />
                            )}
                            <div className='c-form__actions'>
                                <button
                                    className='c-btn c-btn--primary'
                                    type='button'
                                    onClick={() => handleRegister()}
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
