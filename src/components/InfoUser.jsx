import React from 'react';
function InfoUser() {
    return (
        <>
            <div className='infouser'>
                <div className='c-overlayer'> </div>
                <div className='infouser__content'>
                    <div className='d-form'>
                        <h3 className='d-form__title'>Personal Information</h3>
                        <form action=''>
                            <div >
                                <image className='d-form__image'>
                                </image>
                            </div>
                            <div className='d-form__group'>
                                <label className='d-form__label'>
                                    Username
                                </label>
                            </div>
                            <div className='d-form__group'>
                                <label className='d-form__label'>
                                    Fullname
                                </label>
                            </div>
                            <div className='d-form__group'>
                                <label className='d-form__label'>
                                   Date of Birth
                                </label>
                            </div>
                            <div className='d-form__group'>
                                <label className='d-form__label'>
                                    Phonenumber
                                </label>
                            </div>
                            <div className='d-form__group'>
                                <label className='d-form__label'>
                                    Address
                                </label>
                            </div>
                            <div className='d-form__group'>
                                <label className='d-form__label'>
                                    Usertype
                                </label>
                            </div>
                            <div className='d-form__actions'>
                                <button
                                    className='d-btn c-btn--info'
                                    type='button'
                                >
                                  Update
                                </button>
                            </div>
                        </form>                      
                    </div>
                </div>
            </div>
        </>
    );
}
export default InfoUser;
