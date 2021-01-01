import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { logout, register } from './../actions/user.action';
import { useDispatch } from 'react-redux';
import FormError from './FormError';
function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispath = useDispatch();
    const [errorValidator, setErrorValidator] = useState({
        confirmPassword: false,
        username: false,
        name: false,
        email: false,
        password: false,
        birth: false,
    });

    //this function should be in HELPERS PUBLIC
    const convertDate = (YYYYMMDD) => {
        let year = YYYYMMDD[0] + YYYYMMDD[1] + YYYYMMDD[2] + YYYYMMDD[3];
        let month = YYYYMMDD[5] + YYYYMMDD[6];
        let day = YYYYMMDD[8] + YYYYMMDD[9];
        return day + '-' + month + '-' + year;
    };

    const handleRegister = () => {
        let newDateOfBirth = convertDate(dateOfBirth);
        // please check before
        setErrorValidator({ ...errorValidator });
        //need format to DD-MM-YYYY
        dispath(
            register(
                username,
                displayName,
                email,
                password,
                confirmPassword,
                newDateOfBirth
            )
        );
    };

    const handleUsername = (e) => {
        let value = e.target.value;
        if (value.length >= 0) {
            setUsername(value);
        }
    };
    const handleEmail = (e) => {
        let value = e.target.value;
        if (value.length >= 0) {
            setEmail(value);
        }
    };
    const handleDisplayName = (e) => {
        let value = e.target.value;
        if (value.length >= 0) {
            setDisplayName(value);
        }
    };
    const handleDateOfBirth = (e) => {
        let value = e.target.value;
        if (value.length >= 0) {
            setDateOfBirth(value);
        }
    };
    const handlePassword = (e) => {
        let value = e.target.value;
        if (value.length >= 0) {
            setPassword(value);
        }
    };
    const handleConfirmPassword = (e) => {
        let value = e.target.value;
        if (value.length >= 0) {
            setConfirmPassword(value);
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
                                    required
                                />
                                <label className='c-form__label'>
                                    Username
                                </label>
                            </div>
                            {errorValidator && errorValidator.username && (
                                <FormError text='Username must be alphanumeric, between 3 and 32 characters long' />
                            )}
                            <div className='c-form__group'>
                                <input
                                    className='c-form__input'
                                    type='email'
                                    value={email}
                                    onChange={(e) => handleEmail(e)}
                                    required
                                />
                                <label className='c-form__label'>Email</label>
                            </div>
                            {errorValidator && errorValidator.email && (
                                <FormError text='Email must be valid' />
                            )}
                            <div className='c-form__group'>
                                <input
                                    className='c-form__input'
                                    type='text'
                                    value={displayName}
                                    onChange={(e) => handleDisplayName(e)}
                                    required
                                />
                                <label className='c-form__label'>
                                    Display name
                                </label>
                            </div>
                            {errorValidator && errorValidator.name && (
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
                                    required
                                />
                                <label className='c-form__label'>
                                    Birthday
                                </label>
                            </div>
                            {errorValidator && errorValidator.birth && (
                                <FormError text='Date of birth must not be after the current date' />
                            )}
                            <div className='c-form__group'>
                                <input
                                    className='c-form__input'
                                    autoComplete='new-password'
                                    type='password'
                                    value={password}
                                    onChange={(e) => handlePassword(e)}
                                    required
                                />
                                <label className='c-form__label'>
                                    Password
                                </label>
                            </div>
                            {errorValidator && errorValidator.password && (
                                <FormError text='Password must be between 8 and 128 characters long' />
                            )}

                            <div className='c-form__group'>
                                <input
                                    className='c-form__input'
                                    type='password'
                                    value={confirmPassword}
                                    onChange={(e) => handleConfirmPassword(e)}
                                    required
                                />
                                <label className='c-form__label'>
                                    Retype password
                                </label>
                            </div>

                            {errorValidator &&
                                errorValidator.confirmPassword && (
                                    <FormError text='Passwords and confirm passwords do not match' />
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
