"use strict";

let getPlayers = () => {
  $.ajax({
     type: 'GET',
     url:'https://api.worldofwarplanes.ru/wowp/account/list/?application_id=755a3e82ea9b0998bc6d83891d7bca33&limit=100&type=startswith&search=mark',
     success:function(channel) {
       console.log("update");
     },
     error:function() {
      console.log("error");
     }
   });
}
