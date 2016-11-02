"use strict";

var id = '755a3e82ea9b0998bc6d83891d7bca33',
    limit = '100',
    errTimeOut = 'Ошибочка: время ожидания истекло',
    errorDiv = document.getElementById('error_block'),
    inputSearch = document.getElementById('searchform');

let getPlayers = () => {
  $.ajax({
     type: 'GET',
     timeout: 2000,
     url:'https://api.worldofwarplanes.ru/wowp/account/list/?application_id=' + id + '&limit=' + limit + '&type=startswith&search=' + inputSearch,
     // для проверки timeout:
     // url: 'http://kvartvopros.by/test.php',
     success:function(channel) {
       let template = Handlebars.compile( $('#template').html()  );
       $('.updates').empty().append( template(channel)  );
       console.log("update");
     },
     error:function() {
       console.log('error');
       errorDiv.innerHTML = errTimeOut;
     }
   });
}

inputSearch.oninput = function() {
    inputSearch = document.getElementById('searchform').value;
    if (inputSearch.length >= 3) getPlayers();
};

$(document).ready(function() {
  if(inputSearch.length >= 3) getPlayers();

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
