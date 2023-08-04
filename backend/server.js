const express = require("express");

// routers
const kodersRouter = require("./routes/koders.router");
const generationsRouter = require("./routes/generations.router");

const app = express();
app.use(express.json());

app.use("/api/koders", kodersRouter);
app.use("/api/generations", generationsRouter);

app.get("/api", (req, res) => {
  res.json({
    ok: true,
    message: "/api",
  });
});

module.exports = app;
