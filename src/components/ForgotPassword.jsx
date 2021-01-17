import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector  } from 'react-redux';
import { recoveryEmail } from './../actions/forgot.action';
import { validateEmail } from '../helper/validator'
import FormError from './FormError';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const dispath = useDispatch();
    const [errorEmail, setErrorEmail] = useState(false);

    const isForgot = useSelector((state) => state.forgot.sendRecovery);
    console.log(isForgot) 
    console.log("isForgot") 
    const handleSend = () => {
        if(!errorEmail && email !== '') {
            dispath(recoveryEmail(email));
        }
    };
    const onKeyPress = (e) => {
         handleSend();
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
    return (
        <>
        {console.log("-------------")}
        {console.log(isForgot)}
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
                        { 
                            // !isForgot && (
                            // <h3 className="c-form__text">
                            //     Please wait while we sending reset password to your email...
                            // </h3>) 
                        }
                        {
                            isForgot && (
                                <h3 className="c-form__text">
                            Email was send successful, Click the link on email to reset password !
                            </h3>) 
                        }                       
                        { }
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForgotPassword;
