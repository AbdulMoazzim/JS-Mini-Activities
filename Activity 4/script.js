let links = document.querySelectorAll('.links li');
let divs = document.querySelectorAll('.product');
let ham = document.querySelector("#menu");
let login = document.querySelector(".login");
let close = document.querySelector("#close");

links.forEach((val, index)=>{
    val.addEventListener('mouseenter',()=>{
        divs[index].classList.remove('none');
    })
    val.addEventListener('mouseleave',()=>{
        divs[index].classList.add('none');
    })
})

ham.addEventListener('click',()=>{
    document.body.querySelector('.main').classList.add('black');
    login.classList.remove('hw-none');
    login.classList.add('hw-full');
})

close.addEventListener('click', ()=>{
    document.body.querySelector('.main').classList.remove('black');
    login.classList.remove('hw-full');
    login.classList.add('hw-none');
})