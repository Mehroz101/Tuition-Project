const express = require("express");
const cors = require("cors");
const path = require("path");
const http = require("http");
const socketIo = require("socket.io");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const { connectDB, checkDatabaseConnection } = require("./config/db");

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PATCH"],
  },
});
app.set("io", io);
io.on("connection", (socket) => {
  console.log("connected");
  // console.log(socket)

  socket.on("disconnect", () => {
    // Clean up on disconnect
    console.log("disconnected");
  });
});
app.use(express.json());
app.use(cors());
connectDB();
app.use(checkDatabaseConnection);
app.use(express.static(path.join(__dirname, "uploads")));

app.use("/api/user", authRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/teacher", teacherRoutes);

// app.get("/", (req, res) => {
//   res.send("running");
// });
app.listen(PORT, (req, res) => {
  console.log(`backend running on port ${PORT}`);
});
