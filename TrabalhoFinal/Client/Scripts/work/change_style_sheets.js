/*
 * NECESSITA DE:
 * <nenhum pre-requisito>
 */

/*
 * EXPLICADO EM:
 * http://www.thesitewizard.com/javascripts/change-style-sheets.shtml
 */
        function switch_style ( css_title )
        {
        // You may use this script on your site free of charge provided
        // you do not remove this notice or the URL below. Script from
        // http://www.thesitewizard.com/javascripts/change-style-sheets.shtml
          var i, link_tag ;
          for (i = 0, link_tag = document.getElementsByTagName("link") ; i < link_tag.length ; i++ )
          {
            if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) && link_tag[i].title)
            {
              link_tag[i].disabled = true ;
              if (link_tag[i].title == css_title)
              {
                link_tag[i].disabled = false ;
              }
            }
/*
 * ALTERACAO: comentar, pois nao se utilizam cookies: set_cookie
 */
        //    set_cookie( style_cookie_name, css_title,
        //      style_cookie_duration );
          }
        }
