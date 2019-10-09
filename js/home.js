function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

function mainentry(){
    let x = document.getElementById('intro').style;
    x.height = scrH - document.getElementById('menu').offsetHeight + 'px';

    itext = document.getElementById('itext');
    let d = Math.random()*10;
    if(d<6)
    {
        var json_obj = JSON.parse(Get("https://quotes.rest/qod.json"));
        itext.innerHTML = `"`+json_obj.contents.quotes[0].quote+`" -`+json_obj.contents.quotes[0].author+`<br>&copy;theysaidso.com`;
        console.log("this is the author name: "+json_obj.contents.quotes[0].quote);
        return;
    }
    var json_obj = JSON.parse(Get("https://api.github.com/users/unsuitable001/repos"));
    itext.innerHTML = `Recent Project - <a href="`+json_obj[0].html_url+`">`+json_obj[0].name+`</a>`;
    return;
}
