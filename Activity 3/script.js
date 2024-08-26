let button = document.body.querySelector('#btn');
let darkmode = document.body.querySelectorAll('.darkmode')

button.addEventListener('click' , ()=>{
    Array.from(darkmode).forEach((val)=>{
        val.classList.toggle('white');
    })
    document.body.classList.toggle('black');
})