let express = require("express");
let app = express();
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");
let PORT = process.env.PORT || 5000;

let server = require("http").Server(app);
let io = require("socket.io")(server);
server.listen(PORT, () => {
  console.log(`Server started ${PORT}`);
});

//Lắng nghe kết nối lên server
io.on("connection", function (socket) {
  console.log("Client connected: " + socket.id);
  socket.on("client-send-playsound", (data) => {
    console.log("client-send-playsound from tivi");
    socket.broadcast.emit("server-send-playsound", data);
  });
});

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/sp", function (req, res) {
    res.render("sp");
  });

  app.get("/tv", function (req, res) {
    res.render("tivi");
  });