import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';


import { logout } from './api/data.js';

import { homePage } from './views/home.js'
import { aboutUsPage } from './views/aboutUs.js';
import { buyoutPage } from './views/buyout/buyout.js';
import { buyoutInfoPage1 } from './views/buyout/info-buyoutPages.js';
import { buyoutInfoPage2 } from './views/buyout/info-buyoutPages.js';
import { loginPage } from './views/login.js';
import { notfound } from './views/notfound404.js'; 
import { registerPage } from './views/register.js';


const main = document.querySelector('main');
page('/', decorateContext, homePage);
page('/aboutUs', decorateContext, aboutUsPage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/izkupuvane', decorateContext, buyoutPage);
page('/izkupuvane/info', decorateContext, buyoutInfoPage1);
page('/izkupuvane/info2', decorateContext, buyoutInfoPage2);
page('*', decorateContext, notfound);

setUserNav();


page.start();

document.querySelector('.user').addEventListener('click', async () => {
    await logout();
    setUserNav();
    page.redirect('/');
})


function decorateContext(ctx, next) {

    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    ctx.setFooter = setFooter;
    next();
}

function setUserNav() {
    const userId = sessionStorage.getItem('userId');
    const isAdmin = sessionStorage.getItem('isAdmin');
    if (userId != null) {
        document.querySelector('.guest').style.display = 'none';;
        document.querySelector('.user').style.display = 'inline-block';
    } else {
        document.querySelector('.guest').style.display = 'inline-block';
        document.querySelector('.user').style.display = 'none';
    }

    if(isAdmin != null){
        document.querySelector('.admin').style.display = 'inline-block';
    }else{
        document.querySelector('.admin').style.display = 'none';

    }
}

function setFooter(){
    const footer = document.getElementById('footer');
    footer.style.display = '';
}




