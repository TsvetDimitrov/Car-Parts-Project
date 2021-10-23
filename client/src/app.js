import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';



import { aboutUsPage } from './views/aboutUs.js';
import { buyoutPage } from './views/buyout/buyout.js';
import { buyoutInfoPage1 } from './views/buyout/info-buyoutPages.js';
import { buyoutInfoPage2 } from './views/buyout/info-buyoutPages.js';
import { loginPage } from './views/login.js';
//import { notfound } from './views/notfound404.js';
import { registerPage } from './views/register.js';



const main = document.querySelector('main');

page('/aboutUs', decorateContext, aboutUsPage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/izkupuvane', decorateContext, buyoutPage);
page('/izkupuvane/info', decorateContext, buyoutInfoPage1);
page('/izkupuvane/info2', decorateContext, buyoutInfoPage2);
//page('*', decorateContext, notfound);
page.start();


function decorateContext(ctx, next) {

    ctx.render = (content) => render(content, main);
    next();
}




