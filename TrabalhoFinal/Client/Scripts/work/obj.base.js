/*
 * NECESSITA DE:
 * jquery-x.x.x.js
 */

        function objExistsLenMoreThanZero(obj)
        {
            return ( obj && ( obj.length ) && ( obj.length > 0 ) ) ;
        }

/*
 * SOLUCAO ADAPTADA DE:
 * http://stackoverflow.com/questions/952924/javascript-chop-slice-trim-off-last-character-in-string
 */
        function removeLastCharColonFromString(str)
        {
            if( objExistsLenMoreThanZero(str) && (str[str.length-1] == ':') )
            {
                //str = str.substring(0, str.length-1) ;
                str = str.slice(0, -1) ;
            }
            return str ;
        }

        function getTextFromElementById(objname)
        {
            //var obj = document.getElementById(objname) ;
            //return ( obj ? $("#" + obj.id + "").text() : "" ) ;
            //return ( obj ? $(obj).text() : "" ) ;

            var obj = $("#" + objname + "") ;
            return ( obj ? obj.text() : "" ) ;
        }
