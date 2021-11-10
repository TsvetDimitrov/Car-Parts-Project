import { html } from '../../node_modules/lit-html/lit-html.js';
const homeTemplate = () => html `
<div class="inner">
    <div class="homepage-font-picture"></div>

    <div class="homepage-wrapper">
        <div class="homepage-grid">
            <div class="sidenav">
                <div class="category-sidenav-header">
                    Категории
                </div>
                <div class="category-sidenav-header">
                    <a href="/products">
                        Последно добавени
                    </a>
                </div>
                <div class="search">
                    <div class="search-field">
                        <input type="text" name="searchCategory" placeholder="Намерете категория">
                    </div>
                </div>
                <div class="categories">
                    <div class="category">
                        <a href="/products/audio-video-navigacii">
                            <img src="/images/audio&Navigations.jpg" alt="Аудио, видео, навигации">
                            <span>Аудио, видео, навигации</span>
                        </a>
                        <div class="dropdown">
                            <div class="title title-small-dark-strong">Аудио, видео, навигации</div>
                            <div class="children">
                                <div class="column">
                                    <a href="/products/cd-cheindjyri" class="category-child" data-value="300">CD
                                        Чейнджъри</a>
                                    <a href="/products/dvd-tv-priemnici" class="category-child" data-value="300">DVD и TV приемници</a>
                                    <a href="/products/gps-i-navigacii" class="category-child" data-value="300">GPS и навигации</a>
                                    <a href="/products/hangsfree-i-bluetooth-mikrofoni" class="category-child" data-value="300">Hands Free и bluetooth
                                        микрофони</a>
                                    <a href="/products/kasetofoni" class="category-child" data-value="300">Касетофони</a>
                                    <a href="/products/visokogovoriteli-i-tonkoloni" class="category-child" data-value="300">Високоговорители и
                                        тонколони</a>
                                    <a href="/products/subuferi" class="category-child" data-value="300">Субуфери</a>
                                    <a href="/products/usilvateli" class="category-child" data-value="300">Усилватели</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="category">
                        <a href="#">
                            <img src="/images/car-handles.jpg" alt="Брави, дръжки, ключалки">
                            <span>Брави, дръжки, ключалки</span>
                        </a>
                        <div class="dropdown">
                            <div class="title title-small-dark-strong">Брави, дръжки, ключалки</div>
                            <div class="children">
                                <div class="column">
                                    <a href="/products/rukohvatki-za-tavan" class="category-child" data-value="300">Ръкохватки за таван</a>
                                    <a href="/products/bravi-na-vratite" class="category-child" data-value="300">Брави на вратите</a>
                                    <a href="/products/bravi-na-bagajnik" class="category-child" data-value="300">Брави на багажник</a>
                                    <a href="/products/bravi-na-kapak" class="category-child" data-value="300">Брави на капак</a>
                                    <a href="/products/kluchalki" class="category-child" data-value="300">Ключалки</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="category">
                        <a href="#">
                            <img src="/images/inside-items.jpg" alt="Вътрешно оборудване">
                            <span>Вътрешно оборудване</span>
                        </a>
                        <div class="dropdown">
                            <div class="title title-small-dark-strong">Вътрешно оборудване</div>
                            <div class="children">
                                <div class="column">
                                    <a href="/products/airbag" class="category-child" data-value="300">AirBag</a>
                                    <a href="/products/sedalki" class="category-child" data-value="300">Седалки</a>
                                    <a href="/products/sennici" class="category-child" data-value="300">Сенници</a>
                                    <a href="/products/pepelnici" class="category-child" data-value="300">Пепелници</a>
                                    <a href="/products/svetlini" class="category-child" data-value="300">Светлини</a>
                                    <a href="/products/jabki" class="category-child" data-value="300">Жабки</a>
                                    <a href="/products/pedali" class="category-child" data-value="300">Педали</a>
                                    <a href="/products/parno" class="category-child" data-value="300">Парно</a>
                                </div>

                                <div class="separator"></div>
                                <div class="column">
                                    <a href="/products/butoni-i-kopcheta" class="category-child" data-value="300">Бутони и копчета</a>
                                    <a href="/products/podlakatnici" class="category-child" data-value="300">Подлакътници</a>
                                    <a href="/products/lostove-za-ruchna-spirachka" class="category-child" data-value="300">Лостове за ръчна
                                        спирачка</a>
                                    <a href="/products/volani" class="category-child" data-value="300">Волани</a>
                                    <a href="/products/kilometraji" class="category-child" data-value="300">Километражи</a>
                                    <a href="/products/plafoni" class="category-child" data-value="300">Плафони</a>
                                    <a href="/products/stelki" class="category-child" data-value="300">Стелки</a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="category">
                        <a href="#">
                            <img src="/images/fuel-system-img.png" alt="Горивна система">
                            <span>Горивна система</span>
                        </a>
                        <div class="dropdown">
                            <div class="title title-small-dark-strong">Горивна система</div>
                            <div class="children">
                                <div class="column">
                                    <a href="/products/benzinovi-pompi" class="category-child" data-value="300">Бензинови Помпи</a>
                                    <a href="/products/vsmukaltelni-klapani" class="category-child" data-value="300">Всмукателни клапани</a>
                                    <a href="/products/GNP" class="category-child" data-value="300">ГНП</a>
                                    <a href="/products/gorivni-reiki" class="category-child" data-value="300">Горивни рейки</a>
                                    <a href="/products/duzi-benzin" class="category-child" data-value="300">Дюзи бензин</a>
                                    <a href="/products/duzi-dizel" class="category-child" data-value="300">Дюзи дизел</a>
                                    <a href="/products/rezervoari" class="category-child" data-value="300">Резервоари</a>
                                    <a href="/products/nivomeri" class="category-child" data-value="300">Нивомери</a>
                                </div>
                                <div class="separator"></div>

                                <div class="column">
                                    <a href="/products/karburatori" class="category-child" data-value="300">Карбуратори</a>
                                    <a href="/products/podgrevni-sveshti" class="category-child" data-value="300">Подгревни свещи</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="category">
                        <a href="#">
                            <img src="/images/tires-jpg.jpg" alt="Гуми и джанти">
                            <span>Гуми и джанти (2-ра употреба)</span>
                        </a>
                        <div class="dropdown">
                            <div class="title title-small-dark-strong">Гуми и джанти (2-ра употреба)</div>
                            <div class="children">
                                <div class="column">
                                    <a href="/products/aluminievi-djanti" class="category-child" data-value="300">Алуминиеви джанти</a>
                                    <a href="/products/jelezni-djanti" class="category-child" data-value="300">Железни джанти</a>
                                    <a href="/products/boltove-za-djanti" class="category-child" data-value="300">Болтове за джанти</a>
                                    <a href="/products/sekretni-boltove-za-djanti" class="category-child" data-value="300">Секретни болтове за
                                        джанти</a>
                                    <a href="/products/letni-gumi" class="category-child" data-value="300">Летни гуми</a>
                                    <a href="/products/zimni-gumi" class="category-child" data-value="300">Зимни гуми</a>
                                    <a href="/products/vsesezonni-gumi" class="category-child" data-value="300">Всесезонни гуми</a>
                                    <a href="/products/kapachki-za-djanti" class="category-child" data-value="300">Капачки за джанти</a>
                                </div>
                                <div class="separator"></div>
                                <div class="column">
                                    <a href="/products/flanci" class="category-child" data-value="300">Фланци</a>
                                    <a href="/products/rezervni-gumi" class="category-child" data-value="300">Резервни гуми</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="category">
                        <a href="#">
                            <img src="/images/corvette-engine.jpg" alt="Двигател и оборудване">
                            <span>Двигател и оборудване</span>
                        </a>
                        <div class="dropdown">
                            <div class="title title-small-dark-strong">Двигател и оборудване</div>
                            <div class="children">
                                <div class="column">
                                    <a href="/products/butala-rizi-bieli" class="category-child" data-value="300">Бутала, ризи, биели</a>
                                    <a href="/products/kolqnovi-valove" class="category-child" data-value="300">Колянови валове</a>
                                    <a href="/products/vakuum-pompi" class="category-child" data-value="300">Вакуум помпи</a>
                                    <a href="/products/glavi" class="category-child" data-value="300">Глави</a>
                                    <a href="/products/karteri" class="category-child" data-value="300">Картери</a>
                                    <a href="/products/masleni-shteki" class="category-child" data-value="300">Маслени щеки</a>
                                    <a href="/products/turbini" class="category-child" data-value="300">Турбини</a>

                                </div>

                                <div class="separator"></div>

                                <div class="column">
                                    <a href="/products/hidravlichni-pompi" class="category-child" data-value="300">Хидравлични помпи</a>
                                    <a href="/products/celi-dvigateli" class="category-child" data-value="300">Цели двигатели</a>
                                    <a href="/products/garnituri-uplatneniq" class="category-child" data-value="300">Гарнитури, уплътнения</a>
                                    <a href="/products/rolki-i-remaci" class="category-child" data-value="300">Ролки и ремъци</a>
                                    <a href="/products/masleni-gorivni-i-vyzdushni-filtri" class="category-child" data-value="300">Маслени, горивни и въздушни
                                        филтри</a>
                                    <a href="/products/masleni-pompi" class="category-child" data-value="300">Маслени помпи</a>
                                    <a href="/products/masleni-ohladiteli" class="category-child" data-value="300">Маслени охладители</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="category">
                        <a href="#">
                            <img src="/images/car-battery.jpg" alt="Ел. оборудване">
                            <span>Ел. оборудване</span>
                        </a>
                        <div class="dropdown">
                            <div class="title title-small-dark-strong">Ел. оборудване</div>
                            <div class="children">
                                <div class="column">
                                    <a href="/products/akumulatori" class="category-child" data-value="300">Акумулатори</a>
                                    <a href="/products/alternatori" class="category-child" data-value="300">Алтернатори</a>
                                    <a href="/products/bobini" class="category-child" data-value="300">Бобини</a>
                                    <a href="/products/bushonni-tabla-i-bushoni" class="category-child" data-value="300">Бушонни табла/ Бушони</a>
                                    <a href="/products/vakuum-mashinki-za-centralno" class="category-child" data-value="300">Вакуум машинки за
                                        централно</a>
                                    <a href="/products/datchici-za-kolqnov-val" class="category-child" data-value="300">Датчици за колянов вал</a>

                                </div>

                                <div class="separator"></div>

                                <div class="column">
                                    <a href="/products/datchici-senzori-i-shalteri" class="category-child" data-value="300">Датчици, сензори и
                                        шалтери</a>
                                    <a href="/products/instalacii-okabelqvane" class="category-child" data-value="300">Инсталации, окабеляване</a>
                                    <a href="/products/starteri" class="category-child" data-value="300">Стартери</a>
                                    <a href="/products/potenciometyr-na-pedala" class="category-child" data-value="300">Потенциометър на педала</a>
                                    <a href="/products/tempomat-avtopilot" class="category-child" data-value="300">Темпомат/Автопилот</a>
                                    <a href="/products/lentovi-kabeli" class="category-child" data-value="300">Лентови кабели</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="category">
                        <a href="#">
                            <img src="/images/muffler.jpg" alt="Изпускателна система">
                            <span>Изпускателна система</span>
                        </a>
                        <div class="dropdown">
                            <div class="title title-small-dark-strong">Изпускателна система</div>
                            <div class="children">
                                <div class="column">
                                    <a href="/products/gurneta-generacii" class="category-child" data-value="300">Гърнета, генерации</a>
                                    <a href="/products/izpuskatelni-trybi" class="category-child" data-value="300">Изпускателни тръби</a>
                                    <a href="/products/katalizatori-novi" class="category-child" data-value="300">Катализатори(нови)</a>
                                    <a href="/products/lamda-sondi" class="category-child" data-value="300">Ламбда сонди</a>
                                    <a href="/products/meki-vrazki" class="category-child" data-value="300">Меки връзки</a>
                                    <a href="/products/prujini-darjachi-za-garneta" class="category-child" data-value="300">Пружини, държачи за
                                        гърнета</a>
                                    <a href="/products/filtar-za-tvardi-chastici" class="category-child" data-value="300">Филтър за твърди частици</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="category">
                        <a href="#">
                            <img src="/images/kazanche.jpg" alt="Казанчета">
                            <span>Казанчета</span>
                        </a>
                        <div class="dropdown">
                            <div class="title title-small-dark-strong">Казанчета</div>
                            <div class="children">
                                <div class="column">
                                    <a href="/products/kazancheta-za-antifriz" class="category-child" data-value="300">Казанчета за антифриз</a>
                                    <a href="/products/kazancheta-za-spirachna-technost" class="category-child" data-value="300">Казанчета за спирачна
                                        течност</a>
                                    <a href="/products/kazancheta-za-hidravlichna-technost" class="category-child" data-value="300">Казанчета за хидравлична
                                        течност</a>
                                    <a href="/products/kazancheta-za-chistachki" class="category-child" data-value="300">Казанчета за чистачки</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="category">
                        <a href="#">
                            <img src="/images/engine-computer.jpg" alt="Компютри, модули и релета">
                            <span>Компютри, модули и релета</span>
                        </a>
                        <div class="dropdown">
                            <div class="title title-small-dark-strong">Компютри, модули и релета</div>
                            <div class="children">
                                <div class="column">
                                    <a href="/products/komputri-za-ABS" class="category-child" data-value="300">Компютри за ABS</a>
                                    <a href="/products/komputri-za-okachvane" class="category-child" data-value="300">Компютри за окачване</a>
                                    <a href="/products/komputri-za-dvigatel" class="category-child" data-value="300">Компютри за двигател</a>
                                    <a href="/products/komputri-za-skorosti" class="category-child" data-value="300">Компютри за скорости</a>
                                    <a href="/products/moduli" class="category-child" data-value="300">Модули</a>
                                    <a href="/products/releta" class="category-child" data-value="300">Релета</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="category">
                        <a href="#">
                            <img src="/images/car-hose.jpg" alt="Маркучи, тръбички и колектори">
                            <span>Маркучи, тръбички и колектори</span>
                        </a>
                        <div class="dropdown">
                            <div class="title title-small-dark-strong">Маркучи, тръбички и колектори</div>
                            <div class="children">
                                <div class="column">
                                    <a href="/products/gorivni-markuchi-i-trabi" class="category-child" data-value="300">Горивни маркучи и тръби</a>
                                    <a href="/products/gofrirani-markuchi" class="category-child" data-value="300">Гофрирани маркучи</a>
                                    <a href="/products/kolektori-vsmukatelni-i-izpuskatelni" class="category-child" data-value="300">Колектори всмукателни и
                                        изпускателни</a>
                                    <a href="/products/markuchi-za-klimatik" class="category-child" data-value="300">Маркучи за климатик</a>
                                    <a href="/products/markuchi-za-turbo" class="category-child" data-value="300">Маркучи за турбо</a>
                                    <a href="/products/markuchi-za-maslo-i-hidravlika" class="category-child" data-value="300">Маркучи за масло и
                                        хидравлика</a>
                                    <a href="/products/markuchi-za-antifriz" class="category-child" data-value="300">Маркучи за антифриз</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="category">
                        <a href="#">
                            <img src="/images/kori-uplatneniq.jpg" alt="Кори, уплътнения и пластмаси">
                            <span>Кори, уплътнения и пластмаси</span>
                        </a>
                        <div class="dropdown">
                            <div class="title title-small-dark-strong">Кори, уплътнения и пластмаси</div>
                            <div class="children">
                                <div class="column">
                                    <a href="/products/duhalki-za-parno" class="category-child" data-value="300">Духалки за парно</a>
                                    <a href="/products/kori-pod-dvigatel-i-pod-kupeto" class="category-child" data-value="300">Кори под двигател и под
                                        купето</a>
                                    <a href="/products/kori-bagajnik" class="category-child" data-value="300">Кори багажник</a>
                                    <a href="/products/kori-na-vratite" class="category-child" data-value="300">Кори на вратите</a>
                                    <a href="/products/plastmasovi-kori-i-elementi" class="category-child" data-value="300">Пласмасови кори и
                                        елементи</a>
                                    <a href="/products/stelki" class="category-child" data-value="300">Стелки</a>
                                    <a href="/products/uplatneniq-za-vrati-bagajnici-i-drugi" class="category-child" data-value="300">Уплътнения за врати,
                                        багажници и
                                        други</a>
                                    <a href="/products/uplatneniq-za-stykla" class="category-child" data-value="300">Уплътнения за стъкла</a>
                                    <a href="/products/shtori-i-mehanizmi" class="category-child" data-value="300">Щори и механизми</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="category">
                        <a href="#">
                            <img src="/images/motorcheta.jpg" alt="Моторчета, машинки и механизми">
                            <span>Моторчета, машинки и механизми</span>
                        </a>
                        <div class="dropdown">
                            <div class="title title-small-dark-strong">Моторчета, машинки и механизми</div>
                            <div class="children">
                                <div class="column">
                                    <a href="/products/ventilatori-motorcheta-za-parno" class="category-child" data-value="300">Вентилатори, моторчета за
                                        парно</a>
                                    <a href="/products/styklopovdigachi" class="category-child" data-value="300">Стъклоповдигачи</a>
                                    <a href="/products/jila-za-vrati-i-kapaci" class="category-child" data-value="300">Жила за врати и капаци</a>
                                    <a href="/products/jila-za-gaz" class="category-child" data-value="300">Жила за газ</a>
                                    <a href="/products/motorcheta-za-chistachki" class="category-child" data-value="300">Моторчета за чистачки</a>
                                    <a href="/products/motorcheta-za-elektricheska-reika" class="category-child" data-value="300">Моторчета за електрическа
                                        рейка</a>
                                    <a href="/products/pompichka-za-chistachki" class="category-child" data-value="300">Помпичка за чистачки</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="category">
                        <a href="#">
                            <img src="/images/shock-absorber.jpg" alt="Окачване и кормилна уредба">
                            <span>Окачване и кормилна уредба</span>
                        </a>
                        <div class="dropdown">
                            <div class="title title-small-dark-strong">Окачване и кормилна уредба</div>
                            <div class="children">
                                <div class="column">
                                    <a href="/products/amortisiori" class="category-child" data-value="300">Амортисьори</a>
                                    <a href="/products/bialetki" class="category-child" data-value="300">Биалетки</a>
                                    <a href="/products/dempfer" class="category-child" data-value="300">Демпфер</a>
                                    <a href="/products/zadni-mostove" class="category-child" data-value="300">Задни мостове</a>
                                    <a href="/products/kareta" class="category-child" data-value="300">Карета</a>
                                    <a href="/products/poluoski" class="category-child" data-value="300">Полуоски</a>
                                    <a href="/products/komplekt-okachvane" class="category-child" data-value="300">Комплект окачване</a>

                                </div>

                                <div class="separator"></div>

                                <div class="column"> <a href="/products/komplekt-vyzdushno-okachvane" class="category-child" data-value="300">Комплект
                                        въздушно
                                        окачване</a>
                                    <a href="/products/nosachi-shtangi" class="category-child" data-value="300">Носачи, щанги</a>
                                    <a href="/products/prujini" class="category-child" data-value="300">Пружини</a>
                                    <a href="/products/predni-mostove" class="category-child" data-value="300">Предни мостове</a>
                                    <a href="/products/stabilizirashti-shtangi" class="category-child" data-value="300">Стабилизиращи шанги</a>
                                    <a href="/products/resiori" class="category-child" data-value="300">Ресьори</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="category">
                        <a href="#">
                            <img src="/images/cooling.jpg" alt="Охладителна и климатична система">
                            <span>Охладителна и климатична система</span>
                        </a>
                        <div class="dropdown">
                            <div class="title title-small-dark-strong">Охладителна и климатична система</div>
                            <div class="children">
                                <div class="column">
                                    <a href="/products/visko-syediniteli" class="category-child" data-value="300">
                                        Виско съединители
                                    </a>
                                    <a href="/products/vodni-pompi" class="category-child" data-value="300">Водни помпи</a>
                                    <a href="/products/vodni-radiatori" class="category-child" data-value="300">Водни радиатори</a>
                                    <a href="/products/kompresori-za-klimatik" class="category-child" data-value="300">Компресори за климатик</a>
                                    <a href="/products/interkuleri" class="category-child" data-value="300">Интеркулери</a>
                                    <a href="/products/masleni-radiatori" class="category-child" data-value="300">Маслени радиатори</a>
                                    <a href="/products/termostati-konzoli-korpusi" class="category-child" data-value="300">Термостати, конзоли,
                                        корпуси</a>

                                </div>

                                <div class="separator"></div>

                                <div class="column"> <a href="/products/motorcheta-za-klapi-na-parno" class="category-child" data-value="300">Моторчета
                                        за
                                        клапи
                                        на
                                        парно</a>
                                    <a href="/products/perki-za-ohlajdane" class="category-child" data-value="300">Перки за охлаждане</a>
                                    <a href="/products/pechki" class="category-child" data-value="300">Печки</a>
                                    <a href="/products/radiatori-za-parno" class="category-child" data-value="300">Радиатори за парно</a>
                                    <a href="/products/reostati" class="category-child" data-value="300">Реостати</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="category">
                        <a href="#">
                            <img src="/images/svetlini.jpg" alt="Светлини">
                            <span>Светлини</span>
                        </a>
                        <div class="dropdown">
                            <div class="title title-small-dark-strong">Светлини</div>
                            <div class="children">
                                <div class="column">
                                    <a href="/products/ksenon-krushki-i-balasti" class="category-child" data-value="300">Ксенон крушки и баласти</a>
                                    <a href="/products/migachi-gabariti-i-svetlootraziteli" class="category-child" data-value="300">Мигачи, габарити и
                                        светлоотразители</a>
                                    <a href="/products/reflektori" class="category-child" data-value="300">Рефлектори</a>
                                    <a href="/products/farove-za-magla" class="category-child" data-value="300">Фарове за мъгла</a>
                                    <a href="/products/stopove-i-gabariti" class="category-child" data-value="300">Стопове и габарити</a>
                                    <a href="/products/farove" class="category-child" data-value="300">Фарове</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="category">
                        <a href="#">
                            <img src="/images/skorosti-transmisiya.jpg" alt="Скорости и трансмисия">
                            <span>Скорости и трансмисия</span>
                        </a>
                        <div class="dropdown">
                            <div class="title title-small-dark-strong">Скорости и трансмисия</div>
                            <div class="children">
                                <div class="column">
                                    <a href="/products/diferenciali" class="category-child" data-value="300">Диференциали</a>
                                    <a href="/products/jila-za-syediniteli" class="category-child" data-value="300">Жила за съединители</a>
                                    <a href="/products/lageri-i-shtangi-za-skorosti" class="category-child" data-value="300">Лагери и щанги за
                                        скорости</a>
                                    <a href="/products/kardani-i-kareta" class="category-child" data-value="300">Кардани и карета</a>
                                    <a href="/products/mahovici" class="category-child" data-value="300">Маховици</a>
                                    <a href="/products/poluoski" class="category-child" data-value="300">Полуоски</a>
                                    <a href="/products/pompi-za-suedinitel-i-remontni-komplekti" class="category-child" data-value="300">Помпи за съединител и
                                        ремонтни
                                        комплекти</a>
                                    <a href="/products/razdatki" class="category-child" data-value="300">Раздатки</a>
                                    <a href="/products/skorosti-avtomatichni" class="category-child" data-value="300">Скорости - автоматични</a>
                                </div>
                                <div class="separator"></div>
                                <div class="column">
                                    <a href="/products/skorosti-rychni" class="category-child" data-value="300">Скорости - ръчни</a>
                                    <a href="/products/syediniteli-ferodovi-i-pritiskvatelni-diskove" class="category-child" data-value="300">Съединители, феродови и
                                        притисквателни
                                        дискове</a>
                                    <a href="/products/hidrotransformatori" class="category-child" data-value="300">Хидротрансформатори</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="category">
                        <a href="#">
                            <img src="/images/spirachna-sistema.jpg" alt="Спирачна система">
                            <span>Спирачна система</span>
                        </a>
                        <div class="dropdown">
                            <div class="title title-small-dark-strong">Спирачна система</div>
                            <div class="children">
                                <div class="column">
                                    <a href="/products/ABS-DSC-ASR" class="category-child" data-value="300">ABS, DSC, ASR</a>
                                    <a href="/products/diskove" class="category-child" data-value="300">Дискове</a>
                                    <a href="/products/regulator-na-spirachna-sila" class="category-child" data-value="300">Регулатор на спирачна
                                        сила</a>
                                    <a href="/products/servo" class="category-child" data-value="300">Серво</a>
                                    <a href="/products/spirachni-aparati-i-komplekti" class="category-child" data-value="300">Спирачни апарати и
                                        комплекти</a>
                                    <a href="/products/spirachni-barabani-ferodo" class="category-child" data-value="300">Спирачни барабани,
                                        феродо</a>
                                    <a href="/products/spirachni-markuchi-i-elementi" class="category-child" data-value="300">Спирачни маркучи и
                                        елементи</a>
                                    <a href="/products/spirachni-pompi-i-remontni-komplekti" class="category-child" data-value="300">Спирачни помпи и ремонтни
                                        комлекти</a>
                                    <a href="/products/spirachni-cilindri-i-remontni-komplekti" class="category-child" data-value="300">Спирачни цилиндри и ремонтни
                                        комлекти</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="category">
                        <a href="#">
                            <img src="/images/tamponi-manshoni-lapi-stoyki.jpg" alt="Тампони, маншони, лапи и стойки">
                            <span>Тампони, маншони, лапи и стойки</span>
                        </a>
                        <div class="dropdown">
                            <div class="title title-small-dark-strong">Тампони, маншони, лапи и стойки</div>
                            <div class="children">
                                <div class="column">
                                    <a href="/products/lapi-za-dvigatel" class="category-child" data-value="300">Лапи за двигател</a>
                                    <a href="/products/tamponi-za-dvigatel" class="category-child" data-value="300">Тампони за двигател</a>
                                    <a href="/products/tamponi-za-nosachi" class="category-child" data-value="300">Тампони за носачи</a>
                                    <a href="/products/tamponi-za-mosta" class="category-child" data-value="300">Тампони на моста</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="category">
                        <a href="#">
                            <img src="/images/chasti-po-kupeto-edrogabaritni.jpg" alt="Части за купето - едрогабаритни">
                            <span>
                                Части за купето - едрогабаритни
                            </span>
                        </a>
                        <div class="dropdown">
                            <div class="title title-small-dark-strong">Части за купето - едрогабаритни</div>
                            <div class="children">
                                <div class="column">
                                    <a href="/products/bagajnici-za-tavan-relsi-za-bagaj" class="category-child" data-value="300">Багажници за таван, релси за
                                        багаж</a>
                                    <a href="/products/broni-zadni" class="category-child" data-value="300">Брони - задни</a>
                                    <a href="/products/broni-predni" class="category-child" data-value="300">Брони - предни</a>
                                    <a href="/products/buferi-dyrjachi-i-osnovi-za-broni" class="category-child" data-value="300">Буфери, държачи и основи за
                                        брони</a>
                                    <a href="/products/vrati" class="category-child" data-value="300">Врати</a>
                                    <a href="/products/dekorativni-maski-i-reshetki" class="category-child" data-value="300">Декоративни маски и
                                        решетки</a>
                                    <a href="/products/kalnici" class="category-child" data-value="300">Калници</a>
                                    <a href="/products/kapaci-predni" class="category-child" data-value="300">Капаци - предни</a>
                                    <a href="/products/kapaci-zadni" class="category-child" data-value="300">Капаци - задни</a>
                                </div>
                                <div class="separator"></div>
                                <div class="column">
                                    <a href="/products/maski-gredi-i-koloni" class="category-child" data-value="300">Маски, греди и колони</a>
                                    <a href="/products/podkalnici-i-kalobrani" class="category-child" data-value="300">Подкалници и калобрани</a>
                                    <a href="/products/rolbari" class="category-child" data-value="300">Ролбари</a>
                                    <a href="/products/spoileri" class="category-child" data-value="300">Спойлери</a>
                                    <a href="/products/stykla-zadni" class="category-child" data-value="300">Стъкла задни</a>
                                    <a href="/products/stykla-chelni" class="category-child" data-value="300">Стъкла челни</a>
                                    <a href="/products/stykla-stranichni" class="category-child" data-value="300">Стъкла странични</a>
                                    <a href="/products/teglichi-i-oborudvane" class="category-child" data-value="300">Тегличи и оборудване</a>
                                    <a href="/products/shibedah" class="category-child" data-value="300">Шибедах</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="category">
                        <a href="#">
                            <img src="/images/chasti-po-kupeto-malogabaritni.jpg" alt="Части за купето - малогабаритни">
                            <span>
                                Части за купето - малогабаритни
                            </span>
                        </a>
                        <div class="dropdown">
                            <div class="title title-small-dark-strong">Части за купето - малогабаритни</div>
                            <div class="children">
                                <div class="column">
                                    <a href="/products/amortisiori-za-kapaci-vrati-i-jabki" class="category-child" data-value="300">Амортисьори за капаци, врати
                                        и
                                        жабки</a>
                                    <a href="/products/anteni" class="category-child" data-value="300">Антени</a>
                                    <a href="/products/vratichki-za-rezervoar" class="category-child" data-value="300">Вратички за резервоар</a>
                                    <a href="/products/vynshni-ogledala" class="category-child" data-value="300">Външни огледала</a>
                                    <a href="/products/elementi-po-karoseriqta" class="category-child" data-value="300">Елементи по каросерията</a>
                                    <a href="/products/klaksoni-zumeri-i-sireni" class="category-child" data-value="300">Клаксони, зумери и
                                        сирени</a>
                                    <a href="/products/kuki-za-teglene" class="category-child" data-value="300">Куки за теглене</a>
                                    <a href="/products/laisni-kapachki-i-emblemi" class="category-child" data-value="300">Лайсни, капачки и
                                        емблеми</a>
                                    <a href="/products/mehanizym-i-aksesoari-za-rezervna-guma" class="category-child" data-value="300">Механизъм и аксесоари за
                                        резервна
                                        гума</a>
                                    <a href="/products/mehanizmi-i-chistachki-za-farovete" class="category-child" data-value="300">Механизми и чистачки за
                                        фаровете</a>
                                </div>
                                <div class="separator"></div>
                                <div class="column">
                                    <a href="/products/panti" class="category-child" data-value="300">Панти</a>
                                    <a href="/products/parktronici" class="category-child" data-value="300">Паркторници</a>
                                    <a href="/products/pragove-vynshni" class="category-child" data-value="300">Прагове - външни</a>
                                    <a href="/products/pryskalki-farove-stykla" class="category-child" data-value="300">Пръскалки - фарове,
                                        стъкла</a>
                                    <a href="/products/chistachki-i-ramena-za-chistachki" class="category-child" data-value="300">Чистачки и рамена за
                                        чистачки</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="banners">
                    <img src="/images/reklamatuk.png" class="desktop">
                </div>
            </div>


            <div class="homePageModel">
                <div class="content-data content-data-4-columns but-only-2">
                    <h1 class="headerModel">Търсене по марка и модел</h1>
                    <a href="/products/brand/abarth" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;"
                            data-src="/images/abarth.png" data-alt="ABARTH" width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/abarth.png">
                            <source srcset="/images/abarth.png">
                            <img alt="ABARTH">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                ABARTH
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/alfa-romeo" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;"
                            data-src="/images/alfa-romeo.png" data-alt="alfa-romeo" width="130" height="130"
                            data-loaded="true">
                            <source type="image/webp" srcset="/images/alfa-romeo.webp">
                            <source srcset="/images/alfa-romeo.png">
                            <img alt="alfa-romeo">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                ALFA ROMEO
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/audi" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="audi"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/audi.webp">
                            <img alt="audi">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                AUDI
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/bmw" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="BMW"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/bmw.webp">
                            <img alt="BMW">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                BMW
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/chevrolet" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="chevrolet"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/chevrolet.webp">
                            <img alt="chevrolet">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                CHEVROLET
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/chrysler" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="chrysler"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/chrysler.webp">
                            <img alt="chrysler">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                CHRYSLER
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/CITROËN" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="citroËn"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/citroËn.webp">
                            <img alt="citroËn">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                CITROËN
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/dacia" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="dacia"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/dacia.webp">
                            <img alt="dacia">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                DACIA
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/daewoo" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="daewoo"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/daewoo.webp">
                            <img alt="daewoo">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                DAEWOO
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/daihatsu" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="daihatsu"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/daihatsu.webp">
                            <img alt="daihatsu">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                DAIHATSU
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/fiat" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="fiat"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/fiat.webp">
                            <img alt="fiat">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                FIAT
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/ford" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="FORD"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/ford.webp">
                            <img alt="FORD">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                FORD
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/honda" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="HONDA"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/honda.webp">
                            <img alt="HONDA">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                HONDA
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/hyundai" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="HYUNDAI"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/hyundai.webp">
                            <img alt="HYUNDAI">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                HYUNDAI
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/infiniti" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="INFINITI"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/infiniti.webp">
                            <img alt="INFINITI">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                INFINITI
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/iveco" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="IVECO"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/iveco.webp">
                            <img alt="IVECO">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                IVECO
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/jeep" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="JEEP"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/jeep.webp">
                            <img alt="JEEP">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                JEEP
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/kia" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="KIA"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/kia.webp">
                            <img alt="KIA">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                KIA
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/lancia" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="LANCIA"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/lancia.webp">
                            <img alt="LANCIA">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                LANCIA
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/land-rover" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="LAND-ROVER"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/land-rover.webp">
                            <img alt="LAND-ROVER">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                LAND-ROVER
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/lexus" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="LEXUS"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/lexus.webp">
                            <img alt="LEXUS">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                LEXUS
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/mazda" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="MAZDA"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/mazda.webp">
                            <img alt="MAZDA">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                MAZDA
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/mercedes-benz" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="MERCEDES-BENZ"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/mercedes-benz.webp">
                            <img alt="MERCEDES-BENZ">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                MERCEDES-BENZ
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/mini" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="MINI"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/mini.webp">
                            <img alt="MINI">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                MINI
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/mitsubishi" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="MITSUBISHI"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/mitsubishi.webp">
                            <img alt="MITSUBISHI">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                MITSUBISHI
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/nissan" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="NISSAN"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/nissan.webp">
                            <img alt="NISSAN">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                NISSAN
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/opel" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="OPEL"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/opel.webp">
                            <img alt="OPEL">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                OPEL
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/peugeot" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="PEUGEOT"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/peugeot.webp">
                            <img alt="PEUGEOT">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                PEUGEOT
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/porsche" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="PORSCHE"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/porsche.webp">
                            <img alt="PORSCHE">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                PORSCHE
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/renault" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="RENAULT"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/renault.webp">
                            <img alt="RENAULT">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                RENAULT
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/rover" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="ROVER"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/rover.webp">
                            <img alt="ROVER">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                ROVER
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/saab" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="SAAB"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/saab.webp">
                            <img alt="SAAB">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                SAAB
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/seat" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="SEAT"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/seat.webp">
                            <img alt="SEAT">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                SEAT
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/skoda" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="SKODA"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/skoda.webp">
                            <img alt="SKODA">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                SKODA
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/smart" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="SMART"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/smart.webp">
                            <img alt="SMART">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                SMART
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/subaru" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="SUBARU"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/subaru.webp">
                            <img alt="SUBARU">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                SUBARU
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/suzuki" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="SUZUKI"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/suzuki.webp">
                            <img alt="SUZUKI">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                SUZUKI
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/toyota" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="TOYOTA"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/toyota.webp">
                            <img alt="TOYOTA">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                TOYOTA
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/volvo" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="VOLVO"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/volvo.webp">
                            <img alt="VOLVO">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                VOLVO
                            </div>
                        </div>
                    </a>
                    <a href="/products/brand/volkswagen" class="content-data-item">
                        <picture class="lozad m-auto" style="display: block; min-height: 1rem;" data-alt="VOLKSWAGEN"
                            width="130" height="130" data-loaded="true">
                            <source type="image/webp" srcset="/images/vw.webp">
                            <img alt="VOLKSWAGEN">
                        </picture>
                        <div class="content-data-description">
                            <div class="content-data-title mt-3">
                                Авточасти
                                <br>
                                VOLKSWAGEN
                            </div>
                        </div>
                    </a>
                </div>

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
</div>
`;


export function homePage(ctx) {
    ctx.render(homeTemplate());
    ctx.setFooter();
}