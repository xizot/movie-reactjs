import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlusOutlined , DeleteOutlined} from "@ant-design/icons";
import { clearError } from "../actions/error.action";
import { loadUser } from "../actions/user.action";
import FormError from '../components/FormError'
import { convertDateTime } from '../helper/converter';
import { validateEmail, validateUsername, validateDisplayName, validateDateOfBirth, validatePassword, validateConfirmPassword } from '../helper/validator';

function Info() {
    
    const dispath = useDispatch();
    const user = localStorage.getItem('user')
    var obj = JSON.parse(user);
    obj.dateOfBirth = convertDateTime(obj.dateOfBirth, 'DD-MM-YYYY', 'YYYY-MM-DD');

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    //error
    const [errorUsername, setErrorUsername] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorDisplayName, setErrorDisplayName] = useState(false);
    const [errorDateOfBirth, setErrorDateOfBirth] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
    
    const errorServer = useSelector((state) => state.error);

    const handleUsername = (e) => {
        if(errorServer.id){
            dispath(clearError())
        }
        let value = e.target.value;
        setUsername(obj.username)
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
        if(errorServer.id){
            dispath(clearError())
        }
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
        if(errorServer.id){
            dispath(clearError())
        }
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
        if(errorServer.id){
            dispath(clearError())
        }
        let value = e.target.value;
        if (value.length >= 0) {
            if(value.length === 0) value = obj.dateOfBirth;
            setDateOfBirth(value);
            if(validateDateOfBirth(value)) {
                setErrorDateOfBirth(false)
            }
            else {
                setErrorDateOfBirth(true)
            }
        }
    };

    const handlePassword = (e) => {
        if(errorServer.id){
            dispath(clearError())
        }
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
        if(errorServer.id){
            dispath(clearError())
        }
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
    

	useEffect(
		() => {
			dispath(loadUser());
		},
		[dispath]
	);

    // let newDateOfBirth = convertDateTime(dateOfBirth, "YYYY-MM-DD","DD-MM-YYYY");
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
                                    <label  className="is-hover__handle is-hover__handle__upload" htmlFor="upload-avatar"><PlusOutlined /> Upload Avatar</label>
                                    <button className="is-hover__handle is-hover__handle__delete" >
                                    <DeleteOutlined /> Delete Avatar
                                    </button>

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
                                            value={username || obj.username}
                                            onChange={(e) => handleUsername(e)}
                                        />
                                        <label className='c-form__label'>
                                            USERNAME
                                        </label>
                                    </div>
                                    { errorUsername && (
                                        <FormError text='Username must be alphanumeric, between 3 and 32 characters long' />
                                    )}
                                    <div className='c-form__group'>
                                        <input
                                            className='c-form__input'
                                            type='text'
                                            name="displayName"
                                            value={displayName || obj.displayName}
                                            onChange={(e) => handleDisplayName(e)}
                                            required
                                        />
                                        <label className='c-form__label'>
                                            NAME
                                        </label>
                                    </div>
                                    { errorDisplayName && (
                                        <FormError text='Display name must be less than 32 characters long' />
                                    )}
                                    <div className='c-form__group'>
                                        <input
                                            className='c-form__input'
                                            type='text'
                                            required
                                            value={email ||obj.email}
                                            onChange={(e) => handleEmail(e)}
                                        />
                                        <label className='c-form__label'>
                                            EMAIL
                                        </label>
                                    </div>
                                    { errorEmail && (
                                        <FormError text='Email must be valid' />
                                    )}
                                    <div className='c-form__group is-focus'>
                                        <input
                                            className = 'c-form__input_date'
                                            min='1920-01-01'
                                            max='2021-12-12'
                                            type='date'
                                            required
                                            value = { dateOfBirth || obj.dateOfBirth }
                                            onChange={(e) => handleDateOfBirth(e)}
                                        />
                                        <label className='c-form__label'>
                                            BIRTHDAY
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
                                            required
                                            value={password || "********"}
                                            onChange={(e) => handlePassword(e)}
                                        />
                                        <label className='c-form__label'>
                                            PASSWORD
                                        </label>
                                    </div>
                                    { errorPassword && (
                                        <FormError text='Password must be between 8 and 128 characters long' />
                                    )}
                                    <div className='c-form__group'>
                                        <input
                                            className='c-form__input'
                                            type='password'
                                            required
                                            value={confirmPassword || "********"}
                                            onChange={(e) => handleConfirmPassword(e)}
                                        />
                                        <label className='c-form__label'>
                                            RE-PASSWORD
                                        </label>
                                    </div>
                                    { errorConfirmPassword && (
                                        <FormError text='Passwords and confirm passwords do not match' />
                                    )}
                                    <button
                                        className='c-btn c-btn'
                                        type='button'
                                        // onClick={() => handleGetInfo()}
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
export default Info;
