/*
 * NECESSITA DE:
 * jquery-x.x.x.js
 * jquery.formparams.js
 * json2.js
 * obj.base.js
 *
 * obj.inputs_labels.js - uso da funcao getDateStrYYYYMMDD para a funcao transformFormToObj
 */

/*
 * CAMPOS movie DO FORMULARIO:
 *
 * tituloEN - string
 * tituloPT - string
 * idiomaOficial - EN ; PT
 * imagemURL - string
 * dataEN - date
 * dataPT - date
 * dataOficial - EN ; PT
 * minutos - number
 * realizador - array de strings
 * actrchars - array de strings no formato xxx - yyy1 / ... / yyyN
 * sinopseEN - string
 * sinopsePT - string
 * catEN - array de strings
 * catPT - array de strings
 */

/*
 * CAMPO template DO FORMULARIO:
 *
 * tmpl - string ( nome do template escolhido )
 */

/*
 * DEFINICAO FIXA DE OBJECTO movie:
 *
 * __ - substituir por idioma : EN ; PT ;
 *
 * titleMainIs__ : itemprop="name" ; itemprop="alternativeHeadline" ; (consoante idioma)
 * titleMainIs : itemprop="name" ; (tem de estar sozinho no template !)
 *
 * title__ - valor do formulario ;
 * title - especificado consoante o caso do idioma do titulo oficial ;
 * image - valor do formulario ;
 *
 * dateMainIs__ : itemprop="datePublished" ; <nada> (consoante idioma da data oficial)
 * dateMainIs : itemprop="datePublished" ; (tem de estar sozinho no template !)
 *
 * date__ - valor do formulario ;
 * date - especificado consoante o caso do idioma da data oficial ;
 * year__ - ano dos campos date__ acima referidos ;
 * year - especificado consoante o caso do idioma da data oficial (ano campo date acima) ;
 * duration - valor do formulario ;
 *
 * dirATTRscope : itemprop="director" itemscope itemtype="http://schema.org/People" ; <nada>
 * dirATTRname : itemprop="name" ; <nada> (apenas no 1o.)
 * director1 - valor do formulario ;
 * director2 - valor do formulario ;
 * act1 - valor do formulario ;
 * act1char1 - valor do formulario ;
 * act1char2 - valor do formulario ;
 * act1char3 - valor do formulario ;
 * act2 - valor do formulario ;
 * act2char1 - valor do formulario ;
 * act2char2 - valor do formulario ;
 * act2char3 - valor do formulario ;
 * act3 - valor do formulario ;
 * act3char1 - valor do formulario ;
 * act3char2 - valor do formulario ;
 * act3char3 - valor do formulario ;
 *
 * sinopseMainIs__ : itemprop="description" ; <nada>
 * sinopseMainIs : itemprop="description" ; (tem de estar sozinho no template !)
 *
 * sinopse__ - valor do formulario ;
 * sinopse - especificado consoante o caso do idioma do titulo oficial ;
 *
 * catMainIs__ : itemprop="genre" ; <nada> (apenas no 1o.)
 * catMainIs : itemprop="genre" ; (tem de estar sozinho no template !)
 *
 * cat1__ - valor do formulario ;
 * cat1 - especificado consoante o caso do idioma do titulo oficial ;
 * cat2__ - valor do formulario ;
 * cat2 - especificado consoante o caso do idioma do titulo oficial ;
 * cat3__ - valor do formulario ;
 * cat3 - especificado consoante o caso do idioma do titulo oficial ;
 * cat4__ - valor do formulario ;
 * cat4 - especificado consoante o caso do idioma do titulo oficial ;
 */

/*
 * UTILIZACAO DA SOLUCAO APRESENTADA EM:
 * http://jupiterjs.com/news/convert-form-elements-to-javascript-object-literals-with-jquery-formparams-plugin
 * E EM:
 * https://github.com/douglascrockford/JSON-js
 * http://www.json.org/js.html
 * AO INVES DE:
 * http://code.google.com/p/jquery-json/
 * http://api.jquery.com/jQuery.parseJSON/
 *
 * esta funcao - cerne dos templates - pretende-se generica no seu funcionamento
 */
        function transformFormToGenericObj ( formul )
        {
            // se fosse necessario construir objecto passo-a-passo, entao,
            // para inicializar objectos de raiz,
            // utilizar = { } ; // equivalente a new Object() ;

            //var objGeral = $("#" + formul.id).formParams() ;

            var objGeral = $(formul).formParams() ;

            return objGeral ;
        }

        function retornaStrDoArraySeTamanhoOk ( strArr, idx )
        {
            return ( ( strArr.length > idx ) ? strArr[ idx ] : "" ) ;
        }

