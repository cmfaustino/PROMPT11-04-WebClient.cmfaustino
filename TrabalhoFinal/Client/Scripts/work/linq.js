/*
 * NECESSITA DE:
 * jquery-x.x.x.js
 */

/*
 * PARA SE CRIAR O OBJECTO linq QUE TEM PROPRIEDADES QUE SAO FUNCOES,
 * UTILIZOU-SE O MESMO MECANISMO UTILIZADO NO FICHEIRO json2.js
 * EM:
 * https://github.com/douglascrockford/JSON-js
 * http://www.json.org/js.html
 * INCLUINDO
 * O MECANISMO DE INVOCACAO DE FUNCAO ANONIMA
 * PARA SER MAIS RAPIDO O CARREGAMENTO EM MEMORIA
 */

/*
 * criacao inicial do objecto linq
 */
        var linq ;

        if ( !linq ) {
            linq = $( {} ) ; // to wrap in a jQuery object: $( {} ) ; simple object: {} ;
        }

/*
 * funcao anonima a ser invocada, de modo a melhorar o carregamento do conteudo em memoria
 */
        (function () {

/*
 * criacao inicial do objecto/funcao linqset
 */
            if (typeof linqset !== 'function') {
                linqset = function ( arr ) {
// ...
linq.error( handler(eventObject) ) ;
linq.error( [eventData], handler(eventObject) ) ;
// ...
                };
            }

/*
 * funcao 1 de 8 - funcao from do objecto linq
 *
 * var linqset = linq.from(someArray);
 * , que serve para criar o objecto com suporte para LINQ, associado aos dados someArray.
 * A este conjunto dá-se o nome de linqset
 */
            if (typeof linq.from !== 'function') {
                linq.from = function ( arr ) {
                    return new linqset( arr ) ;
                };
            }

/*
 * funcao 2 de 8 - funcao where do objecto linqset
 *
 * linqset.where(predicateFunction)
 * , que retorna um conjunto que incluí apenas os elementos que cumprem o predicado
 */
            if (typeof linqset.prototype.where !== 'function') {
                linqset.prototype.where = function ( pred ) {
// ...
linq.error( handler(eventObject) ) ;
linq.error( [eventData], handler(eventObject) ) ;
// ...
                };
            }

/*
 * funcao 3 de 8 - funcao order do objecto linqset
 *
 * linqset.order(columnSelectorFunction)
 * , que retorna um conjunto ordenado de acordo com a função passada como argumento
 */
            if (typeof linqset.prototype.order !== 'function') {
                linqset.prototype.order = function ( colSel ) {
// ...
linq.error( handler(eventObject) ) ;
linq.error( [eventData], handler(eventObject) ) ;
// ...
                };
            }

/*
 * funcao 4 de 8 - funcao select do objecto linqset
 *
 * linqset.select(projectionFunction)
 * , que retorna um conjunto com elementos resultantes da projecção
 * realizada pela função passada como argumento
 */
            if (typeof linqset.prototype.select !== 'function') {
                linqset.prototype.select = function ( proj ) {
// ...
linq.error( handler(eventObject) ) ;
linq.error( [eventData], handler(eventObject) ) ;
// ...
                };
            }

/*
 * funcao 5 de 8 - funcao any do objecto linqset
 *
 * linqset.any(predicateFunction)
 * , que retorna o valor true se algum dos elementos cumprir o predicado
 */
            if (typeof linqset.prototype.any !== 'function') {
                linqset.prototype.any = function ( pred ) {
// ...
linq.error( handler(eventObject) ) ;
linq.error( [eventData], handler(eventObject) ) ;
// ...
                };
            }

/*
 * funcao 6 de 8 - funcao all do objecto linqset
 *
 * linqset.all(predicateFunction)
 * , que retorna o valor true se todos os elementos cumprir o predicado
 */
            if (typeof linqset.prototype.all !== 'function') {
                linqset.prototype.all = function ( pred ) {
// ...
linq.error( handler(eventObject) ) ;
linq.error( [eventData], handler(eventObject) ) ;
// ...
                };
            }

/*
 * funcao 7 de 8 - funcao count do objecto linqset
 *
 * linqset.count(), que retorna o número de elementos do conjunto
 */
            if (typeof linqset.prototype.count !== 'function') {
                linqset.prototype.count = function () {
// ...
linq.error( handler(eventObject) ) ;
linq.error( [eventData], handler(eventObject) ) ;
// ...
                };
            }

/*
 * funcao 8 de 8 - funcao foreach do objecto linqset
 *
 * linqset.foreach(actionFunction)
 * , que executa a função passada como argumento por cada elemento do conjunto.
 *  A função deve retornar o linqset para ser possível encadear outras chamadas.
 */
            if (typeof linqset.prototype.foreach !== 'function') {
                linqset.prototype.foreach = function ( act ) {
// ...
linq.error( handler(eventObject) ) ;
linq.error( [eventData], handler(eventObject) ) ;
// ...
                };
            }

/*
 * final da funcao anonima, com respectiva invocacao, para apressar carregamento em memoria
 */
        }());
