const express = require("express");
const cors = require("cors");

const app = express();
var corsOptions = {
  origin: "http://localhost:3000",
  // For legacy browser support
  methods: "GET, PUT",
};
app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({ users: ["Aditya", "kaustubh", "Radhika"] });
});

app.listen(5000, () => {
  console.log("Server Running!!!!");
});
