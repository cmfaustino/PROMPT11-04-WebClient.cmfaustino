// alert(emails);

//var log = document.getElementById(log);
//debugger; // so' pa'ra a execucao neste sitio, se a consola de debugger estiver aberta
//var i = 0;

log("some text");
log("another some text");

function parseCats(text) {
    var cats = { "Spot": [undefined , undefined] }; // nome : mae dtborn

    function parseCatLine(lineText) {
        var estado = lineText.splice(0, 4);
        if( estado == "born" )
        {
            var dia = lineText.splice(5, 2);
            var mes = lineText.splice(8, 2);
            var ano = lineText.splice(11, 4);
        }
            var
    }

    var textSplited = text.split("\n");
    for (var i = 0; i < textSplited.length; i++) {
        var linha = textSplited[i];
        if (linha.splice(0, 5) === "born ")
            parseCatLine(linha);
        if (linha.splice(0, 5) === "died ")
            parseCatLine(linha);
    }
}

parseCats(retrieveMails.join("\n"));
