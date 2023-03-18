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
  res.json({ fileUrl: "/C:Users/HP/Assigenment-o/server/images/example.pdf" });
});

app.listen(5000, () => {
  console.log("Server Running!!!!");
});
