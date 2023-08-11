//Gọi lên server socket io
let socket = io("/");

$(document).ready(() => {
  console.log("ready!");
  //Update sott
  socket.on("server-send-nextnumber", (data) => {
    if (data.maQuay === "quayso1" && data.nextNumber !== "Hết số") {
      $("#sott1").text(data.nextNumber);
      chuNhapNhay1();
    }
    if (data.maQuay === "quayso2" && data.nextNumber !== "Hết số") {
      $("#sott2").text(data.nextNumber);
      chuNhapNhay2();
    }
    if (data.maQuay === "quayso3" && data.nextNumber !== "Hết số") {
      $("#sott3").text(data.nextNumber);
      chuNhapNhay3();
    }
    if (data.maQuay === "quayso4" && data.nextNumber !== "Hết số") {
      $("#sott4").text(data.nextNumber);
      chuNhapNhay4();
    }
    // if (data.maQuay === "quayso5" && data.nextNumber !== "Hết số") {
    //   $("#sott5").text(data.nextNumber);
    //   chuNhapNhay5();
    // }
  });
});

function chuNhapNhay1() {
  for (let i = 0; i < 3; i++) {
    $("#sott1").fadeIn(1000).fadeOut(500).fadeIn(1000);
  }
}

function chuNhapNhay2() {
  for (let i = 0; i < 3; i++) {
    $("#sott2").fadeIn(1000).fadeOut(500).fadeIn(1000);
  }
}

function chuNhapNhay3() {
  for (let i = 0; i < 3; i++) {
    $("#sott3").fadeIn(1000).fadeOut(500).fadeIn(1000);
  }
}

function chuNhapNhay4() {
  for (let i = 0; i < 3; i++) {
    $("#sott4").fadeIn(1000).fadeOut(500).fadeIn(1000);
  }
}

// function chuNhapNhay5() {
//   for (let i = 0; i < 3; i++) {
//     $("#sott5").fadeIn(1000).fadeOut(500).fadeIn(1000);
//   }
// }
