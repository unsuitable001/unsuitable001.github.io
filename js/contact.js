var cInfo = ['EMAIL : unsuitable001[at]gmail.com',
            'CHAT : gitter.im/unsuitable001',
            'TWITTER : twitter.com/unsuitable001']
var mIndex = 0;
var charI = 0;

function contactInfo(el,event){
    event.preventDefault();
    if(event.keyCode == 8 || event.keyCode == 46){
        charDel(el);
        return 0;
    }
    if(charI === 0 && mIndex === 0){
        el.placeholder = "";
    }
    if(cInfo.length > mIndex){
        charAdder(el);
    }
}

function charAdder(el){
    if(cInfo[mIndex].length > charI){
        el.placeholder += cInfo[mIndex][charI];
        charI += 1;
    }
    else{
        el.placeholder += "\n";
        mIndex += 1;
        charI = 0;
    }
}

function charDel(el){
    el.placeholder = el.placeholder.slice(0, -1);
    if(charI === 0){
        mIndex = 0;
        return 0;
    }
    charI -= 1;
}