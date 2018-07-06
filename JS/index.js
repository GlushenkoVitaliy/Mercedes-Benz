"use strict";

let cars = [
    {
        name: '',
        img: '',
        className: '',
        generation: ''
    },
    {
        name: 'W222',
        className: 'S CLASS',
        generation: 'FOURTH GENERATION',
        information: 'Mercedes-Benz 222 — шестое поколение флагманской серии представительских автомобилей S-класса немецкой марки Mercedes-Benz, выпускающееся с 2013 года. Выпускается в вариантах кузова седан (с укороченной и удлинённой колёсными базами), купе и кабриолет (с 2015 года). Кроме того, имеет высокопроизводительные модификации от подразделения Mercedes-AMG в лице S63 AMG и S65 AMG (оба доступны в кузовах седан, купе и кабриолет), а также наиболее роскошную версию лимузин — Pullman, собранный суббрендом Mercedes-Maybach.',
        image1: '../IMG/S CLASS/4/4 generation_1_cover.jpg',
        image2: '../IMG/S CLASS/4/4 generation_2.jpg',
        image3: '../IMG/S CLASS/4/4 generation_3.jpg',
        image4: '../IMG/S CLASS/4/4 generation_4.jpg'
    },
    {
        name: 'W212',
        className: 'E CLASS',
        generation: 'FOURTH GENERATION',
        information: 'Mercedes-Benz W212 — четвёртое поколение легковых автомобилей E-класса немецкой торговой марки Mercedes-Benz, представленное в 2009 году на Детройтском автосалоне. Внешний вид модели отрабатывался на концепт-каре Mercedes-Benz ConceptFASCINATION, представленном на Парижском моторшоу в 2008 году. Продажи начались в марте 2009 года. Автомобиль включал множество новых технических решений и технологий безопасности, включая системы обнаружения усталости водителя, предупреждения о сходе с полосы движения, а также технологию распознавания дорожных знаков.',
        image1: '../IMG/E CLASS/4/4 generation_1.jpg',
        image2: '../IMG/E CLASS/4/4 generation_2.jpg',
        image3: '../IMG/E CLASS/4/4 generation_3.jpg',
        image4: '../IMG/E CLASS/4/4 generation_4.jpg'

    },
    {
        name: 'W204',
        img: '../IMG/C CLASS/4-rd generation_1.jpg',
        className: 'C CLASS',
        generation: 'FOURTH GENERATION',
        information: 'Mercedes-Benz W204 — 3-е поколение среднеразмерных престижных автомобилей С-класса немецкого автопроизводителя Mercedes-Benz. Mercedes-Benz W204 получил колоссальный успех на рынке. Он стал вторым самым продаваемым престижным автомобилем начального уровня в Канаде и США после BMW E90 (3-й серии), а также наиболее популярным седаном в средней ценовой категории в Мексике. В 2011 году на Токийском автосалоне C-класс получил звание «импортного автомобиля года» в Японии (второй раз подряд).',
        image1: '../IMG/C CLASS/4/4 generation_1.jpg',
        image2: '../IMG/C CLASS/4/4 generation_2.jpg',
        image3: '../IMG/C CLASS/4/4 generation_3.jpg',
        image4: '../IMG/C CLASS/4/4 generation_4.jpg'
    },
    {
        name: 'W221',
        className: 'S CLASS',
        generation: 'THIRD GENERATION',
        information: 'Mercedes-Benz W221 был впервые показан публике на Франкфуртском автосалоне осенью 2005 года. В экстерьере автомобиля (особенно в больших колёсных арках) явно просматривались мотивы ретро-стайлинга, а также влияние лимузина Maybach W240. Первыми моделями в серии стали S350, S500, S600 и S320 CDI.\n' +
        '\n' +
        'В ноябре 2005 года автомобиль Mercedes-Benz W221 получил награду «Золотой руль 2005». Через год в сентябре была представлена версия купе на базе W221 — новый Mercedes-Benz C216 (CL-класс) — 7 поколение двухдверных автомобилей от немецкого автопроизводителя. ',
        image1: '../IMG/S CLASS/3/3 generation_1.jpg',
        image2: '../IMG/S CLASS/3/3 generation_2.jpg',
        image3: '../IMG/S CLASS/3/3 generation_3.jpg',
        image4: '../IMG/S CLASS/3/3 generation_4.jpg'

    },
    {
        name: 'W211',
        className: 'E CLASS',
        generation: 'THIRD GENERATION',
        information: 'Mercedes-Benz W211 — третье поколение автомобилей Е-класса немецкой марки Mercedes-Benz, впервые выпущенное в 2002 году. Комплектация третьего поколения Е-класса состояла из трёх серий исполнения, типичных для Mercedes-Benz: Classic, Elegance и Avantgarde. Первый вариант предлагал классический набор опций и выдержанный стиль оформления интерьера и экстерьера. Elegance включал особую отделку салона автомобиля и набор различных опций. Avantgarde придавал автомобилю спортивный внешний вид и также включал специальную отделку салона, а также изменения в электрооборудовании автомобиля.',
        image1: '../IMG/E CLASS/3/3 generation_1_cover.jpg',
        image2: '../IMG/E CLASS/3/3 generation_2.jpg',
        image3: '../IMG/E CLASS/3/3 generation_3.jpg',
        image4: '../IMG/E CLASS/3/3 generation_4.jpg'

    },
    {
        name: 'W203',
        className: 'C CLASS',
        generation: 'THIRD GENERATION',
        information: 'Mercedes-Benz W203 — второе поколение среднеразмерных автомобилей C-класса немецкого автопроизводителя Mercedes-Benz. Пришло на смену модели W202 в 2000 году. Работа над дизайном новой модели C-класса началась ещё в середине 1994 года, а окончательный его вариант был утверждён на исполнительном совете в декабре 1995 года[4]. Заявки на патентование дизайна были поданы 20 апреля 1998 года и 4 марта 1999 года[5][6]. Первые испытания прошли в 1997 году и окончились в 2000-м. В марте 2000 года состоялось презентация второго поколения C-класса. Большинство двигателей были позаимствованы у W202 модели, за исключением эксклюзивного варианта C320, который предлагал 160 кВт (218 лошадиных сил). Дизельные двигатели получили новую систему Common Rail и турбокомпрессоры с изменяемой геометрией. Шестиступенчатая механическая коробка передач стала стандартом для всего диапазона вариаций, за исключением C320.',
        image1: '../IMG/C CLASS/3/3 generation_1.jpg',
        image2: '../IMG/C CLASS/3/3 generation_2.jpg',
        image3: '../IMG/C CLASS/3/3 generation_3.jpg',
        image4: '../IMG/C CLASS/3/3 generation_4.jpg'
    },
    {
        name: 'W220',
        className: 'S CLASS',
        generation: 'SECOND GENERATION',
        information: 'Автомобиль Mercedes-Benz W220 был представлен широкой публике в августе 1998 года на Парижском автосалоне. Первая серийная модель сошла с конвейера 13 августа того же года. Автомобиль включал более 30 технических инноваций и первоначально выпускался в двух вариантах кузова (укороченная и удлинённая колёсные базы) с 3-я версиями двигателей. Стартовыми моделями выступили S320 (3.2-литровый двигатель V6 мощностью 165 кВт / 224 л.с.), S430 (двигатель V8 мощностью 205 кВт / 279 л.с.) и S500 (двигатель V8 мощностью 225 кВт / 306 л.с.). Продажи в Европе и Японии начались в декабре, а в марте следующего года — в США. На момент выпуска автомобиля W220 США являлись вторым по величине рынком сбыта роскошных автомобилей S-класса за пределами Германии. Уже в 1999 году компания продала 189 437 единиц автомобиля и планировала увеличивать цифру.',
        image1: '../IMG/S CLASS/2/2 generation_1.jpg',
        image2: '../IMG/S CLASS/2/2 generation_2.jpg',
        image3: '../IMG/S CLASS/2/2 generation_3.jpg',
        image4: '../IMG/S CLASS/2/2 generation_4.jpg'

    },
    {
        name: 'W210',
        className: 'E CLASS',
        generation: 'SECOND GENERATION',
        information: 'Официальный выпуск автомобиля Е-класс W210 был налажен в 1995 году. Модель с несущим кузовом представляла собой классическую компоновку: переднее расположение двигателя, привод на задние колёса. Первоначально автомобиль был доступен с выбором из восьми двигателей, пять из которых работали на бензине (четырёхцилиндровые Е200 и Е230, шестицилиндровые Е280 и Е320 и V8 Е420), а три (I4 E220, шестицилиндровым E300 Diesel и турбодизельный E290) — на дизельном топливе. Большинство из этих двигателей были основаны на силовых установках, которые уже доказали высокую надёжность на автомобилях Mercedes-Benz W124 и Mercedes-Benz W202 (С-класс). В зависимости от размера топливного бака объём багажника равнялся 500 литрам (65 л. бак) или 520 литров (80 л. бак). Версия, предназначенная для транспортировки длинномерных предметов, оснащалась 70-литровым топливным баком.',
        image1: '../IMG/E CLASS/2/2 generation_1.jpg',
        image2: '../IMG/E CLASS/2/2 generation_2.jpg',
        image3: '../IMG/E CLASS/2/2 generation_3.jpg',
        image4: '../IMG/E CLASS/2/2 generation_4.jpg'

    },
    {
        name: 'W202',
        className: 'C CLASS',
        generation: 'SECOND GENERATION',
        information: 'Mercedes-Benz W202 — компактный представительский легковой автомобиль немецкого автопроизводителя Mercedes-Benz из серии С-класса. Автомобиль выпускался в кузовах седан (W202) с 1993 по 2000 год и универсал (S202) с 1996 по 2000 год. Всего выпущено 1 626 135 седанов и 221 247 универсалов. Помимо стандартной линейки моделей автомобиль предлагался в высокопроизводительных модификациях от подразделения Mercedes-AMG: C36 AMG, C43 AMG и C55 AMG.',
        image1: '../IMG/C CLASS/2/2 generation_1.jpg',
        image2: '../IMG/C CLASS/2/2 generation_2.jpg',
        image3: '../IMG/C CLASS/2/2 generation_3.jpg',
        image4: '../IMG/C CLASS/2/2 generation_4.jpg'
    },
    {
        name: 'W140',
        className: 'S CLASS',
        generation: 'FIRST GENERATION',
        information: 'Mercedes-Benz W140 — серия флагманских моделей S-класса немецкой торговой марки Mercedes Benz. Официальная презентации состоялась в марте 1991 года на Женевском автосалоне. Серия пришла на смену автомобилям Mercedes-Benz W126, которые, несмотря на свой коммерческий успех, морально и технически устарели к началу 90-х годов. Новая модель принесла много новшеств серии: помимо более аэродинамичного корпуса, автомобиль имел уникальное двойное остекление, автоматически закрывающиеся двери и багажник, систему контроля климата, которая продолжала работать после отключения двигателя, а также хвостовые антенны, поднимавшиеся при включении заднего хода.',
        image1: '../IMG/S CLASS/1/1 generation_1_cover.jpg',
        image2: '../IMG/S CLASS/1/1 generation_2.jpg',
        image3: '../IMG/S CLASS/1/1 generation_3.jpg',
        image4: '../IMG/S CLASS/1/1 generation_4.jpg'
    },
    {
        name: 'W124',
        className: 'E CLASS',
        generation: 'FIRST GENERATION',
        information: 'С целью уменьшения риска снижения внимания к новой линейке автомобилей бизнес-класса компания Mercedes-Benz приняла решение не представлять серию W124 на Франкфуртском автосалоне в сентябре 1984 года, куда иные марки также привозили собственную новую или обновлённую продукцию. Вместо этого новая серия автомобилей Mercedes-Benz W124 дебютировала на автосалоне в Севилье (Испания) 5 ноября 1984 года в кузове седан с семью типами двигателей: 200, 230E, 260E, 300E, 200 D, 250D, 300D. Поставки заказов клиентам начались в первые месяцы 1985 года. На лобовое стекло устанавливался всего один дворник, механизм которого был спроектирован для охвата максимальной площади стекла. Также стоит упомянуть о подогреве бачка омывателя, зоны дворников на лобовом стекле и патрубков с помощью охлаждающей жидкости. А также электроподогрев сопел распылителей омывающей жидкости. ',
        image1: '../IMG/E CLASS/1/1 generation_1.jpg',
        image2: '../IMG/E CLASS/1/1 generation_2.jpg',
        image3: '../IMG/E CLASS/1/1 generation_3.jpg',
        image4: '../IMG/E CLASS/1/1 generation_4.jpg'

    },
    {
        name: 'W201',
        className: 'C CLASS',
        generation: 'FIRST GENERATION',
        information: 'В начале 80-х годов Mercedes-Benz испытывала трудности. Компания, выпускавшая классические модели автомобилей, переживала последствия нефтяного кризиса 1973 года, встал вопрос выпуска более компактной и экономичной машины. И в 1982 году появляется новая экономичная и компактная модель Mercedes-Benz 190 (W201). После появления компания захватывает лидерство в европейском сегменте D и вплотную стала конкурировать с BMW 3 серии. Уменьшение длины кузова на 300 мм в сравнении с традиционными седанами Mercedes-Benz W123 и применение новых легких сплавов позволило выиграть 160 кг снаряженной массы, четырехдверный кузов седан получил (впервые для Mercedes-Benz) клиновидный силуэт, стекла и двери заподлицо с поверхностью и накладки вместо водосточных желобов на крыше, что снизило коэффициент лобового сопротивления С" до 0,33 и, в свою очередь, значительно уменьшило расход топлива. В нарушение традиции концерн продолжал давать индекс «190» всем моделям семейства W201 вне зависимости от объема двигателя, лишь добавляя дополнительные цифры в название модели.',
        image1: '../IMG/C CLASS/1/1 generation_1.jpg',
        image2: '../IMG/C CLASS/1/1 generation_2.jpg',
        image3: '../IMG/C CLASS/1/1 generation_3.jpg',
        image4: '../IMG/C CLASS/1/1 generation_4.jpg'
    }

];

