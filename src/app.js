import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';



import { aboutUsPage } from './views/aboutUs.js';
import { buyoutPage } from './views/buyout.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js'
const main = document.querySelector('main');

page('/aboutUs', decorateContext, aboutUsPage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/izkupuvane', decorateContext, buyoutPage);

page.start();



function decorateContext(ctx, next) {

    ctx.render = (content) => render(content, main);
    next();
}



