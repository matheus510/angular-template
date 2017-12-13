'use strict';

function HrefDirective($, data, options, angularTemplate) {
  /**
   * ht-Href expression
   */
  var htHrefs = $("*[" + options.prefix + "-if]");
  htHrefs.each(function (i, elem) {
    var expr = $(this).attr(options.prefix + '-href').trim();
    $(this).attr('Href', expr)
    $(this).removeAttr(options.prefix + '-href');
  });
}

module.exports = HrefDirective