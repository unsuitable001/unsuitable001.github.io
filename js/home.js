var itext;
var textArray = ['Life',
'Javascript Development',
'Python Development'
];
document.body.onload = function(){
    console.log("ready");
    itext = document.getElementById('itext');
    scribbleanim();
}

document.body.onwheel = function () {
    console.log("hhgsfdhg");
}


function scribbleanim(){
    console.log("ready");
    let tLen = itext.innerText.length - 1;
    console.log(tLen);
    // while (tLen != 0){
    //     console.log(tLen);
    //     itext.innerText[tLen] = "";
    //     tlen = tLen - 1;
    // }
}
