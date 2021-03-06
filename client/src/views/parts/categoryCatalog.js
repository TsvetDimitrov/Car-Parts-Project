import { html } from '../../../node_modules/lit-html/lit-html.js';
import { getPartsByType } from '../../api/data.js';


const productTemplate = (part) => html `
        <a href="/product/${part._id}" class="product-item" title="${part.title}">
            <div class="product-img">
                <img src="${part.imageUrl}" alt="${part.title}" class="image">
            </div>
            <div class="product-name-title">
                ${part.title}
            </div>
            <div class="price-wrapper">
                <span class="product-price">${part.price} лв.</span>
            </div>
        </a>
`;


const categoryCatalogTemplate = (parts, partType) => html `
<div class="content-products">
    <div class="heading">
        <h1 class="title heading">
            ${partType} </h1>
    </div>
    <div class="products-list">

        ${parts.length == 0 ? html`<div class="no-items">
            <p class="text">Все още няма налични части, отговарящи на тази категория.</p>
            <span class="icon"></span>
        </div>` : parts.map(productTemplate)}
    </div>
</div>

`;


export async function categoryCatalogPage(ctx) {
    let productType = ctx.path.split('/')[2];
    const { parts, partType } = await getPartsByType(productType);
    console.log(parts);
    ctx.render(categoryCatalogTemplate(parts, partType));
}