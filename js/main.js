var scrH = 0;
var scrW = 0;
var maindiv;
var hiddenmenu;
document.body.onload = function (){
    scrH = document.body.clientHeight;
    scrW = document.body.clientWidth;
    let x = document.getElementById('intro').style;
    x.height = scrH - document.getElementById('menu').offsetHeight + 'px';
    maindiv = document.getElementById('maindiv');
    hiddenmenu = document.getElementById('hiddenmenu');
    // hiddenmenu = document.createElement('div')
    // hiddenmenu.innerHTML = "<div class='ui segment' id='hiddenmenu' style='margin: 0; padding: 0; height: "
    //     + scrW + "px; width: "+ scrH + "px; top: -" + scrW + "px; position: absolute !important;'>"
    //     + "<div><a> hdfhfdddfhdahsdghd</a></div>"
    //     +"</div>";
    // hiddenmenu = document.createElement('div');
    // hiddenmenu.style = "'height: "+ scrW + "px; width: "+ scrH + "px; top: -" + scrW + "px; position: absolute !important;'>";
    // hiddenmenu.class = 'ui red inverted segment';
    // hiddenmenu.innerHTML = 'dydyfysdfuysdfgyufdyugfsdyu';
    console.log(hiddenmenu);
    // document.body.insertBefore(hiddenmenu ,maindiv);
    // hiddenmenu.style.top = '-' + scrH + 'px !important';
    // hiddenmenu.style.width = scrH + 'px';
    // hiddenmenu.style.height = scrW + 'px';
}

document.body.onwheel = function () {
    console.log("hhgsfdhg");
}

function openMenu(){
    console.log("nice");
    maindiv.classList.add("rotate");
    hiddenmenu.classList.add("mReveal");
    document.body.classList.add("noscroll");
}
