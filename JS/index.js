"use strict";

let cars = [
        {generation: `    <div class="fst">FiRST GENERATiON<div class="first">
        <span class="s-class">
            <img class="picture" src="IMG/S%20CLASS/1-st%20generation_1_%20for_cover.jpg">
            <div class="bodywork">W140</div>
        </span>

        <span class="e-class">
            <img class="picture" src="IMG/E%20CLASS/1-st%20generation_1.jpg">
            <div class="bodywork">W124</div>
        </span>

        <span class="c-class">
            <img class="picture" src="IMG/C%20CLASS/1-st%20generation_1.jpg">
            <div class="bodywork">W210</div>
        </span></div>
    </div>`},
    {generation: `    <div class="snd">SECOND GENERATiON<div class="second">
        <span class="s-class">
            <img class="picture" src="IMG/S%20CLASS/2-st%20generation_1.jpg">
        </span>

        <span class="e-class">
            <img class="picture" src="IMG/e-class.jpg">
        </span>

        <span class="c-class">
            <img class="picture" src="IMG/c-class.jpg">
        </span></div>
    </div>`},
    {generation: `    <div class="trd">THiRD GENERATiON<div class="third">
        <span class="s-class">
            <img class="picture" src="IMG/S%20CLASS/3-st%20generation_1.jpg">
        </span>

        <span class="e-class">
            <img class="picture" src="IMG/e-class.jpg">
        </span>

        <span class="c-class">
            <img class="picture" src="IMG/c-class.jpg">
        </span></div>
    </div>`},
    {generation: `    <div class="fth">FOURTH GENERATiON<div class="fourth">
        <span class="s-class">
            <img class="picture" src="IMG/S%20CLASS/4-st%20generation_1.jpg">
        </span>

        <span class="e-class">
            <img class="picture" src="IMG/e-class.jpg">
        </span>

        <span class="c-class">
            <img class="picture" src="IMG/c-class.jpg">
        </span></div>
    </div>`}
];

// let container = document.getElementById('all_generations');
//
// function initCarList() {
//     let listResult = '';
//     for(let i = 0; i < cars.length; i++) {
//         let car = cars[i];
//         listResult += getCarItemHtml(car);
//     }
//     container.innerHTML = listResult;
// }
//
// function getCarItemHtml(car) {
//     return car.generation;
// }
//
// initCarList();






// function SearchText() {
//     let ResultSearch = '';
//     for (let i = 0; i < cars.length; i++) {
//         var list = cars[i];
//         for (let j = InputSearch[i];)}
//
// }
//
// let InputSearch = document.querySelector('place_for_search');



class GenerationView {
    constructor(options) {
        this._el = options.element;
        this.g1 = this._el.querySelector('.fst');
        this.g2 = this._el.querySelector('.snd');
        this.g3 = this._el.querySelector('.trd');
        this.g4 = this._el.querySelector('.fth');
        this.btn = options.btn;

        this.btn.addEventListener('click', this.sorting.bind(this));
        }

    sorting() {
        let type = event.target.getAttribute('data-type');

        if (type === 'new') {
            let new_g = this.g4.innerHTML + this.g3.innerHTML + this.g2.innerHTML + this.g1.innerHTML;
            this._el.innerHTML = new_g;
        }

        if (type === 'old') {
            let old_g = this.g1.innerHTML + this.g2.innerHTML + this.g3.innerHTML + this.g4.innerHTML;
            this._el.innerHTML = old_g;
        }

    }
}

let generation = new GenerationView({
    element: document.getElementById('all_generations'),
    btn: document.querySelector('.sorting'),

});




