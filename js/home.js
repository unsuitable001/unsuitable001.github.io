var itext;
var tLen = 0;
var textArray = ['Life',
'Javascript Development',
'Python Development',
'C Development',
'Making random stuffs',
'Being a student'
];
var animrandtime = 30;
var doanim = true;
var _interval;
var Arrayindex = 0;
var arraylen = textArray.length;
var _randlen = 12;
var _timeout;

function animResetter(){
    clearTimeout(_timeout);
    animrandtime = 30;
    _interval = setInterval(scribbleanim, 50);
    return;
}

function scribbleanim(){
    if(animrandtime > 0){
        if(Arrayindex === arraylen){
            Arrayindex = 0;
        }
        _randlen = (textArray[Arrayindex].length / 2) + 5;
        itext.innerText =  Math.random().toString(36).substring(2, Math.floor(Math.random() * (_randlen - 4) ) + 4) + Math.random().toString(36).substring(2, Math.floor(Math.random() * (_randlen - 4) ) + 4);
        animrandtime-=1;
    }
    else{
        clearInterval(_interval);
        itext.innerText = textArray[Arrayindex];
        Arrayindex+=1;
        _timeout = setTimeout(animResetter, 3000);
        return;
    }
}

function mainentry(){
    let x = document.getElementById('intro').style;
    x.height = scrH - document.getElementById('menu').offsetHeight + 'px';
    itext = document.getElementById('itext');
    _interval = setInterval(scribbleanim, 50);
    return;
}
