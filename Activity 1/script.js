let answer = document.body.querySelectorAll('.ans');
let sign = document.body.querySelectorAll('span');

Array.from(sign).forEach((val, index)=>{
    val.addEventListener('click',()=>{
        if (val.classList.contains('plus')) {
            answer[index].style.height = "200px";
            val.classList.add('minus');
            val.classList.remove('plus');
            val.innerHTML = "-";
        }
        else {
            answer[index].style.height = "0px";
            val.classList.add('plus');
            val.classList.remove('minus');
            val.innerHTML = "+";
        }
    })
})