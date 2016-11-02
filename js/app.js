"use strict";

var id = '755a3e82ea9b0998bc6d83891d7bca33';
var limit = '100';
var txtsearch = "mark";

let getPlayers = () => {
  $.ajax({
     type: 'GET',
     url:'https://api.worldofwarplanes.ru/wowp/account/list/?application_id=' + id + '&limit=' + limit + '&type=startswith&search=' + window.txtsearch,
     success:function(channel) {
       let template = Handlebars.compile( $('#template').html()  );
       $('.updates').empty().append( template(channel)  );
       console.log("update");
     },
     error:function() {
      console.log("error");
     }
   });
}

var input = document.getElementById('searchform');
input.oninput = function() {
    window.txtsearch = input.value;
    getPlayers();
};

$(document).ready(function() {
  getPlayers();

  $('body').append('<div id="ajaxBusy"><p><img src="img/loader.gif"></p></div>');
  $('#ajaxBusy').css({
    display:"none",
    margin:"0px",
    textAlign:"center",
    height:"100vh",
    paddingLeft:"0px",
    paddingRight:"0px",
    paddingTop:"50vh",
    backgroundColor:"rgba(255,255,255,0.7)",
    paddingBottom:"0px",
    position:"absolute",
    right:"0",
    top:"0",
    width:"100%"
  });
});

$(document).ajaxStart(function(){
  $('#ajaxBusy').show();
}).ajaxStop(function(){
  $('#ajaxBusy').hide();
});
