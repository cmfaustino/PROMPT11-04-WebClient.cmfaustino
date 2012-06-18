/// <reference path="../0_Scripts/jquery-1.6.4.js" />

function createNavLinks() {
    var relPrev = "prev";
    var relIndex = "index";
    var relNext = "next";
    var navLinks = $("link[rel='"+relPrev+"']","link[rel='"+relIndex+"']","link[rel='"+relNext+"']"); // $('head').find('link');
    var hrefPrev; // = _
    var hrefIndex; // = _
    var hrefNext; // = _
    var strPrev = "« prev";
    var strIndex = "index";
    var strNext = "next »";
    //if(
}

function createNav() {
    $('body').append("<nav>" + createNavLinks() + "</nav>");
}

$(createNav);
