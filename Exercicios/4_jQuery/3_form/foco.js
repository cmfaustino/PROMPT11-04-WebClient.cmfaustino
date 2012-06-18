/// <reference path="../0_Scripts/jquery-1.6.4.js" />

function foco() {
    $('span.helpSample').fadeOut();
    $('span.helpSample').each(function () {
        var obj = $(this);
        obj.parent("p").mouseover(function () { obj.fadeIn() });
        obj.parent("p").mouseout(function () { obj.fadeOut() });
    });  // nao esta bem feito, porque faz mais do q 1 atribuicao se um p tiver varios helpsample
}

// focus
// .hover
// $("a~b")
// $(".helpSample", $(this).parent("p"))

$(foco);
