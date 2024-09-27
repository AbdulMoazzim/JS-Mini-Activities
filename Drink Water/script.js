let bigGlass = document.querySelector('.forcolor');
let smallGlasses = document.querySelectorAll('.small-glass');
let quan = document.querySelector('#quantity');
let rem = document.querySelector('#rem');
let count = 0;

smallGlasses.forEach((val)=>{
    val.addEventListener('click',(event)=>{
        if (event.currentTarget.classList.contains("white")) {
            count += 12.5;
            event.currentTarget.classList.remove('white');
            event.currentTarget.classList.add('blue');
            bigGlass.style.height = `${count}%`
        }
        else {
            count -= 12.5;
            event.currentTarget.classList.add('white');
            event.currentTarget.classList.remove('blue');
            bigGlass.style.height = `${count}%`
        }
        if (count > 40 && count <= 50) {
            rem.style.color = "white";
            quan.style.color = "#144fc6";
        } 
        else if (count > 50) {
            rem.style.color = "white";
            quan.style.color = "white";
        }
        else {
            rem.style.color = "#144fc6";
            quan.style.color = "#144fc6";
        } 
    })
})