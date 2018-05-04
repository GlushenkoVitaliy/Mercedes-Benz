"use strict";

let cars = [
    {
        name: '',
        img: '',
        className: ''
    },
    {
        name: 'W222',
        img: 'IMG/S%20CLASS/4-st%20generation_1.jpg',
        className: 's-class',
        generation: 'FOURTH GENERATION'
    },
    {
        name: 'W!!!',
        img: 'IMG/E%20CLASS/1-st%20generation_1.jpg',
        className: 'e-class',
        generation: 'FOURTH GENERATION'
    },
    {
        name: 'W!!!',
        img: 'IMG/C%20CLASS/1-st%20generation_1.jpg',
        className: 'c-class',
        generation: 'FOURTH GENERATION'
    },
    {
        name: 'W221',
        img: 'IMG/S%20CLASS/3-st%20generation_1.jpg',
        className: 's-class',
        generation: 'THIRD GENERATION'

    },
    {
        name: 'W!!!',
        img: 'IMG/E%20CLASS/1-st%20generation_1.jpg',
        className: 'e-class',
        generation: 'THIRD GENERATION'

    },
    {
        name: 'W!!!',
        img: 'IMG/C%20CLASS/1-st%20generation_1.jpg',
        className: 'c-class',
        generation: 'THIRD GENERATION'
    },
    {
        name: 'W220',
        img: 'IMG/S%20CLASS/2-st%20generation_1.jpg',
        className: 's-class',
        generation: 'SECOND GENERATION'

    },
    {
        name: 'W!!!',
        img: 'IMG/E%20CLASS/1-st%20generation_1.jpg',
        className: 'e-class',
        generation: 'SECOND GENERATION'

    },
    {
        name: 'W!!!',
        img: 'IMG/C%20CLASS/1-st%20generation_1.jpg',
        className: 'c-class',
        generation: 'SECOND GENERATION'
    },
    {
        name: 'W140',
        img: 'IMG/S%20CLASS/1-st%20generation_1_%20for_cover.jpg',
        className: 's-class',
        generation: 'FIRST GENERATION'

    },
    {
        name: 'W124',
        img: 'IMG/E%20CLASS/1-st%20generation_1.jpg',
        className: 'e-class',
        generation: 'FIRST GENERATION'

    },
    {
        name: 'W210',
        img: 'IMG/C%20CLASS/1-st%20generation_1.jpg',
        className: 'c-class',
        generation: 'FIRST GENERATION'
    }

];

let generationsArray = [];


let container = document.getElementById('all_generations');
let searchEl = document.getElementById('search');

searchEl.addEventListener('input', function (event) {
    let value = event.target.value.toUpperCase();
    let filteredCars = cars.filter(function (carItem) {
        if (carItem.name.indexOf(value) > -1 && value !== '') {
            debugger;
            return true;
        }
        if (value === '') {
            generationsArray = [];
            initCarList(cars);
        }
        else {
            return false;
        }

    });

    function searchResult(models) {
        let modelsView = '';
        debugger;
        for (let i = 1; i < models.length; i++) {
            let model = models[i];
            modelsView += modelView(model);
            container.innerHTML = modelsView;


        }

    }
    searchResult(filteredCars);

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
    return `<span class="${model.className}">
            <img class="picture" src="${model.img}">
            <div class="bodywork">${model.name}</div>
           </span>`
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
            debugger;
            generationsArray = [];
        }

    }
}

 let generation = new GenerationView({
    element: document.getElementById('all_generations'),
    btn: document.querySelector('.sorting'),

});