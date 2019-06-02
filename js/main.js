var scrH = 0;
var scrW = 0;
var maindiv;
var hiddenmenu;
var scrollX;
var scrollY;
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
        if((scrH + 1) > document.body.scrollHeight){
            let x = document.getElementById('maincontent').style;
            x.height = scrH - document.getElementById('menu').offsetHeight + 'px';
        }
    }
}

function openMenu(){
    scrollX = window.pageXOffset;
    scrollY = window.pageYOffset;
    window.scrollTo(0,0);
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
    window.scrollTo(scrollX,scrollY);
}
