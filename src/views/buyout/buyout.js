import { html } from '../../../node_modules/lit-html/lit-html.js';


const buyoutTemplate = () => html`
<div class="buyout-car-wrapper">
    <div class="header">
        <h1 class="title">Продай автомобила си</h1>
    </div>
    <div class="buyout-car-content">
        <div class="buyout-info">
            <img src="./images/sell-your-car-image.png" alt="Продай автомобила си" class="buyout-image">

            <div class="text-buyout">
                DIMIPARTS изкупува всички марки и модели автомобили, джипове и бусове от цялата страна,
                на реалистични цени. Предлагаме траспорт и издаваме удостоверения за дерегистрация на
                автомобилите от КАТ.
                За повече информация може да се свържете
                с нас по телефона или използвайте опцията, онлайн оценка на вашия автомобил.
            </div>
            <a href="/izkupuvane/info" class="button-evaluation">
                <span class="icon"></span>
                <span>ОНЛАЙН ОЦЕНКА НА АВТОМОБИЛ</span>
            </a>
            <div class="text-contacts">
                <h3>
                    <img src="/images/phone-icon.png" alt="" class="icon">
                    <strong><a class="tel" href="tel: 0893496566">0893496566</a></strong>
                </h3>
                <p>&nbsp;</p>
                <h3>
                    <img src="/images/mail-icon.png" class="icon">
                    <a class="mail" href="mailto:dimitrovv32@gmail.com"><strong>dimitrovv32@gmail.com</strong></a>
                </h3>
            </div>
        </div>
    </div>
</div>
`;


export async function buyoutPage(ctx){
    ctx.render(buyoutTemplate());

    const homepage = document.querySelector('.inner');
    const benefits = document.querySelector('.benefits-wrapper');
    const footer = document.getElementById('footer');

    benefits.style.display = 'none';
    homepage.style.display = 'none';
    footer.style.display = 'none';
}