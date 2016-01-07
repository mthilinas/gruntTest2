/*! Grunttest2 - v0.1.0 - 2016-01-07
* https://github.com/thilina/gruntTest2
* Copyright (c) 2016 thilina; Licensed MIT */
(function($) {

  // Collection method.
  $.fn.gruntTest2 = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.gruntTest2 = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.gruntTest2.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.gruntTest2.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].gruntTest2 = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
