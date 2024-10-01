let btn: HTMLDivElement | null = document.querySelector('#btn');
let effect: HTMLDivElement | null = document.querySelector('#effect');

if (btn) {
    btn.addEventListener("click", ()=>{
        if (effect) {
            effect.style.display = "block";
            let count: number = 30;
            let myInterval = setInterval(()=>{
                if (effect) {
                    effect.style.width = `${count}px`
                    effect.style.height = `${count}px`
                    count++;
                    if (count >= 100) {
                        effect.style.width = "0px"
                        effect.style.height = "0px"
                        clearInterval(myInterval);
                    }
                }
            },10)
        }
    })
}