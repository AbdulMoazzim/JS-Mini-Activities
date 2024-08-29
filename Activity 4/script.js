let links = document.querySelectorAll('.links li');
let divs = document.querySelectorAll('.product');

links.forEach((val, index)=>{
    val.addEventListener('mouseenter',()=>{
        divs[index].classList.remove('none');
    })
    val.addEventListener('mouseleave',()=>{
        divs[index].classList.add('none');
    })
})