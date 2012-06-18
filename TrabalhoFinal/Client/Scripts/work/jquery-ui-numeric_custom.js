/*
 * NECESSITA DE:
 * jquery-x.x.x.js
 * obj.base.js
 * obj.inputs_labels
 */

/*
 * UTILIZAR PARA NUMERIC (NUMBER PICKER), NECESSITA DE:
 *
 * themes/base/jquery.ui.all.css
 * ui/jquery.ui.core.js
 * ui/jquery.ui.widget.js
 * ui/jquery.ui.button.js
 *
 * jquery-ui-numeric.css
 * jquery-ui-numeric.js
 *
 * EXPLICADO EM:
 * http://plugins.jquery.com/plugin-tags/number-picker
 * https://github.com/flamewave/jquery-ui-numeric
 */

/* execucao de script para input type=number */
        $(function() {
            $.ui.numeric.globalization.defaultTooltip =
         'Escreva um novo valor ou use os botoes or teclas de setas para mudar o valor.' +
         ' Prima Ctrl ou Shift (ou Alt) para um menor=1x ou maior=10x (ou igual=5x) incremento,' +
         ' respectivamente.' ;
            $.ui.numeric.globalization.defaultUpTooltip =
         'Incrementa o valor.' +
         ' Prima Ctrl ou Shift (ou Alt) para um menor=1x ou maior=10x (ou igual=5x) incremento,' +
         ' respectivamente.' ;
            $.ui.numeric.globalization.defaultDownTooltip =
         'Decrementa o valor.' +
         ' Prima Ctrl ou Shift (ou Alt) para um menor=1x ou maior=10x (ou igual=5x) incremento,' +
         ' respectivamente.' ;

            $("input[type='number']").numeric( {
             emptyValue: false , minValue: 1 , format: "0"
             } );

//            $("input[type='number']").height( $("input[type='date']").first().height() );
//            $("input[type='number']").attr( "font-family" ,
//                                 $("input[type='date']").first().attr( "font-family" ) );
//            $("input[type='number']").attr( "font-size" ,
//                                 $("input[type='date']").first().attr( "font-size" ) );
//            $("input[type='number']").innerHeight(
//                                         $("input[type='date']").first().innerHeight() );
//            $("input[type='number']").outerHeight(
//                                         $("input[type='date']").first().outerHeight() );
//            $("input[type='number']").css( "background-image" ,
//                             $("input[type='date']").first().css( "background-image" ) );

/*
 * tentativa de alterar css de input type=number (campo number - numeric (number picker))
 * para reduzir melhor o espaco em branco em excesso (abaixo dos algarismos e das setas)
 * a partir do aspecto de outro tipo de input,
 * por exemplo, input type=date
 */
            $.each( [ "background" , "font" , "margin" , "padding" , "height" ,
                         "line-height" , "max-height" , "box" ] , function(index, value) {
                $("input[type='number']").css( value ,
                                         $("input[type='date']").first().css( value ) );
            } ) ;
        } ) ;

/*
 * TODO: EXPERT VERSION: reduzir melhor o espaco em branco em excesso (abaixo dos algarismos e das setas) do campo number - numeric (number picker)
 */
