'use strict';

require('bootstrap-webpack!./bootstrap.config.js');
var $ = require('jquery');

$(function () {
  $('.nav-tabs a').on('shown.bs.tab', function(event){
    alert($(event.target).text())
  });
});
