var scrH = 0;
var scrW = 0;
var maindiv;
var hiddenmenu;
document.body.onload = function (){
    scrH = document.body.clientHeight;
    scrW = document.body.clientWidth;
    maindiv = document.getElementById('maindiv');
    hiddenmenu = document.getElementById('hiddenmenu');
    try{
        mainentry();
    }
    catch(ReferenceError){
        console.log("Homepage : https://unsuitable001.github.io");
    }
}

function openMenu(){
    maindiv.classList.add("rotate");
    hiddenmenu.classList.add("mReveal");
    document.body.classList.add("noscroll");
    maindiv.classList.remove("unrotate");
    hiddenmenu.classList.remove("mHide");
}

function closeMenu(){
    maindiv.classList.add("unrotate");
    hiddenmenu.classList.add("mHide");
    document.body.classList.remove("noscroll");
    maindiv.classList.remove("rotate");
    hiddenmenu.classList.remove("mReveal");
    maindiv.addEventListener("transitionend", postClose);
}

function postClose(){
    maindiv.classList.remove("unrotate");
    hiddenmenu.classList.remove("mHide");
    maindiv.removeEventListener("transitionend", postClose);
}
