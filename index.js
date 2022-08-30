const express = require("express");
const app = express();
const PORT = 8000;
const contestantRoutes = require("./routes/contestantRoutes");

app.set("view engine", "ejs");

// This middleware allows us to post JSON in request.body
app.use(express.json());

// This middleware allows us to serve static files
app.use("/assets", express.static("./assets"));

app.use("/contestants", contestantRoutes);

app.listen(PORT, () => {
  console.log("App has started at port " + PORT);
});
