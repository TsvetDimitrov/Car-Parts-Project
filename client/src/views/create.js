import { html } from '../../node_modules/lit-html/lit-html.js';
import { isUserAdmin } from '../api/data.js';

const createTemplate = (onSubmit) => html`
    <div class="creatediv">
        <form @submit=${onSubmit} action="POST" name="buyoutForm" class="form-horiz">
            <div class="form-inputs">
                <div class="form-input">
                    <div class="category">
                        <span>Категория*</span>
                        <div class="select">
                            <select name="category" id="level11">
                                <option>Аудио, видео, навигации</option>
                                <option>Брави, дръжки, ключалки</option>
                                <option>Вътрешно оборудване</option>
                                <option>Горивна система</option>
                                <option>Гуми и джанти (2-ра употреба)</option>
                                <option>Двигател и оборудване</option>
                                <option>Ел. оборудване</option>
                                <option>Изпускателна система</option>
                                <option>Казанчета</option>
                                <option>Компютри, модули и релета</option>
                                <option>Маркучи, тръбички и колектори</option>
                                <option>Кори, уплътнения и пластмаси</option>
                                <option>Моторчета, машинки и механизми</option>
                                <option>Окачване и кормилна уредба</option>
                                <option>Охладителна и климатична система</option>
                                <option>Светлини</option>
                                <option>Скорости и трансмисия</option>
                                <option>Спирачна система</option>
                                <option>Тампони, маншони, лапи и стойки</option>
                                <option>Части за купето - едрогабаритни</option>
                                <option>Части за купето - малогабаритни</option>
                            </select>
                        </div>
                    </div>
                    <div class="type">
                        <span>Тип*</span>
                        <div class="select">
                            <select name="type" id="">
                            </select>
                        </div>
                    </div>
    
                    <div class="brand">
                        <span>Марка*</span>
                        <div classs="select">
                            <select name="brand" id="">
                                <optgroup label="A">
                                    <option>ABARTH</option>
                                    <option>ALFA ROMEO</option>
                                    <option>AUDI</option>
                                </optgroup>
                                <optgroup label="B">
                                    <option>BMW</option>
                                </optgroup>
                                <optgroup label="C">
                                    <option>CHEVROLET</option>
                                    <option>CHRYSLER</option>
                                    <option>CITROËN</option>
                                </optgroup>
                                <optgroup label="D">
                                    <option>DAEWOO</option>
                                    <option>DAIHATSU</option>
                                </optgroup>
                                <optgroup label="F">
                                    <option>FIAT</option>
                                    <option>FORD</option>
                                </optgroup>
                                <optgroup label="H">
                                    <option>HONDA</option>
                                    <option>HYUNDAI</option>
                                </optgroup>
                                <optgroup label="I">
                                    <option>INFINITI</option>
                                    <option>IVECO</option>
                                </optgroup>
                                <optgroup label="J">
                                    <option>JEEP</option>
                                </optgroup>
                                <optgroup label="K">
                                    <option>KIA</option>
                                </optgroup>
                                <optgroup label="L">
                                    <option>LANCIA</option>
                                    <option>LAND-ROVER</option>
                                    <option>LEXUS</option>
                                </optgroup>
                                <optgroup label="M">
                                    <option>MAZDA</option>
                                    <option>MERCEDES-BENZ</option>
                                    <option>MINI</option>
                                    <option>MITSUBISHI</option>
                                </optgroup>
                                <optgroup label="N">
                                    <option>NISSAN</option>
                                </optgroup>
                                <optgroup label="O">
                                    <option>OPEL</option>
                                </optgroup>
                                <optgroup label="P">
                                    <option>PEUGEOT</option>
                                    <option>PORSCHE</option>
                                </optgroup>
                                <optgroup label="R">
                                    <option>RENAULT</option>
                                    <option>ROVER</option>
                                </optgroup>
                                <optgroup label="S">
                                    <option>SAAB</option>
                                    <option>SEAT</option>
                                    <option>SKODA</option>
                                    <option>SMART</option>
                                    <option>SUBARU</option>
                                    <option>SUZUKI</option>
                                </optgroup>
                                <optgroup label="T">
                                    <option>TOYOTA</option>
                                </optgroup>
                                <optgroup label="V">
                                    <option>VOLVO</option>
                                    <option>VOLKSWAGEN</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="model">
                        <span>Модел</span>
                        <div class="select">
                            <select name="model" id="">
                            </select>
                        </div>
                    </div>
                    <div class="year">
                        <span>Година на производство</span>
                        <div class="select">
                            <select name="yearFrom" id="">
                                <option></option>
                                <option value="2021">от 2021г.</option>
                                <option value="2021">от 2020г.</option>
                                <option value="2021">от 2019г.</option>
                                <option value="2021">от 2018г.</option>
                                <option value="2021">от 2017г.</option>
                                <option value="2021">от 2016г.</option>
                                <option value="2021">от 2015г.</option>
                                <option value="2021">от 2014г.</option>
                                <option value="2013">от 2013г.</option>
                                <option value="2012">от 2012г.</option>
                                <option value="2011">от 2011г.</option>
                                <option value="2010">от 2010г.</option>
                                <option value="2009">от 2009г.</option>
                                <option value="2008">от 2008г.</option>
                                <option value="2007">от 2007г.</option>
                                <option value="2006">от 2006г.</option>
                                <option value="2005">от 2005г.</option>
                                <option value="2004">от 2004г.</option>
                                <option value="2003">от 2003г.</option>
                                <option value="2002">от 2002г.</option>
                                <option value="2001">от 2001г.</option>
                                <option value="2000">от 2000г.</option>
                                <option value="1999">от 1999г.</option>
                                <option value="1998">от 1998г.</option>
                                <option value="1997">от 1997г.</option>
                                <option value="1996">от 1996г.</option>
                                <option value="1995">от 1995г.</option>
                                <option value="1994">от 1994г.</option>
                                <option value="1993">от 1993г.</option>
                                <option value="1992">от 1992г.</option>
                                <option value="1991">от 1991г.</option>
                                <option value="1990">от 1990г.</option>
                                <option value="1989">от 1989г.</option>
                                <option value="1988">от 1988г.</option>
                                <option value="1987">от 1987г.</option>
                                <option value="1986">от 1986г.</option>
                                <option value="1985">от 1985г.</option>
                                <option value="1984">от 1984г.</option>
                                <option value="1983">от 1983г.</option>
                                <option value="1982">от 1982г.</option>
                                <option value="1981">от 1981г.</option>
                                <option value="1980">от 1980г.</option>
                                <option value="1979">от 1979г.</option>
                                <option value="1978">от 1978г.</option>
                                <option value="1977">от 1977г.</option>
                                <option value="1976">от 1976г.</option>
                                <option value="1975">от 1975г.</option>
                            </select>
                            <select name="yearTo" id="">
                                <option></option>
                                <option value="2021">до 2021г.</option>
                                <option value="2021">до 2020г.</option>
                                <option value="2021">до 2019г.</option>
                                <option value="2021">до 2018г.</option>
                                <option value="2021">до 2017г.</option>
                                <option value="2021">до 2016г.</option>
                                <option value="2021">до 2015г.</option>
                                <option value="2021">до 2014г.</option>
                                <option value="2013">до 2013г.</option>
                                <option value="2012">до 2012г.</option>
                                <option value="2011">до 2011г.</option>
                                <option value="2010">до 2010г.</option>
                                <option value="2009">до 2009г.</option>
                                <option value="2008">до 2008г.</option>
                                <option value="2007">до 2007г.</option>
                                <option value="2006">до 2006г.</option>
                                <option value="2005">до 2005г.</option>
                                <option value="2004">до 2004г.</option>
                                <option value="2003">до 2003г.</option>
                                <option value="2002">до 2002г.</option>
                                <option value="2001">до 2001г.</option>
                                <option value="2000">до 2000г.</option>
                                <option value="1999">до 1999г.</option>
                                <option value="1998">до 1998г.</option>
                                <option value="1997">до 1997г.</option>
                                <option value="1996">до 1996г.</option>
                                <option value="1995">до 1995г.</option>
                                <option value="1994">до 1994г.</option>
                                <option value="1993">до 1993г.</option>
                                <option value="1992">до 1992г.</option>
                                <option value="1991">до 1991г.</option>
                                <option value="1990">до 1990г.</option>
                                <option value="1989">до 1989г.</option>
                                <option value="1988">до 1988г.</option>
                                <option value="1987">до 1987г.</option>
                                <option value="1986">до 1986г.</option>
                                <option value="1985">до 1985г.</option>
                                <option value="1984">до 1984г.</option>
                                <option value="1983">до 1983г.</option>
                                <option value="1982">до 1982г.</option>
                                <option value="1981">до 1981г.</option>
                                <option value="1980">до 1980г.</option>
                                <option value="1979">до 1979г.</option>
                                <option value="1978">до 1978г.</option>
                                <option value="1977">до 1977г.</option>
                                <option value="1976">до 1976г.</option>
                                <option value="1975">до 1975г.</option>
                            </select>
                        </div>
                    </div>
                    <div class="engine">
                        <span>Двигател</span>
                        <select name="engineType" id="">
                            <option></option>
                            <option>Бензинов</option>
                            <option>Дизелов</option>
                        </select>
                    </div>
                    <div class="color">
                        <span>Цвят</span>
                        <div class="select">
                            <select name="partColor" id="">
                                <option value=""></option>
                                <option value="Tъмно син">Tъмно син
                                </option>
                                <option value="Банан">Банан
                                </option>
                                <option value="Беата">Беата
                                </option>
                                <option value="Бежов">Бежов
                                </option>
                                <option value="Бордо">Бордо
                                </option>
                                <option value="Бронз">Бронз
                                </option>
                                <option value="Бял">Бял
                                </option>
                                <option value="Винен">Винен
                                </option>
                                <option value="Виолетов">Виолетов
                                </option>
                                <option value="Вишнев">Вишнев
                                </option>
                                <option value="Графит">Графит
                                </option>
                                <option value="Жълт">Жълт
                                </option>
                                <option value="Зелен">Зелен
                                </option>
                                <option value="Златист">Златист
                                </option>
                                <option value="Кафяв">Кафяв
                                </option>
                                <option value="Керемиден">Керемиден
                                </option>
                                <option value="Кремав">Кремав
                                </option>
                                <option value="Лилав">Лилав
                                </option>
                                <option value="Металик">Металик
                                </option>
                                <option value="Оранжев">Оранжев
                                </option>
                                <option value="Охра">Охра
                                </option>
                                <option value="Пепеляв">Пепеляв
                                </option>
                                <option value="Перла">Перла
                                </option>
                                <option value="Пясъчен">Пясъчен
                                </option>
                                <option value="Резидав">Резидав
                                </option>
                                <option value="Розов">Розов
                                </option>
                                <option value="Сахара">Сахара
                                </option>
                                <option value="Светло сив">Светло сив
                                </option>
                                <option value="Светло син">Светло син
                                </option>
                                <option value="Сив">Сив
                                </option>
                                <option value="Син">Син
                                </option>
                                <option value="Слонова кост">Слонова кост
                                </option>
                                <option value="Сребърен">Сребърен
                                </option>
                                <option value="Т.зелен">Тъмно зелен
                                </option>
                                <option value="Тъмно сив">Тъмно сив
                                </option>
                                <option value="Тъмно син мет.">Тъмно син мет.
                                </option>
                                <option value="Тъмно червен">Тъмно червен
                                </option>
                                <option value="Тютюн">Тютюн
                                </option>
                                <option value="Хамелеон">Хамелеон
                                </option>
                                <option value="Червен">Червен
                                </option>
                                <option value="Черен">Черен
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="image">
                        <span>Снимка</span>
                        <div class="select">
                            <input type="text" placeholder="" name="imageUrl">
                        </div>
                    </div>
                </div>
            </div>
            <div class="button-wrapper">
                <button type="submit" class="button-submit">
                    <span>Запиши</span>
                    <span class="icon"></span>
    
                </button>
                <div class="text-button">* Задължителни полета</div>
            </div>
        </form>
    </div>
`;

