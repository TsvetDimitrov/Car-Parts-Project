import { html } from '../../../../node_modules/lit-html/lit-html.js';
import { getNavigationSystems } from '../../../api/data.js';


const productTemplate = (item) => html`
        <a href="/product/${item._id}" class="product-item" title="${item.title}">
            <div class="product-img">
                <img src="${item.imageUrl}" alt="${item.title}" class="image">
            </div>
            <div class="product-name-title">
                ${item.title}
            </div>
            <div class="price-wrapper">
                <span class="product-price">${item.price} лв.</span>
            </div>
        </a>
`;


const navigationSystemsTemplate = (items) => html`
<div class="content-products">
    <div class="heading">
        <h1 class="title heading">
            CD чейнджъри </h1>
    </div>
    <div class="products-list">
        <a href="/product/:id" class="product-item" title="PRODUCT TITLE">
            <div class="product-img">
                <img src="IMAGESRC" alt="PRODUCT TITLE" class="image">
            </div>
            <div class="product-name-title">
                PRODUCT TITLE
            </div>
            <div class="price-wrapper">
                <span class="product-price">PRODUCT PRICE лв.</span>
            </div>
        </a>

        ${items.length == 0 ? html`<p class="no-items">No items listed</p>` : items.map(productTemplate)}
    </div>
</div>

`;






export async function navigationSystemsPage(ctx) {
    const items = await getNavigationSystems();
    console.log(items);
    ctx.render(navigationSystemsTemplate(items));

}