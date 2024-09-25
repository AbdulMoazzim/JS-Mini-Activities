let close = document.querySelector('#close');
let menu = document.querySelector('#menu');
let main = document.querySelector('.maincontent');
let nav = document.querySelector('.nav');

close.addEventListener('click',()=>{
    main.style.transform = "rotate(0deg)"
    nav.style.transform = "rotate(0deg)"
})

menu.addEventListener('click',()=>{
    main.style.transform = "rotate(-20deg)"
    nav.style.transform = "rotate(180deg)"
})