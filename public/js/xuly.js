//Gọi lên server socket io
let socket = io("/");

$(document).ready(async () => {
  console.log("ready!");
  //Button click from tivi
  $("#btntv").on("click", function () {
    //alert("Handler for `click` called.");
    socket.emit("client-send-playsound", (data) => {
      console.log("Button clicked client-send-playsound ");
    });
  });
  //Playsound on sp
  socket.on("server-send-playsound", async (data) => {
    console.log("Click Play sound on SP");
    var x = document.getElementById("btnsp");
    x.click();
    x.click();

  });

});
