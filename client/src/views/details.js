import { html } from '../../node_modules/lit-html/lit-html.js';
import { getProductById, addProductToCart } from '../api/data.js';


const detailsTemplate = (product, addCartProduct, isAdmin) => html `
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

                    ${product.engineType ?  
                    html`<div class="attribute">
                        <div class="attribute-text">Двигател</div>
                        <div class="attribute-info">
                            <span>${product.engineType}</span>
                        </div>
                    </div>` : ''}

                    ${product.partColor ?  
                    html`<div class="attribute">
                        <div class="attribute-text">Двигател</div>
                        <div class="attribute-info">
                            <span>${product.partColor}</span>
                        </div>
                    </div>` : ''}

                    ${product.yearFrom ?  
                    html`<div class="attribute">
                        <div class="attribute-text">Година на производство</div>
                        <div class="attribute-info">
                            <span>${product.yearFrom} - ${product.yearTo}</span>
                        </div>
                    </div>` : ''}
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
            ${isAdmin ? html`<div class = "admin-options">
                    <div class = "edit-product">
                        <button class="edit-button">
                            <span class="icon"></span>
                            <span class="text">Редактирай</span>
                         </button>
                    </div>
                    <div class = "delete-product">
                        <button class="delete-button">
                            <span class="icon"></span>
                            <span class="text">Изтрий</span>
                         </button>
                    </div>
            </div>` : ''}

        </div>
    </div>
</div>
<div class="benefits-wrapper">
    <div class="inner">
        <div class="benefits">
            <ul>
                <li>
                    <img src="/images/express-delivery-icon.png" alt="Експресна доставка">
                    <p>Експресна доставка</p>
                    <p>Доставяне из цяла България.</p>
                </li>
                <li>
                    <img src="/images/delivery.png" alt="Нови части">
                    <p>Нови части всеки ден</p>
                    <p>Ежедневно зарежваме нови части.</p>
                </li>
                <li>
                    <img src="/images/satisfaction-guaranteed.png" alt="Нови части">
                    <p>Проверено качество</p>
                    <p>Авточасти с гаранция.</p>
                </li>
                <li>
                    <img src="/images/right-of-return.png" alt="Нови части">
                    <p>Право на връщане</p>
                    <p>14 дни право на връщане на всяка поръчана стока.</p>
                </li>
            </ul>
        </div>
    </div>
</div>
</div>
`;




export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const product = await getProductById(id);
    console.log(product);
    const isAdmin = sessionStorage.getItem('isAdmin');
    ctx.render(detailsTemplate(product, addCartProduct, isAdmin));


    async function addCartProduct() {
        console.log('clicked');
        try {
            if(!sessionStorage.getItem('email')){
                throw new Error('Please log in first!');
            }
            const result = await addProductToCart(id);
            alert('You have successfully added your product to your cart!');
            //TODO result.message show screen!
        } catch (err) {
           alert(err.message);
            ctx.page.redirect('/login');
        }
    }
}