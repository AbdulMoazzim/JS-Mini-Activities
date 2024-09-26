let content = document.querySelectorAll('.codes');
let main1 = document.querySelector(".main1");
let main2 = document.querySelector(".main2");

document.addEventListener("keypress",(event)=>{
    main1.style.display = "none";
    main2.style.display = "flex";
    content[0].innerHTML = event.key
    content[1].innerHTML = event.charCode
    content[2].innerHTML = event.code
})