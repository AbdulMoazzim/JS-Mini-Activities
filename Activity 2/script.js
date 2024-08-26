let hoverButtons = document.body.querySelectorAll('.buttons div');
let content = document.body.querySelectorAll('.matter');
let length = hoverButtons.length;

Array.from(hoverButtons).forEach((val,index)=>{
    val.addEventListener('click', ()=>{
        val.classList.remove('black');
        val.classList.add('white');
        content[index].style.display = "block";
        for (let i = 0; i < length; i ++) {
            if (i === index) {
                continue;
            }
            hoverButtons[i].classList.add('black');
            hoverButtons[i].classList.remove('white');
            content[i].style.display = "none";
        }
    } )
})