let generationsArray = [];


let container = document.getElementById('all_generations');
let searchEl = document.getElementById('search');
let page = document.getElementById('page');


searchEl.addEventListener('input', function (event) {
    let value = event.target.value.toUpperCase();
    if (value === '') {
        generationsArray = [];
        initCarList(cars);
        return;
    }

    let filteredCars = cars.filter(function (carItem) {
        if (carItem.className.indexOf(value) > -1 ) {
            return true;
        }
        if (carItem.name.indexOf(value) > -1 ) {
            return true;
        }
        if (carItem.generation.indexOf(value) > -1 ) {
            return true;
        }
        else {
             return false;
        }

    });

    function searchResult(models) {
        let modelsView = '';
        container.style.flexFlow = 'row wrap';
        for (let i = 0; i < models.length; i++) {
            let model = models[i];
            modelsView += modelView(model);
            container.innerHTML = modelsView;


        }

    }
    searchResult(filteredCars);

});

container.addEventListener('click', function (event) {
    let identify_model = event.target.parentNode.getAttribute('data-value');

    for (let i = 0; i < cars.length; i++) {
        let name = cars[i].name;
        var car = cars[i];
        if (name === identify_model) {
            break;
        }

    }

    initCarPage(car);


    function initCarPage(car) {

        return `<div class="header_car_page">${car.className} ${car.name}</div>
                
                <div class="container_car_page">

                    <div class="information">

                        <span class="description">${car.information}</span>

                    </div>
                    
                <div class="pictures_car_page">
                    <img class="picture_car_page" src="${car.image1}">
                    <img class="picture_car_page" src="${car.image2}">
                    <img class="picture_car_page" src="${car.image3}">
                    <img class="picture_car_page" src="${car.image4}">
                </div>

                </div>`
    }

    page.innerHTML = initCarPage(car);

});

