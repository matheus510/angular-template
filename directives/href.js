'use strict';

function HrefDirective($, data, options, angularTemplate) {
  /**
   * ht-Href expression
   */
  var htHrefs = $("*[" + options.prefix + "-href]");
  htHrefs.each(function (i, elem) {
    var expr = $(this).attr(options.prefix + '-href').trim();
    if (expr.indexOf('&amp;') !== -1) {
        expr.replace('&amp;', '&')
    }
    $(this).attr(options.prefix + '-href', expr)
    $(this).removeAttr(options.prefix + '-href');
  });
}

module.exports = HrefDirective