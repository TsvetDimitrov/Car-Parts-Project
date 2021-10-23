import { html } from '../../node_modules/lit-html/lit-html.js';


const notfoundTemplate = () => html`
<div class="page-404-wrapper">
    <a href="/">
        <img src="/images/image-404-car.png" alt="404 - Page not found">
        <span class="icon"></span>
        <span class="text">Назад към сайта</span>
    </a>
</div>`;


export async function notfound(ctx) {
    ctx.render(notfoundTemplate())
}