export async function createPage(ctx) {
    //TODO CHECK IF THE USER IS ADMIN AND IF HE TRIED TO TYPE THE URL.
    const isAdmin = await isUserAdmin(sessionStorage.getItem('userId'));
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
    }

    document.querySelector('[name="category"]').addEventListener("change", applyDropdown);
    document.querySelector('[name="brand"]').addEventListener("change", applyBrandDropdown);
    document.addEventListener('DOMContentLoaded', afterDocumentLoads);
}


//TEDST
//TODO MOVE THEM IN CREATE VIEW FILE.
let myData = [
    ['Аудио, видео, навигации', 'CD Чейнджъри'],
    ['Аудио, видео, навигации', 'DVD и TV приемници'],
    ['Аудио, видео, навигации', 'GPS и навигации'],
    ['Аудио, видео, навигации', 'Hands Free и bluetooth микрофони'],
    ['Аудио, видео, навигации', 'Касетофони'],
    ['Аудио, видео, навигации', 'Високоговорители и тонколони'],
    ['Аудио, видео, навигации', 'Субуфери'],
    ['Аудио, видео, навигации', 'Усилватели'],
    ['Брави, дръжки, ключалки', 'Ръкохватки за таван'],
    ['Брави, дръжки, ключалки', 'Брави на вратите'],
    ['Брави, дръжки, ключалки', 'Брави на багажник'],
    ['Брави, дръжки, ключалки', 'Брави на капак'],
    ['Брави, дръжки, ключалки', 'Ключалки'],
];


