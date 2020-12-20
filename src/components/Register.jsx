import React from 'react'

function Register() {
    return (
        <>
            <div class="register__background">
                <div class="register">
                    <h1 class="register__title">Register</h1>
                    <div class="register__group">
                        <input class="register__group__input" type="text" required="true" />
                        <label class="register__group__label">Email or username</label>
                    </div>
                    <div class="register__group"><input class="register__group__input" type="text" required="true" />
                        <label class="register__group__label">Display Name</label>
                    </div>
                    <div class="register__group">
                        <input class="register__group__input" type="date" required="true" />
                        <label class="register__group__label__date">Birthday</label>
                    </div>
                    <div class="register__group">
                        <input class="register__group__input" type="password" required="true" />
                        <label class="register__group__label">Password</label>
                    </div>
                    <div class="register__group">
                        <input class="register__group__input" type="password" required="true" />
                        <label class="register__group__label">Retype Password</label>
                    </div>
                    <button class="register__button" type="button">Register</button>
                    <div class="register__below">
                        <a class="register__below-cta__text register__below-cta__text--need-help" href="/login">
                            Already have a account?
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register