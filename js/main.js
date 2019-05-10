var scrH = 0;
var scrW = 0;

document.body.onload = function (){
    scrH = document.body.clientHeight;
    scrW = document.body.clientWidth;
    let x = document.getElementById('intro').style;
    x.height = scrH - document.getElementById('menu').offsetHeight + 'px';
}

document.body.onwheel = function () {
    console.log("hhgsfdhg");
}

function openMenu(){
    console.log("nice");
    document.getElementById('maindiv').classList.add("rotate");
}
