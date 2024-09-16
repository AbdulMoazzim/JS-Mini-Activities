const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
slides.forEach((val,index)=>{
    val.style.left = `${index*100}%`;
})

var count = 0;
const transform = ()=>{
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${count*100}%)`;

    })
}
prev.addEventListener('click',()=>{
    count--;
    if (count == -1){
        count = 2;
    }
    transform();
})
next.addEventListener('click',()=>{
    count++;
    if (count == 3){
        count = 0;
    }
    transform();
})