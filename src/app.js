import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';



import {aboutUsPage} from './views/aboutUs.js';


page('/aboutUs', decorateContext, aboutUsPage);


page.start();



function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}