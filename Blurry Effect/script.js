let counting = document.body.querySelector("#counting");
let img = document.body.querySelector("#bg-img");
let count1 = 0, count2 = 100, count3 = 1;


let countdown = setInterval(()=>{
    counting.innerText = `${count1}%`;
    img.style.filter = `blur(${count2}px)`;
    count1++
    count2--;
    if (count1 === 101) {
        clearInterval(countdown);
        counting.innerText = "";
    }
    if (count1 % 10 === 0){
        count3 -= 0.1;
        counting.style.opacity = count3;
    }
},20);