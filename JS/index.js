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
        img: 'IMG/S%20CLASS/4-st%20generation_1.jpg',
        className: 'S CLASS',
        generation: 'FOURTH GENERATION'
    },
    {
        name: 'W213',
        img: 'IMG/E CLASS/4-rd generation_1.jpg',
        className: 'E CLASS',
        generation: 'FOURTH GENERATION'
    },
    {
        name: 'W205',
        img: 'IMG/C CLASS/4-rd generation_1.jpg',
        className: 'C CLASS',
        generation: 'FOURTH GENERATION'
    },
    {
        name: 'W221',
        img: 'IMG/S%20CLASS/3-st%20generation_1.jpg',
        className: 'S CLASS',
        generation: 'THIRD GENERATION'

    },
    {
        name: 'W212',
        img: 'IMG/E CLASS/3-th generation_1.jpg',
        className: 'E CLASS',
        generation: 'THIRD GENERATION'

    },
    {
        name: 'W204',
        img: 'IMG/C CLASS/3-th generation_1.jpg',
        className: 'C CLASS',
        generation: 'THIRD GENERATION'
    },
    {
        name: 'W220',
        img: 'IMG/S%20CLASS/2-st%20generation_1.jpg',
        className: 'S CLASS',
        generation: 'SECOND GENERATION'

    },
    {
        name: 'W211',
        img: 'IMG/E%20CLASS/2-nd generation_1.jpg',
        className: 'E CLASS',
        generation: 'SECOND GENERATION'

    },
    {
        name: 'W203',
        img: 'IMG/C ClASS/2-nd generation_1.jpeg',
        className: 'C CLASS',
        generation: 'SECOND GENERATION'
    },
    {
        name: 'W140',
        img: 'IMG/S%20CLASS/1-st%20generation_1_%20for_cover.jpg',
        className: 'S CLASS',
        generation: 'FIRST GENERATION',
        title: '',
        information: '',
        images: {}

    },
    {
        name: 'W210',
        img: 'IMG/E%20CLASS/1-st generation_1.jpg',
        className: 'E CLASS',
        generation: 'FIRST GENERATION'

    },
    {
        name: 'W202',
        img: 'IMG/C CLASS/1-st generation_1.jpg',
        className: 'C CLASS',
        generation: 'FIRST GENERATION'
    }

];

let generationsArray = [];


let container = document.getElementById('all_generations');
let searchEl = document.getElementById('search');

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

//container.addEventListener('click', function modelView(event));

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
    return `<div class="${model.className}">
            <img class="picture" src="${model.img}">
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
            generationsArray.reverse();
            container.innerHTML = generationsArray;
            generationsArray = [];
        }

    }
}

 let generation = new GenerationView({
    element: document.getElementById('all_generations'),
    btn: document.querySelector('.sorting'),

});