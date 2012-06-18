/*
 * NECESSITA DE:
 * jquery-x.x.x.js
 * obj.base.js
 */

/*
 * UTILIZAR PARA DATEPICKER, NECESSITA DE:
 * themes/base/jquery.ui.all.css
 * ui/jquery.ui.core.js
 * ui/jquery.ui.widget.js
 * ui/jquery.ui.datepicker.js
 * ui/i18n/jquery.ui.datepicker-pt.js (opcional)
 *
 * EXPLICADO EM:
 * http://css-tricks.com/8678-progressively-enhancing-html5-forms/
 * http://jqueryui.com/demos/datepicker/
 * http://docs.jquery.com/UI/Datepicker
 */

        function label2title(labelForObj, delimStr, prevStrObjName, nextStrObjName)
        {
            var etiqueta = $('label[for="' + labelForObj.id + '"]').text() ;

            etiqueta = ( objExistsLenMoreThanZero( etiqueta ) ) ?
                         removeLastCharColonFromString( etiqueta ) : "" ;

            var delim = ( objExistsLenMoreThanZero( delimStr ) ) ? delimStr : "" ;

            if( objExistsLenMoreThanZero( prevStrObjName ) )
            {
                var etiq_prev = getTextFromElementById( prevStrObjName ) ;
                if( objExistsLenMoreThanZero( etiq_prev ) )
                {
                    etiqueta = removeLastCharColonFromString(etiq_prev) +
                                 ( ( etiqueta.length > 0 ) ? ( delim + etiqueta ) : "" ) ;
                }
            }

            if( objExistsLenMoreThanZero( nextStrObjName ) )
            {
                var etiq_next = getTextFromElementById( nextStrObjName ) ;
                if( objExistsLenMoreThanZero( etiq_next ) )
                {
                    etiqueta = ( ( etiqueta.length > 0 ) ? ( etiqueta + delim ) : "" ) +
                                 removeLastCharColonFromString(etiq_next) ;
                }
            }

            //$("#" + labelForObj.id + "").attr("title" , etiqueta ) ;

            $(labelForObj).attr("title" , etiqueta ) ;
        }

/*
 * SOLUCAO ADAPTADA DE:
 * http://stackoverflow.com/questions/285522/find-html-label-associated-with-a-given-input
 * nao utiliza jQuery
 */
        function setRadioFirstOption(radioObjName, handlerFunction)
        {
            var radioObjs = document.getElementsByName(radioObjName) ;
            if( radioObjs && (
                ( radioObjs.type && (radioObjs.type == "radio") )
                || ( objExistsLenMoreThanZero( radioObjs )
                    && radioObjs[0].type && ( radioObjs[0].type == "radio" ) )
             ) )
            {
                var verificado = false;
                for( var i = 0 ; i < radioObjs.length ; i++ )
                {
                    if( radioObjs[i].checked )
                    {
                        verificado = true ;
                        break ;
                    }
                }
                if( !verificado )
                {
                    radioObjs[0].checked = true ;
                    if( handlerFunction )
                    {
                        eval( handlerFunction ) ;
                    }
                }
            }
        }

/*
 * funcao nao utilizada
 * utiliza jQuery
 */
        function setDatePicker(dateObjId)
        {
	    $("#" + dateObjId + "").datepicker( {
             dateFormat: 'yy-mm-dd' , changeYear: true , showButtonPanel: true
             , autoSize: true
             } ) ;
        }

