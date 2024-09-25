let div = document.querySelector("#myDiv");
let spans = document.querySelectorAll('span');
let len = spans.length;
let count = 0;
div.addEventListener('click',()=>{
    let myInterval = setInterval(()=>{
        spans[count].style.top = "0px";
        count++;
        if (len == count) {
            clearInterval(myInterval);
        }
    },30);
})