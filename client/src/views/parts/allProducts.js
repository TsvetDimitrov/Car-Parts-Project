import { html } from '../../../node_modules/lit-html/lit-html.js';
import { getAllProducts } from '../../api/data.js';


const allProductsTemplate = (parts) => html `
<div class="content-products">
    <div class="heading">
        <h1 class="title heading">
            Всички продукти </h1>
    </div>
    <div class="products-list">

        ${parts.length == 0 ? html`<p class="no-items">No items listed</p>` : parts.map(productTemplate)}
    </div>
</div>
`;


const productTemplate = (part) => html`
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


export async function allProductsPage(ctx) {
    const parts = await getAllProducts();
    
    ctx.render(allProductsTemplate(parts));
}