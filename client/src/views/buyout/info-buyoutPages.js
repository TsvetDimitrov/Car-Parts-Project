import { html } from '../../../node_modules/lit-html/lit-html.js';
import { removeFocusClass, addFocusClass } from '../../util/util.js';
import { createCarBuyOutRequest } from '../../api/data.js';


const infoBuyout1Template = (onSubmit) => html `
<div class="buyout-car-info">
    <div class="buyout-car-header">
        <div class="inner">
            <h1 class="header">Oнлайн оценка на автомобил</h1>
        </div>
    </div>
    <div class="buyout-car-content">
        <div class="buyout-steps">
            <div class="buyout-step active">
                <div class="step-image">
                    <img src="/images/step-01-active.svg">
                </div>
                <div class="buyout-text">Въведете данните за вашия автомобил</div>
            </div>
            <div class="buyout-separator-step"></div>
            <div class="buyout-step">
                <div class="step-image">
                    <img src="/images/step-02-inactive.svg">
                </div>
                <div class="buyout-text">Приложете снимки на вашият автомобил</div>
            </div>
        </div>
        <form @submit=${onSubmit} action="POST" name="buyoutForm" class="form-horiz">
            <div class="form-inputs">
                <div class="form-input">
                    <label class="field-label">
                        <span class="required-field">Марка</span>
                        <input type="text" name="brand" class="required">
                    </label>
                </div>
                <div class="form-input">
                    <label class="field-label">
                        <span class="required-field">Модел</span>
                        <input type="text" name="model" class="required">
                    </label>
                </div>
                <div class="form-input">
                    <label class="field-label">
                        <span class="required-field">Година на производство</span>
                        <input type="text" name="manufactureYear" class="required">
                    </label>
                </div>
                <div class="form-input">
                    <label class="field-label">
                        <span class="required-field">Вид двигател</span>
                        <input type="text" name="engineType" class="required">
                    </label>
                </div>
                <div class="form-input">
                    <label class="field-label">
                        <span class="required-field">Скоросттна кутия</span>
                        <input type="text" name="gearboxType" class="required">
                    </label>
                </div>
                <div class="form-input">
                    <label class="field-label">
                        <span class="required-field">Предложете цена за вашият автомобил</span>
                        <input type="number" name="priceWanted" class="required" min="$100" max="$10000">
                    </label>
                </div>
                <div class="form-input fullwidth">
                    <label class="field-label">
                        <span class="required-field">Цялостно описание</span>
                        <textarea name="text"></textarea>
                    </label>
                </div>
            </div>
            <div class="button-wrapper">
                <button type="submit" class="button-submit">
                    <span>Към стъпка 2</span>
                    <span class="icon"></span>

                </button>
                <div class="text-button">* Задължителни полета</div>
            </div>
        </form>

    </div>
</div>
`
const infoBuyout2Template = (onSubmit) => html `
<div class="buyout-car-info">
    <div class="buyout-car-header">
        <div class="inner">
            <h1 class="header">Oнлайн оценка на автомобил</h1>
        </div>
    </div>
    <div class="buyout-car-content">
        <div class="buyout-steps">
            <div class="buyout-step active">
                <div class="step-image">
                    <img src="/images/step-01-success.svg">
                </div>
                <div class="buyout-text">Въведете данните за вашия автомобил</div>
            </div>
            <div class="buyout-separator-step success"></div>
            <div class="buyout-step">

                <div class="step-image">
                    <img src="/images/step-01-active.svg">
                </div>
                <div class="buyout-text">Приложете снимки на вашият автомобил</div>
            </div>


        </div>
        <div class="image-wrapper">
            <form @submit=${onSubmit}>
                <label class="field-label">
                    <span class="required-field">Въведете imageURL</span>
                    <input type="text" name="imageUrl" class="required" min="$100" max="$10000">
                </label>
                <button type="submit">Изпрати заявка</button>
            </form>

        </div>
    </div>

</div>
</div>
`;

