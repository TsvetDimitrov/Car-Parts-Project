import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserCartProducts } from '../api/data.js';

const cartTemplate = (products) => html `
<div class="cart-wrapper">
    <div class="container-cart">
        <div class="header-cart">
            <h1 class="text-cart-header">Количка</h1>
        </div>
        <div class="products-wrapper">
            <div class="table">
                <div class="products-table">
                    <table class="table-table">
                        <thead>
                            <tr>
                                <th scope="col" class="th-col">
                                    <div class="text-col">Продукт</div>
                                </th>
                                <th scope="col" class="th-col">
                                    <div class="text-col">Цена</div>
                                </th>
                                <th scope="col" class="th-col">
                                    <div class="text-col">Премахни</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            ${products.length == 0 ? '' : products.map(productTemplate)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>`;



const productTemplate = (product) => html `
<tr class="row" scope="row">
    <th scope="row" class="product-image-title">
        <div class="product-div">
            <img src="${product.imageUrl}" class="cart-product-image" width="90" height="90">
            <div class=" product-title">
                <h4><a href="/product/${product._id}" class="product-title-text">${product.title}</a></h4>
            </div>
        </div>
    </th>
    <td class="item-price">
        <strong>${product.price} лв.</strong>
    </td>
    <td class="remove-from-cart">
        <span class="icon"></span>
    </td>
</tr>


`;




export async function cartPage(ctx) {
    let { userOrders } = await getUserCartProducts();
    console.log(userOrders);
    ctx.render(cartTemplate(userOrders));
}