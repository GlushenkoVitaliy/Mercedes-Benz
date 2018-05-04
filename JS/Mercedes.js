"use strict";

var first = document.querySelector('.first'),
    second = document.querySelector('.second'),
    third = document.querySelector('.third'),
    fourth = document.querySelector('.fourth'),
    keys_sort = document.querySelector('.sorting'),
    container_generations = document.querySelector('.all_generations');

keys_sort.addEventListener('click', sorting);


class Sort {
    constructor(g1, g2, g3, g4) {
        this.g1 = g1;
        this.g2 = g2;
        this.g3 = g3;
        this.g4 = g4;

    }

    sorting() {

        var type = event.target.getAttribute('data-type');

        if (type === 'new') {
            var new_g = g4 + g3 + g3 + g1;
            container_generations.innerHTML = new_g;

        }
        if (type === 'old') {
            var old_g = g4 + g3 + g3 + g1;
            container_generations.innerHTML = old_g;
        }
        debugger;
    }
}


let generation = new Sort(first, second, third, fourth);


// function new_or_old(event) {
//     var type = event.target.getAttribute('data-type');
//
//     if (type === 'new') {
//         var new_g = g4 + g3 + g3 + g1;
//         container_generations.innerHTML = new_g;
//
//     }
//     if (type === 'old') {
//         var old_g = g4 + g3 + g3 + g1;
//         container_generations.innerHTML = old_g;
//     }
// }
// console.log(new_or_old(event)) ;

//вопрос что использовать VAR или LET?





