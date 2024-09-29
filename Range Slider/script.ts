let div: HTMLDivElement | null = document.querySelector(".val");
let input = document.querySelector('#range');

let counter: number = -30;

if (input) {
    input.addEventListener('input',(event: Event):void=>{
        const Target = event.target as HTMLInputElement;
        if (div) {
            div.innerHTML = Target.value;
            div.style.left = `${counter + Target.value}%`;
        }
    })
}