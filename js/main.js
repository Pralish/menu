menu=document.getElementById("menu");

close=document.querySelector(".close");

menuItem=document.querySelector(".menu-item");

let i="false";


menu.addEventListener('click', function(){

    menuItem.classList.add("menu-active");
})

close.addEventListener('click',function(){
    menuItem.classList.remove("menu-active");
})