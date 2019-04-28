function toggleMenu() {
    $('.ui.sidebar').sidebar('toggle');
}

function fixMBMT() {    //a dirty fix for a finicky glitch
    toggleMenu();
    setTimeout(function(){ toggleMenu(); }, 10);
}

