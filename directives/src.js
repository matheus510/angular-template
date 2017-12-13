'use strict';

function SrcDirective($, data, options, angularTemplate) {
  /**
   * ht-src expression
   */
  var htSrcs = $("*[" + options.prefix + "-if]");
  htSrcs.each(function (i, elem) {
    var expr = $(this).attr(options.prefix + '-src').trim();
    $(this).attr('src', expr)
    $(this).removeAttr(options.prefix + '-if');
  });
}

module.exports = SrcDirective