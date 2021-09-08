import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';



import {aboutUsPage} from './views/aboutUs.js';
import { loginPage } from './views/login.js';
const main = document.querySelector('main');

page('/aboutUs', decorateContext, aboutUsPage);
page('/login', decorateContext, loginPage);

page.start();



function decorateContext(ctx, next) {
    
    ctx.render = (content) => render(content, main);
    next();
}


        //Login page focus and blur input elements and adding class.

        const nameRegister = document.querySelector('input[name="name"]');
        const emailRegister = document.querySelector('input[name="email"]');
        const passwordRegister = document.querySelector('input[name="password"]');
        const repeatPassRegister = document.querySelector('input[name="repeatPass"]');
        nameRegister.addEventListener("focus", (e) => {
            const el = e.path[1];
            el.classList.add('focused');
        });
    
        nameRegister.addEventListener('blur', (e) => {
            const el = e.path[1];
            el.classList.remove('focused');
        });

        emailRegister.addEventListener("focus", (e) => {
            const el = e.path[1];
            el.classList.add('focused');
        });
    
        emailRegister.addEventListener('blur', (e) => {
            const el = e.path[1];
            el.classList.remove('focused');
        });
    
    
        passwordRegister.addEventListener("focus", (e) => {
            const el = e.path[1];
            el.classList.add('focused');
        });
    
        passwordRegister.addEventListener('blur', (e) => {
            const el = e.path[1];
            el.classList.remove('focused');
        });

        repeatPassRegister.addEventListener("focus", (e) => {
            const el = e.path[1];
            el.classList.add('focused');
        });
    
        repeatPassRegister.addEventListener('blur', (e) => {
            const el = e.path[1];
            el.classList.remove('focused');
        });