let brandsModelsData = [
    ['AUDI', 'A1'],
    ['AUDI', 'A3'],
    ['AUDI', 'A4'],
    ['AUDI', 'A5'],
    ['AUDI', 'A6'],
    ['AUDI', 'A7'],
    ['AUDI', 'A8'],
    ['AUDI', 'TT'],
    ['AUDI', 'Q2'],
    ['AUDI', 'Q3'],
    ['AUDI', 'Q5'],
    ['AUDI', 'Q7'],
    ['AUDI', 'Q8'],
    ['ALFA ROMEO', '4C'],
    ['ALFA ROMEO', '4C Spider'],
    ['ALFA ROMEO', 'Giulia'],
    ['ALFA ROMEO', 'Giuletta'],
    ['ALFA ROMEO', 'Stelvio'],
    ['ALFA ROMEO', '145'],
    ['ALFA ROMEO', '146'],
    ['ALFA ROMEO', '147'],
    ['ALFA ROMEO', '155'],
    ['ALFA ROMEO', '156'],
    ['ALFA ROMEO', '159'],
    ['ALFA ROMEO', '164'],
    ['ALFA ROMEO', '166'],

]


function makeDropDown(data, level1Filter, applyData) {

    const filteredArray = data.filter(r => r[0] === level1Filter);
    const uniqueOptions = new Set();
    filteredArray.forEach(r => uniqueOptions.add(r[1]));

    const uniqueList = [...uniqueOptions];
    const selectLevel2 = applyData;
    selectLevel2.innerHTML = '';
    uniqueList.forEach(item => {
        const option = document.createElement('option');
        option.textContent = item;
        selectLevel2.appendChild(option);
    });
}


function applyDropdown() {
    const selectCategoryValue = document.querySelector('[name="category"]').value;
    const applyTypesData = document.querySelector('[name="type"]');
    makeDropDown(myData, selectCategoryValue, applyTypesData);

}

function afterDocumentLoads() {
    applyDropdown();
}

function applyBrandDropdown() {
    const selectedBrand = document.querySelector('[name="brand"]').value;
    const applyModelsData = document.querySelector('[name="model"]');

    makeDropDown(brandsModelsData, selectedBrand, applyModelsData);
}

