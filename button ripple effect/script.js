"use strict";
let btn = document.querySelector('#btn');
let effect = document.querySelector('#effect');
if (btn) {
    btn.addEventListener("click", () => {
        if (effect) {
            effect.style.display = "block";
            let count = 30;
            let myInterval = setInterval(() => {
                if (effect) {
                    effect.style.width = `${count}px`;
                    effect.style.height = `${count}px`;
                    count++;
                    if (count >= 100) {
                        effect.style.width = "0px";
                        effect.style.height = "0px";
                        clearInterval(myInterval);
                    }
                }
            }, 50);
        }
    });
}