/*
 * esta funcao ***tem em conta*** a especificacao do objecto movie , descrita acima
 * esta funcao ***tem em conta*** o formulario de filmes (os campos nele existentes)
 */
        function transformFormToObj ( formul )
        {
            var objGenerico = transformFormToGenericObj ( formul ) ;

            var objFinal = { } ; // equivalente a new Object() ;

            var idiomaOficial = ( objGenerico[ "idiomaOficial" ] == "EN" ) ? "EN" : "PT" ;
            var idiomaAlternativo = ( idiomaOficial == "EN" ) ? "PT" : "EN" ;

            var dataOficial = objGenerico[ "dataOficial" ] ;
            var dataAlternativo = ( dataOficial == "EN" ) ? "PT" : "EN" ;

            objFinal[ "titleMainIs" + idiomaOficial ] = 'itemprop="name"' ;
            objFinal[ "titleMainIs" + idiomaAlternativo ] = 'itemprop="alternativeHeadline"' ;
            objFinal[ "titleMainIs" ] = objFinal[ "titleMainIs" + idiomaOficial ] ;
            objFinal[ "titleEN" ] = objGenerico[ "tituloEN" ] ;
            objFinal[ "titlePT" ] = objGenerico[ "tituloPT" ] ;
            objFinal[ "title" ] = objFinal[ "title" + idiomaOficial ] ;
            objFinal[ "image" ] = objGenerico[ "imagemURL" ] ;
            objFinal[ "dateMainIs" + idiomaOficial ] = 'itemprop="datePublished"' ;
            objFinal[ "dateMainIs" + idiomaAlternativo ] = "" ;
            objFinal[ "dateMainIs" ] = objFinal[ "dateMainIs" + idiomaOficial ] ;
            objFinal[ "dateEN" ] = objGenerico[ "dataEN" ] ;
            objFinal[ "datePT" ] = objGenerico[ "dataPT" ] ;
            objFinal[ "date" ] = objFinal[ "date" + dataOficial ] ;
            objFinal[ "yearEN" ] = getDateStrYYYYMMDD( new Date( objFinal[ "dateEN" ] ) ) ;
            objFinal[ "yearPT" ] = getDateStrYYYYMMDD( new Date( objFinal[ "datePT" ] ) ) ;
            objFinal[ "year" ] = objFinal[ "year" + dataOficial ] ;
            objFinal[ "duration" ] = objGenerico[ "minutos" ] ;
            objFinal[ "dirATTRscope" ] = 'itemprop="director" itemscope itemtype="http://schema.org/People"' ;
            objFinal[ "dirATTRname" ] = 'itemprop="name"' ;

            var dlength = objGenerico[ "realizador" ].length ; // minimo 2 realizadores
            for( var di = 1 ; di <= Math.max( 2 , dlength ) ; di++ )
            {
                objFinal[ "director" + di ] =
                 retornaStrDoArraySeTamanhoOk( objGenerico[ "realizador" ] , ( di - 1 ) ) ;
            }

            var sep_actr_chars = ' - ' ;
            var sep_chars = ' / ' ;
            var actr_chars ;
            var actr ;
            var arrCharsDeActr ;
            var clength ;
            var alength = objGenerico[ "actrchars" ].length ; // minimo 3 actores/actrizes
            for( var ai = 1 ; ai <= Math.max( 3 , alength ) ; ai++ )
            {
                // string no formato xxx - yyy1 / ... / yyyN
                actr_chars =
                 retornaStrDoArraySeTamanhoOk( objGenerico[ "actrchars" ] , ( ai - 1 ) ) ;

                actr = actr_chars.split( sep_actr_chars , 1 )[0] ;
                arrCharsDeActr = ( actr_chars.split( sep_actr_chars , 1 )[1]
                                     ).split( sep_chars ) ;

                objFinal[ "act" + ai ] = actr ;

                clength = arrCharsDeActr.length ; // minimo 3 personagens
                for( var ci = 1 ; ci <= Math.max( 3 , clength ) ; ci++ )
                {
                    objFinal[ "act" + ai + "char" + ci ] = _
                     retornaStrDoArraySeTamanhoOk( arrCharsDeActr , ( ci - 1 ) ) ;
                }
            }

            objFinal[ "sinopseMainIs" + idiomaOficial ] = 'itemprop="description"' ;
            objFinal[ "sinopseMainIs" + idiomaAlternativo ] = "" ;
            objFinal[ "sinopseMainIs" ] = objFinal[ "sinopseMainIs" + idiomaOficial ] ;
            objFinal[ "sinopseEN" ] = objGenerico[ "sinopseEN" ] ;
            objFinal[ "sinopsePT" ] = objGenerico[ "sinopsePT" ] ;
            objFinal[ "sinopse" ] = objFinal[ "sinopse" + idiomaOficial ] ;
            objFinal[ "catMainIs" + idiomaOficial ] = 'itemprop="genre"' ;
            objFinal[ "catMainIs" + idiomaAlternativo ] = "" ;
            objFinal[ "catMainIs" ] = objFinal[ "catMainIs" + idiomaOficial ] ;

            $.each( [ idiomaOficial , idiomaAlternativo ] , function(index, value) {
                var catlength = objGenerico[ "cat" + value ].length ; // minimo 4 categor.
                for( var cati = 1 ; cati <= Math.max( 4 , catlength ) ; cati++ )
                {
                    objFinal[ "cat" + cati + value ] =
                     retornaStrDoArraySeTamanhoOk( objGenerico[ "cat" + value ] ,
                                                     ( cati - 1 ) ) ;

                    if( value == idiomaOficial )
                    {
                        objFinal[ "cat" + cati ] = objFinal[ "cat" + cati + value ] ;
                    }
                }
            } ) ;

            return objFinal ;
        }

