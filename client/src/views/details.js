import { html } from '../../node_modules/lit-html/lit-html.js';
import { getProductById } from '../api/data.js';


const detailsTemplate = (product) => html `
<div class="product-details-wrapper">
    <div class = "container">
        <div class="product-image">
            <img src=${product.imageUrl} alt=${product.title}>
        </div>
        <div class="product-details">
            <h2 class="product-title">${product.title}</h2>
            <div class="description">
                <div class="attributes">
                    <div class="attribute">
                        <div class="attribute-text">Марка</div>
                        <div class="attribute-info">
                            <span>${product.brand}</span>
                        </div>
                    </div>
                    <div class="attribute">
                        <div class="attribute-text">Модел</div>
                        <div class="attribute-info">
                            <span>${product.model}</span>
                        </div>
                    </div>
                    <div class="attribute">
                        <div class="attribute-text">Състояние</div>
                        <div class="attribute-info">
                            <span>${product.condition}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-purchase">
                <div class="purchase">
                    <div class="price">
                        <span class="item-price">${product.price} лв.</span>
                    </div>
                    <div class="add-to-cart">
                        <button class="add-to-cart-button">
                            <span class="icon"></span>
                            <span class="text">Добави в количката</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
`;




export async function detailsPage(ctx) {
    console.log('here idiot');
    const id = ctx.params.id;
    const product = await getProductById(id);
    console.log(product);
    ctx.render(detailsTemplate(product));
}