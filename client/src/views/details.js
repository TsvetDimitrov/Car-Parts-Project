import { html } from '../../node_modules/lit-html/lit-html.js';
import { getProductById, addProductToCart } from '../api/data.js';


const detailsTemplate = (product, addCartProduct) => html `
<div class="product-details-wrapper">
    <div class="container">
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
                        <button @click=${addCartProduct} class="add-to-cart-button">
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
    const id = ctx.params.id;
    const product = await getProductById(id);
    ctx.render(detailsTemplate(product, addCartProduct));


    async function addCartProduct() {
        console.log('clicked');
        try {
            const result = await addProductToCart(id);
            alert('You have successfully added your product to your cart!');
            //TODO result.message show screen!
        } catch (err) {
            console.log(err.message);
            ctx.page.redirect('/login');
        }
    }
}