/*
 * esta funcao - verificacao dos templates - pretende-se generica no seu funcionamento
 */
        function isValidHtmlTemplateObj ( objTemplate )
        {
            return ( objTemplate && ( objTemplate.type )
                         && ( $.trim( objTemplate.type.toLowerCase() )
                                 == $.trim( "html/template".toLowerCase() )
                             )
                     ) ;
        }

/*
 * esta funcao - cerne dos templates - pretende-se generica no seu funcionamento
 */
        function template ( nomeTmpl , objDados )
        {
            var invalid_val = null ;
            var nomeTemplate = $.trim( nomeTmpl ) ;
            if ( !objExistsLenMoreThanZero( nomeTemplate ) ) // se nao ha nome...
            {
                return invalid_val ; // ...retorna valor invalido
            }

            //var objTemplate = document.getElementById( nomeTemplate ) ;

            var objTemplate = $( "#" + nomeTemplate ) ;

            if ( isValidHtmlTemplateObj( objTemplate ) ) // se objecto e' template ok ...
            {
                // ...nao faz nada
            }
            else // se nao ha objecto com id = nomeTemplate que seja template valida ...
            {
                return invalid_val ; // ...retorna valor invalido
            }
            if ( $.isArray( objDados ) ) // se 2o parametro e' array...
            {
                // recursividade pormenorizada (trata cada elemento do array, nao o array)
                return $.map( objDados , function( elem , idx ) {
                                                template ( nomeTemplate , elem ) ;
                                            } ) ;
            }
            if ( objDados ) // por exclusao, se 2o parametro existe...
            {
                if ( $.isPlainObject( objDados ) ) // ...e se 2o parametro e' objecto
                {
// ...
return "<pre><code>" + JSON.stringify( objDados ) + "</code></pre>" ; // $.toJSON( objDados ) ;
// ...
                }
                // caso contrario, se 2o parametro existe e nao e' objecto (nem array)...
                return invalid_val ; // ...retorna valor invalido
            }
            // currying , caso 2o parametro nao exista
            function execTemplate ( objDads ) // funcao recursiva, para currying e closure
            {
                if ( objDads ) // se 2o parametro existe...
                {
                    return template ( nomeTemplate , objDads ) ; // executa recursividade
                }
                // caso contrario, se 2o parametro nao existe...
                return invalid_val ; // ...retorna valor invalido
            }
            return execTemplate ; // retorna funcao cujo unico parametro equivale ao 2o
        }

/*
 * esta funcao ***tem em conta*** o objectivo de se escrever no final do documento
 */
        function escreveNoDocumento ( htmlDados )
        {
            $("html").append( htmlDados );
        }

/*
 * esta funcao ***tem em conta*** o formulario de filmes (os campos nele existentes)
 */
        function adicionaTemplate ( formul )
        {
            var objProcessar = transformFormToObj( formul ) ;

            //var nomeTemplate = formul.tmpl.options[formul.tmpl.selectedIndex].value ;

            //var nomeTemplate = $("#" + formul.tmpl.id).val() ;

            var nomeTemplate = $(formul.tmpl).val() ;

            var htmlObj = template( nomeTemplate , objProcessar );
            escreveNoDocumento( htmlObj ) ;

            return false ; // para nao enviar o formulario
        }
