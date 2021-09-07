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


