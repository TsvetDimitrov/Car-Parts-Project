import { html } from '../../../node_modules/lit-html/lit-html.js';

const buyoutTemplate = () => html `
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

                <h3>
                    <img src="/images/mail-icon.png" class="icon">
                    <a class="mail" href="mailto:dimitrovv32@gmail.com"><strong>dimitrovv32@gmail.com</strong></a>
                </h3>
            </div>
        </div>
    </div>
</div>
`;


export async function buyoutPage(ctx) {
    if (!sessionStorage.getItem('email')) {
        alert('You need to login first in order to sell your car!');
        return ctx.page.redirect('/login');
    }
    ctx.render(buyoutTemplate());

    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];

        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    }

    const button = document.querySelector(".button-evaluation");
    button.addEventListener("click", createRipple);
}