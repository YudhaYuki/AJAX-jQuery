$(document).ready(function() {

    /*
    $('.template').load("/templates/template.html");
    */

   $('.template').load("/templates/template.html .innerDiv", function() {
       console.log('Done loading !')
   });


});











