"use strict";
let div = document.querySelector(".val");
let input = document.querySelector('#range');
let counter = -30;
if (input) {
    input.addEventListener('input', (event) => {
        const Target = event.target;
        if (div) {
            div.innerHTML = Target.value;
            div.style.left = `${counter + Target.value}%`;
        }
    });
}
