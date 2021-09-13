import { html } from '../../node_modules/lit-html/lit-html.js';


const notfoundTemplate = () => html`<p> NOT FOUND 404 QJ MI KURA</p>`;


export async function notfound(ctx){
    ctx.render(notfoundTemplate())
}