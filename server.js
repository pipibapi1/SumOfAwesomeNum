const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

//ROUTES

const TotalAwesomeRoute = require("./Routes/TotalAwesomeRoute.js");

app.get("/", (req, res) => {
  res.send("THIS IS THE RESTFUL API FOR AWESOME NUMBER");
});

app.use("/getTotal", TotalAwesomeRoute);

//LISTENING TO THE SERVER

app.listen(port, () =>
  console.log(`Server is Running on port: http://localhost:${port}`)
);
