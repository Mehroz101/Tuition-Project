const express = require("express");
const cors = require("cors");
const http = require("http");
const socketIo = require("socket.io");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const adminRoutes = require("./routes/adminRoutes");
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

// Attach socket.io instance to express app
app.set("io", io);

io.on("connection", (socket) => {


  socket.on("disconnect", () => {

  });
});

// Middleware
app.use(express.json());
app.use(cors());

// Database
connectDB();
// app.use(checkDatabaseConnection);

// Routes
app.use("/api/user", authRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/teacher", teacherRoutes);
app.use("/api/admin", adminRoutes);
app.get("/", (req, res) => {
  res.send("API is running...");
});
// Start server
if (process.env.NODE_ENV !== "production") {
  server.listen(PORT, () => {

  });
}
module.exports = app;