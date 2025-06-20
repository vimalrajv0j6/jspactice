var sidenav = document.querySelector(".side-navbar");
var menu  = document.querySelector(".navbar-menu-toggle");
var cancel = document.getElementById("cancel");
menu.addEventListener("click",function(){
    sidenav.style.left="0";
})

cancel.addEventListener("click",function(){
        sidenav.style.left="-60%";

})