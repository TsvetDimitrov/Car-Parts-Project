import { html } from '../../node_modules/lit-html/lit-html.js';
import { addFocusClass, removeFocusClass } from '../util/util.js';
import { login } from '../api/data.js';


const loginTemplate = (onSubmit) => html`
<div class="login-wrap">
    <div class="content-login">
        <div class="page-member-login">
            <div class="main">
                <div class="inner">
                    <div class="inner-inner">
                        <a href="/" class="logo bg"></a>
                        <h1 class="title">Вход</h1>
                        <div class="member-form">
                            <form @submit=${onSubmit} method="POST" class="form-horizontal" name="memberLoginForm"
                                id="memberLoginForm">
                                <label class="field-label">
                                    <span class="required-field">E-mail</span>
                                    <input type="text" name="email" class="required" value="">
                                </label>
                                <label class="field-label">
                                    <span class="required-field">Парола</span>
                                    <input type="password" name="password" class="required" value="">
                                </label>
                                <div class="login-btn">
                                    <button type="submit" class="button-animate-login">
                                        <span>Вход</span>
                                    </button>
                                </div>
                            </form>
                            <div class="forgotten-password">
                                <a href="/forgotten-password" class="forgotten-pass-text">
                                    <span>Забравена парола?</span>
                                </a>
                            </div>
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
                        <div class="not-registered-user">
                            <span class="not-registered-user-text">Нямате профил?</span>
                            <a href="/register">Регистрация</a>
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
</div>`;

export async function loginPage(ctx) {

    const footer = document.getElementById('footer');
    footer.style.display = 'none';

    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        if (!email || !password) {
            throw new Error('All fields are required!');
        }

        const data = await login(email, password);
        console.log(data);
        ctx.setUserNav();
        ctx.page.redirect('/');
    }
    //Login page focus and blur input elements and adding html tag class.

    const emailLogin = document.querySelector('input[name="email"]');
    const passwordLogin = document.querySelector('input[name="password"]');

    emailLogin.addEventListener("focus", addFocusClass);
    emailLogin.addEventListener('blur', removeFocusClass);

    passwordLogin.addEventListener("focus", addFocusClass);
    passwordLogin.addEventListener('blur', removeFocusClass);
}
