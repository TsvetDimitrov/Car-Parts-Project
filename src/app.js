import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';



import {aboutUsPage} from './views/aboutUs.js';
const main = document.querySelector('main');

page('/aboutUs', decorateContext, aboutUsPage);


page.start();



function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    next();
}


//Login page focus and blur input elements and adding class.

const emailLogin = document.querySelector('input[name="email"]');
const passwordLogin = document.querySelector('input[name="password"]');

emailLogin.addEventListener("focus", (e) => {
    const el = e.path[1];
    el.classList.add('focused');
});

emailLogin.addEventListener('blur', (e)=>{
    const el = e.path[1];
    el.classList.remove('focused');
});


passwordLogin.addEventListener("focus", (e) => {
    const el = e.path[1];
    el.classList.add('focused');
});

passwordLogin.addEventListener('blur', (e)=>{
    const el = e.path[1];
    el.classList.remove('focused');
})