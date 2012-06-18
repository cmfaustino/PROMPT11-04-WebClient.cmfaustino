/*
 * NECESSITA DE:
 * jquery-x.x.x.js
 */

/*
 * ADAPTADO DAS IDEIAS APRESENTADAS EM:
 * http://www.bytemycode.com/snippets/snippet/595/
 * http://snipplr.com/view/1853/
 * http://api.jquery.com/attribute-equals-selector/
 */

        function changeVisibilityArraysClassesIDs ( arrayClassesIDs , visib )
        {
            if ( arrayClassesIDs )
            {
//                    $("[class='"+value+"']").css( "visibility" , visib );
                $.each( arrayClassesIDs , function(index, value) {
                    $("[class='"+value+"']").css( "display" , visib );
                });
            }
        }

        function showHideArraysClassesIDs ( arrShow , arrHide )
        {
            if ( arrShow )
            {
//              changeVisibilityArraysClassesIDs ( arrShow , "visible" ) ;
              changeVisibilityArraysClassesIDs ( arrShow , "" ) ; // compact ; inherit ; inline
            }
            if ( arrHide )
            {
//              changeVisibilityArraysClassesIDs ( arrHide , "hidden" ) ;
              changeVisibilityArraysClassesIDs ( arrHide , "none" ) ;
            }
        }

        function showEN_hidePT_fields ( )
        {
            showHideArraysClassesIDs(['dados_form_EN'],['dados_form_PT']);
        }

        function showPT_hideEN_fields ( )
        {
            showHideArraysClassesIDs(['dados_form_PT'],['dados_form_EN']);
        }

        function showENandPT_fields ( )
        {
            showHideArraysClassesIDs(['dados_form_EN','dados_form_PT']);
        }
