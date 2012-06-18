/// <reference path="../0_Scripts/jquery-1.6.4.js" />

function insertAnchors(hdng) {
    var tocH1links = $('body').find(hdng).each(
        function (idx, elem) {
            $(this).prepend("<a href='" + hdng + "'></a>");
        }
    );
}

function createLinks(arrayOfLinks, hdng) {
    insertAnchors(hdng);
    // var lnks = ;
}

function createTOC() {
    var arrLinks;
    createLinks(arrLinks, 'h1');
    createLinks(arrLinks, 'h2');
    createLinks(arrLinks, 'h3');
    createLinks(arrLinks, 'h4');
    createLinks(arrLinks, 'h5');
    createLinks(arrLinks, 'h6');
    $('body').prepend("<div id='toc'>" + createNavLinks() + "</div>");
}

$(createTOC);