/*
 * funcao utilizada
 * nao utiliza jQuery
 */
        function getDateStrYYYYMMDD(dateObj)
        {
            var data_ano = ( "000" + new String(dateObj.getFullYear()) ).slice( -4 ) ;
            var data_mes = ( "0" + new String(dateObj.getMonth()+1) ).slice( -2 ) ;
            var data_dia = ( "0" + new String(dateObj.getDate()) ).slice( -2 ) ;
            var data_str = data_ano + '-' + data_mes + '-' + data_dia ;
            return data_str ;
        }

        function marcaOpcoesTodasEscolhidasNaLista(selObj)
        {
            $.each( selObj.options , function( idx ) {
                             $(this).attr( "selected" , "selected" ) ;
            } ) ;
        }

        function insereValorEmSelectEapagaValorEmTxt( valor, selObj, txtObj )
        {
            //var opcao = document.createElement("option") ;
            //opcao.text = valor ;
            //opcao.value = valor ;
            //selObj.options.add( opcao ) ;
            //txtObj.value = "" ;

            //$("<option value='" + valor + "'>" + valor + "</option>").appendTo(
            //     "#" + selObj.id ) ;
            //$("#" + txtObj.id).val( "" ) ;

            $("<option value='" + valor + "'>" + valor + "</option>").appendTo(
                 $(selObj) ) ;
            $(txtObj).val( "" ) ;

            marcaOpcoesTodasEscolhidasNaLista( selObj ) ;
        }

        function obterArrayDeOpcoesDeSelectAntesDeSep( selObj, separTxt )
        {
            var separTxtOk = ( separTxt && separTxt.length && ( separTxt.length > 0 ) ) ;
            return ( ( selObj.options ) && ( selObj.options.length )
                                         && ( selObj.options.length > 0 ) ) ?
                             $.map( selObj.options , function(elem,idx) {
                                   /*
                                   //return ( ( !separTxtOk ) ? elem.value :
                                   //            ( elem.value.split(separTxt , 1)[0] ) ) ;
                                   */

                                   return ( ( !separTxtOk ) ? $(elem).val() :
                                               ( $(elem).val().split(separTxt , 1)[0] ) ) ;

                                 } )
                             : ( new Array( ) ) ;
        }

/*
 * UTILIZA SOLUCOES ADAPTADAS DE:
 * http://elegantcode.com/2009/07/01/jquery-playing-with-select-dropdownlistcombobox/
 * utiliza jQuery
 */
        function moveConteudoParaListaSeAusente(txtObj, selObj)
        {
            //var valor = $.trim( txtObj.value ) ;

            var valor = $.trim( $(txtObj).val() ) ;

            // obter array de valores ja' existentes
            var valores = obterArrayDeOpcoesDeSelectAntesDeSep( selObj ) ;

            if( ( valor.length > 0 ) && (
                (valores.length <= 0) || ( $.inArray( valor , valores ) < 0 )
             ) )
            {
                insereValorEmSelectEapagaValorEmTxt( valor , selObj , txtObj ) ;
            }
        }

/*
 * UTILIZA SOLUCOES ADAPTADAS DE:
 * http://elegantcode.com/2009/07/01/jquery-playing-with-select-dropdownlistcombobox/
 * utiliza jQuery
 */
        function moveConteudoTextoListaParaListaSeAusente(txtObj, selSrcObj, selDstObj,
                                                             separTxt, separSel)
        {
            //var primval = $.trim( txtObj.value ) ;

            var primval = $.trim( $(txtObj).val() ) ;

            // obter array de valores ja' existentes
            var arrsetvls = obterArrayDeOpcoesDeSelectAntesDeSep( selSrcObj ) ;

            var setvals = ( arrsetvls.length > 0 ) ? arrsetvls.join( separSel ) : "" ;
            var valor = primval + separTxt + setvals ;

            // obter array de partes-chave (antes de separador) de valores ja' existentes
            var primvals = obterArrayDeOpcoesDeSelectAntesDeSep( selDstObj, separTxt ) ;

            if( ( primval.length > 0 ) && ( setvals.length > 0 ) && (
                (primvals.length <= 0) || ( $.inArray( primval , primvals ) < 0 )
             ) )
            {
                insereValorEmSelectEapagaValorEmTxt( valor , selDstObj , txtObj ) ;

                //while ( selSrcObj.length > 0 ) // enquanto existem elementos na lista...
                //{
                //    selSrcObj.remove( 0 ) ; // ...remover o primeiro elemento da lista
                //}

                //$("#" + selSrcObj.id).html(""); // remover todos os elementos da lista

                $(selSrcObj).html(""); // remover todos os elementos da lista
            }
        }

