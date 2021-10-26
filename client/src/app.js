import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';


import { logout } from './api/data.js';

import { homePage } from './views/home.js'
import { aboutUsPage } from './views/aboutUs.js';
import { buyoutPage } from './views/buyout/buyout.js';
import { buyoutInfoPage1 } from './views/buyout/info-buyoutPages.js';
import { buyoutInfoPage2 } from './views/buyout/info-buyoutPages.js';
import { loginPage } from './views/login.js';
import { notfound } from './views/notfound404.js';
import { registerPage } from './views/register.js';

const main = document.querySelector('main');
page('/', decorateContext, homePage);
page('/aboutUs', decorateContext, aboutUsPage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/izkupuvane', decorateContext, buyoutPage);
page('/izkupuvane/info', decorateContext, buyoutInfoPage1);
page('/izkupuvane/info2', decorateContext, buyoutInfoPage2);
page('*', decorateContext, notfound);

setUserNav();


page.start();

document.querySelector('.user').addEventListener('click', async () => {
    await logout();
    setUserNav();
    page.redirect('/');
})


function decorateContext(ctx, next) {

    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    ctx.setFooter = setFooter;
    next();
}

function setUserNav() {
    const userId = sessionStorage.getItem('userId');
    const isAdmin = sessionStorage.getItem('isAdmin');
    if (userId != null) {
        document.querySelector('.guest').style.display = 'none';;
        document.querySelector('.user').style.display = 'inline-block';
    } else {
        document.querySelector('.guest').style.display = 'inline-block';
        document.querySelector('.user').style.display = 'none';
    }

    if (isAdmin != null) {
        document.querySelector('.admin').style.display = 'inline-block';
    } else {
        document.querySelector('.admin').style.display = 'none';

    }
}

function setFooter() {
    const footer = document.getElementById('footer');
    footer.style.display = '';
}


//TEDST

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
    const selectCategoryValue = document.getElementById('level11').value;
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

document.getElementById('level11').addEventListener("change", applyDropdown);
document.querySelector('[name="brand"]').addEventListener("change", applyBrandDropdown);
document.addEventListener('DOMContentLoaded', afterDocumentLoads);