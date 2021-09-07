import { html } from '../../node_modules/lit-html/lit-html.js';

const aboutUsTemplate = () => html`
<div id="aboutUsPage">
    <div class="aboutUsHeader">
        <div class="container">
            <div class='h4'> За нас</div>
            <div class="links">
                <a href="/"> <i class="fas fa-home"></i>Начална страница</a>
                <span>/</span>
                <a href="/aboutUs">За нас</a>
            </div>
        </div>
    </div>
    <div class="aboutUsContent">
        <p>
            DIMIPARTS ООД е платформа за предлагане на авточасти. Работейки с множество доставчици, ние DIMIPARTS
            успяваме да предложим богат асортимент на едно място за всички автолюбители.
            Нашите партньори предлагат авточасти, гуми, джанти, акумулатори, автоаксесоари и други продукти на
            автомобилна тематика.
            За да предложим максимално качество на обслужване,
            от DIMIPARTS щателно подбираме своите партноьори и контролираме всяка една поръчка направена през
            платформата
            за да гарантираме,
            че всеки един потребител ще получи максимално качествено обслужване.
        </p>

    </div>
    <div class="benefits-wrapper">
        <div class="inner">
            <div class="benefits">
                <ul>
                    <li>
                        <img src="/images/icon-express-delivery.svg" alt="Експресна доставка">
                        <p>Експресна доставка</p>
                        <p>Доставяне из цяла България.</p>
                    </li>
                    <li>
                        <img src="/images/icon-new-parts.svg" alt="Нови части">
                        <p>Нови части всеки ден</p>
                        <p>Ежедневно зарежваме нови части.</p>
                    </li>
                    <li>
                        <img src="/images/icon-proven-quality.svg" alt="Нови части">
                        <p>Проверено качество</p>
                        <p>Авточасти с гаранция.</p>
                    </li>
                    <li>
                        <img src="/images/icon-right-of-return.svg" alt="Нови части">
                        <p>Право на връщане</p>
                        <p>14 дни право на връщане на всяка поръчана стока.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
`;


export function aboutUsPage(ctx) {
    const homepage = document.querySelector('.homepage-grid');
    homepage.style.display = 'none';

    const benefits = document.querySelector('.benefits-wrapper');
    benefits.style.display = 'none';

    const homePagePic = document.querySelector('.inner');
    homePagePic.style.display = 'none';

    ctx.render(aboutUsTemplate());
    window.scrollTo(0, 0);
}