let carDataState = {}

export async function buyoutInfoPage1(ctx) {
    ctx.render(infoBuyout1Template(onSubmit));


    const brandInput = document.querySelector('input[name="brand"]');
    const modelInput = document.querySelector('input[name="model"]');
    const manufactureYearInput = document.querySelector('input[name="manufactureYear"]');
    const engineInput = document.querySelector('input[name="engineType"]');
    const gearboxTypeInput = document.querySelector('input[name="gearboxType"]');
    const priceWantedInput = document.querySelector('input[name="priceWanted"]');
    const textArea = document.querySelector('textarea[name="text"]');


    brandInput.addEventListener("focus", addFocusClass);
    brandInput.addEventListener('blur', removeFocusClass);

    modelInput.addEventListener('focus', addFocusClass);
    modelInput.addEventListener('blur', removeFocusClass);

    manufactureYearInput.addEventListener('focus', addFocusClass);
    manufactureYearInput.addEventListener('blur', removeFocusClass);

    engineInput.addEventListener('focus', addFocusClass);
    engineInput.addEventListener('blur', removeFocusClass);

    gearboxTypeInput.addEventListener('focus', addFocusClass);
    gearboxTypeInput.addEventListener('blur', removeFocusClass);

    priceWantedInput.addEventListener('focus', addFocusClass);
    priceWantedInput.addEventListener('blur', removeFocusClass);

    textArea.addEventListener('focus', addFocusClass);
    textArea.addEventListener('blur', removeFocusClass);

    function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const brand = formData.get('brand').trim();
        const model = formData.get('model').trim();
        const manufactureYear = formData.get('manufactureYear').trim();
        const engineType = formData.get('engineType').trim();
        const gearboxType = formData.get('gearboxType').trim();
        const priceWanted = formData.get('priceWanted').trim();
        const additionalInfo = formData.get('text').trim();

        //Check if fields are empty. If they are: span will be showed in error style.
        let hasEmptyField = false;

        for (let entry of formData.entries()) {
            if (entry[1] == '') {
                hasEmptyField = true;
                const el = document.querySelector(`input[name="${entry[0]}"]`) || document.querySelector(`textarea[name="text"]`);
                const label = el.parentNode;
                if (!label.contains(label.querySelector('.red-text-field'))) {
                    label.appendChild(createEl());
                }
            } else {
                const el = document.querySelector(`input[name="${entry[0]}"]`) || document.querySelector(`textarea[name="text"]`);
                const label = el.parentNode;
                if (label.contains(label.querySelector('.red-text-field'))) {
                    label.removeChild(label.querySelector('.red-text-field'))
                }
            }
        }
        carDataState.brand = brand;
        carDataState.model = model;
        carDataState.manufactureYear = manufactureYear;
        carDataState.engineType = engineType;
        carDataState.gearboxType = gearboxType;
        carDataState.priceWanted = priceWanted;
        carDataState.additionalInfo = additionalInfo;

        if (!hasEmptyField) {
            ctx.page.redirect('/izkupuvane/info2');
        }
    }

    function createEl() {
        const span = document.createElement('span');
        span.textContent = '*Полето е задължително';
        span.className = "red-text-field";
        return span;
    }
}

export async function buyoutInfoPage2(ctx) {
    ctx.render(infoBuyout2Template(onSubmit));
    const imageUrlField = document.querySelector('input[name="imageUrl"]');
    imageUrlField.addEventListener("focus", addFocusClass);
    imageUrlField.addEventListener('blur', removeFocusClass);

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const imageUrl = formData.get('imageUrl').trim();
        if (!imageUrl) {
            return alert('Please enter imageUrl');
        } else {
            console.log(carDataState);

            carDataState.imageUrl = imageUrl;
            await createCarBuyOutRequest(carDataState);
            ctx.page.redirect('/');
        }
    }
}