function initCarList(carsArray) {


    container.innerHTML = generationView(carsArray);
}


function generationView(models) {
    let modelsView = '';

    for (let i = 1; i < models.length; i++) {
        let model = models[i];
        modelsView += modelView(model);

        if (!(i % 3) ) {
            generationsArray.push(collectGeneration(model));
            modelsView = '';
            debugger;
        }

    }

    function collectGeneration(model) {
        return `<div class="generation">${model.generation}
            ${modelsView}
          </div>`
    };

    return generationsArray;
}

function modelView(model) {
    return `<div class="${model.className}" data-value="${model.name}">
            <img class="picture" src="${model.image1}">
            <div class="bodywork">${model.name}</div>
           </div>`
}

initCarList(cars);

class GenerationView {
    constructor(options) {
        this._el = options.element;
        this.btn = options.btn;
        this.array = generationsArray;

        this.btn.addEventListener('click', this.sorting.bind(this));
    }

    sorting() {
        let type = event.target.getAttribute('data-type');

        if (type === 'new') {
            generationsArray = [];
            initCarList(cars);
        }

        if (type === 'old') {
            if (generationsArray = []) {
                initCarList(cars);
                generationsArray.reverse();
                container.innerHTML = generationsArray;
                generationsArray = [];
            }
            else {
            generationsArray.reverse();
            container.innerHTML = generationsArray;
            generationsArray = [];
            }

        }


    }
}

 let generation = new GenerationView({
    element: document.getElementById('all_generations'),
    btn: document.querySelector('.sorting'),

});


