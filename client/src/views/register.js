import { html } from '../../node_modules/lit-html/lit-html.js';
import { addFocusClass, removeFocusClass } from '../util/util.js';
import { register } from '../api/data.js';

const registerTemplate = (onSubmit) => html`
<div class="register-wrap">
    <div class="content-register">
        <div class="page-member-register">
            <div class="main">
                <div class="inner">
                    <div class="inner-inner">
                        <a href="/" class="logo bg"></a>
                        <h1 class="title">Регистрация</h1>
                        <div class="member-form">
                            <form @submit=${onSubmit} class="form-horizontal" name="memberLoginForm"
                                id="memberLoginForm">
                                <label class="field-label">
                                    <span class="required-field">Име</span>
                                    <input type="text" name="name" class="required" value="">
                                </label>
                                <label class="field-label">
                                    <span class="required-field">E-mail</span>
                                    <input type="text" name="email" class="required" value="">
                                </label>
                                <label class="field-label">
                                    <span>Парола</span>
                                    <input type="password" name="password" class="required" value="">
                                </label>
                                <label class="field-label">
                                    <span>Повтори паролата</span>
                                    <input type="password" name="repeatPass" class="required" value="">
                                </label>
                                <div class="agreement">
                                    <label class="field-label checkbox-label">
                                        <input type="checkbox" name="agreement_1" class="required" value="1">
                                        <span class="required-field">Съгласен съм с <a
                                                href="/usloviya-za-polzvane">условията за ползване</a>
                                            и <a href="/privacy-policy">политиката за защита на лични данни</a> и имам
                                            навършени 14 години.
                                        </span>
                                    </label>
                                    <label class="field-label checkbox-label">
                                        <input type="checkbox" name="agreement_2" class="required" value="1">
                                        <span class="required-field"> Съгласен съм с <a href="/obshti-usloviya">общите
                                                условия</a> на търговеца</span>
                                    </label>
                                </div>
                                <div class="register-btn">
                                    <button type="submit" class="button-animate-register">
                                        <span>РЕГИСТРАЦИЯ</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="separator">
                            <span class="separator-text">или</span>
                        </div>
                        <div class="media-login">
                            <button class="facebook-login-button" type="button">
                                <span>ВХОД С FACEBOOK</span>
                            </button>
                            <button class="google-login-button" type="button">
                                <span>ВХОД С GOOGLE</span>
                            </button>
                        </div>
                        <div class="separator"></div>
                        <div class="existing-user">
                            <span class="existing-user-text">Вече имате профил?</span>
                            <a href="/login">Вход</a>
                        </div>
                    </div>
                    <div class="back-to-site">
                        <a href="/" class="text-body-dark">
                            <span class="back-to-site-icon"></span>
                            <span>Назад към сайта</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

export async function registerPage(ctx) {

    const footer = document.getElementById('footer');
    footer.style.display = 'none';
    
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repeatPass = formData.get('repeatPass').trim();
        const agreenment1 = formData.get('agreement_1');
        const agreenment2 = formData.get('agreement_2');

        if (!name || !email || !password || !repeatPass || !agreenment1 || !agreenment2) {
            alert('All fields are required!');
            throw new Error('All fields are required!');
        }

        if (repeatPass !== password) {
            alert('Passwords don\'t match!');
            throw new Error('Passwords don\'t match!');
        }
        await register(name, email, password);
        ctx.setUserNav();
        ctx.page.redirect('/');
    }

    //Register page focus and blur input elements and adding html tag class.

    const nameRegister = document.querySelector('input[name="name"]');
    const emailRegister = document.querySelector('input[name="email"]');
    const passwordRegister = document.querySelector('input[name="password"]');
    const repeatPassRegister = document.querySelector('input[name="repeatPass"]');

    nameRegister.addEventListener("focus", addFocusClass);
    nameRegister.addEventListener('blur', removeFocusClass);

    emailRegister.addEventListener("focus", addFocusClass);
    emailRegister.addEventListener('blur', removeFocusClass);

    passwordRegister.addEventListener("focus", addFocusClass);
    passwordRegister.addEventListener('blur', removeFocusClass);

    repeatPassRegister.addEventListener("focus", addFocusClass);
    repeatPassRegister.addEventListener('blur', removeFocusClass);
}