/*
 * UTILIZA SOLUCOES ADAPTADAS DE:
 * http://elegantcode.com/2009/07/01/jquery-playing-with-select-dropdownlistcombobox/
 * utiliza jQuery
 */
        function retiraEscolhaDaListaParaEdicao(selObj, txtObj)
        {
            if( selObj.selectedIndex >= 0 )
            {
                //txtObj.value = selObj.options[selObj.selectedIndex].value ;

                //$("#" + txtObj.id).val( $("#" + selObj.id).val() ) ;

                $(txtObj).val( $(selObj).val() ) ;

                selObj.remove( selObj.selectedIndex ) ;
                marcaOpcoesTodasEscolhidasNaLista( selObj ) ;
            }
        }

/*
 * UTILIZA SOLUCOES ADAPTADAS DE:
 * http://elegantcode.com/2009/07/01/jquery-playing-with-select-dropdownlistcombobox/
 * utiliza jQuery
 */
        function retiraEscolhaDaListaParaEdicaoTextoLista(selJoinObj, txtObj, selSplitObj,
                                                                     separTxt, separSel)
        {
            if( selJoinObj.selectedIndex >= 0 )
            {
                //var doublejoinval = selJoinObj.options[selJoinObj.selectedIndex].value ;
                //txtObj.value = doublejoinval.split(separTxt , 1)[0] ;

                //var doublejoinval = $("#" + selJoinObj.id).val().toString() ;
                //$("#" + txtObj.id).val( doublejoinval.split(separTxt , 1)[0] ) ;

                var doublejoinval = $(selJoinObj).val().toString() ;
                $(txtObj).val( doublejoinval.split(separTxt , 1)[0] ) ;

                //var joinval = doublejoinval.substring(
                //                                 txtObj.value.length + separTxt.length
                //                                     ) ; // segundo parametro omitido

                var joinval = doublejoinval.substring(
                                                 $(txtObj).val().length + separTxt.length
                                                     ) ; // segundo parametro omitido

                //while ( selSplitObj.length > 0 ) // enquanto existem elementos antigos...
                //{
                //    selSplitObj.remove( 0 ) ; // ...remover o primeiro elemento antigo
                //}

                //$("#" + selSplitObj.id).html(""); // remover todos os elementos da lista

                $(selSplitObj).html(""); // remover todos os elementos da lista

                var setval = joinval.split( separSel ) ;

                //var opcao ;

                var valor ;

                for ( idxval in setval ) // para cada elemento do conjunto de valores...
                {
                    //opcao = document.createElement("option") ;
                    //opcao.text = setval[idxval] ;
                    //opcao.value = setval[idxval] ;
                    //selSplitObj.options.add( opcao );

                    valor = setval[idxval] ;

                    //$("<option value='" + valor + "'>" + valor + "</option>").appendTo(
                    //     "#" + selSplitObj.id ) ;

                    $("<option value='" + valor + "'>" + valor + "</option>").appendTo(
                         $(selSplitObj) ) ;
                }

                marcaOpcoesTodasEscolhidasNaLista( selSplitObj ) ;
                selJoinObj.remove( selJoinObj.selectedIndex ) ;
                marcaOpcoesTodasEscolhidasNaLista( selJoinObj ) ;
            }
        }

        function colocar_placeholders()
        {
            $("input[type='text']").each( function( idx ) {
                $(this).trigger('onmouseover') ;
                $(this).attr( "placeholder" , $(this).attr( "title" ) ) ;
            } );

            $("input[type='url']").each( function( idx ) {
                $(this).trigger('onmouseover') ;
                $(this).attr( "placeholder" , "http://" + $(this).attr( "title" ) ) ;
            } );

            var data_actual = new Date() ;

            $("input[type='date']").each( function( idx ) {
                $(this).attr( "placeholder" , getDateStrYYYYMMDD( data_actual ) ) ;
            } );

            $("textarea").each( function( idx ) {
                $(this).trigger('onmouseover') ;
                $(this).attr( "placeholder" , $(this).attr( "title" ) ) ;
            } );
        }

/* execucao de script para input type=date , e para atribuir conteudo a placeholders */
        $(function() {
            $("input[type='date']").datepicker( {
             dateFormat: 'yy-mm-dd' , changeYear: true , showButtonPanel: true
             , autoSize: true
             } );

            colocar_placeholders() ;
        });
