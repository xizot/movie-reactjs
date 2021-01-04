import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { recoveryEmail } from './../actions/forgot.action';
import { validateEmail } from '../helper/validator'
import queryString from 'query-string';
import FormError from './FormError';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const dispath = useDispatch();
    const [errorEmail, setErrorEmail] = useState(false);

    const handleSend = () => {
        if(!errorEmail) {
            dispath(recoveryEmail(email));
        }
    };
    const onKeyPress = (e) => {
        if (e.which === 13) {
            handleSend();
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
    const getCode = () => {
        const val = queryString.parse(window.location.search);
        return val.code; // CurrentURL?code=value    return value
        // alert(val.code)
    };
    useEffect(() => {
        let code = getCode();
        if (code && code.length > 0) {
            console.log('email confirm');
        }
    }, [dispath]);
    return (
        <>
            <div className='login'>
                <div className='c-overlayer'> </div>
                <div className='login__content'>
                    <div className='c-form'>
                        <h3 className='c-form__title'>Forgot Password</h3>
                        <form action=''>
                            <div className='c-form__group'>
                                                    
                                <input
                                    className='c-form__input'
                                    type='text'
                                    value={email}
                                    onKeyPress={(e) => onKeyPress(e)}
                                    onChange={(e) => handleEmail(e)}
                                    required
                                />
                                 <label className='c-form__label'>Email
                                </label>      
                            </div>
                            { errorEmail && (
                                <FormError text='Email must be valid' />
                            )}
                            <div className='c-form__actions'>
                                <button
                                    className='c-btn c-btn--primary'
                                    type='button'
                                    onClick={() => handleSend()}
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForgotPassword;
