$(document).ready(function() {

    /*
    $('.template').load("/templates/template.html");
    */

    /*
    $('.template').load("/templates/template.html .innerDiv", function() {
        console.log('Done loading !')
    });
   */





   // ------------------- GET data with Ajax ----------------------
   /*
    var METHOD = "GET";
    var URL = "https://jsonplaceholder.typicode.com/users";

    $.ajax(URL, {
        method: METHOD,
        error: function() {
            console.log('Something went wrong !');
        },
        success: function(data) {
            console.log(data);
        }
    })
    */





       // ------------------- POST data with Ajax ----------------------
       var METHOD = "POST";
       var URL = "https://jsonplaceholder.typicode.com/users";
       var DB = JSON.stringify({name:"francis", lastname:"jones"});
   
       $.ajax(URL, {
           method:METHOD,
           data:DB,
           dataType:"json",
           contentType:"application/json",
           error: function() {
               console.log('Something went wrong !');
           },
           success: function(data) {
               console.log(data);
           }
       })




});











