'use strict';

require('bootstrap-webpack!./bootstrap.config.js');
var $ = require('jquery');

$(function () {
  $('.nav-tabs a').on('shown.bs.tab', function(event){
    console.log($(event.target).text()+11)
  });
});
