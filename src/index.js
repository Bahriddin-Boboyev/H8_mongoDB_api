const express = require("express");
const db = require("./db");
const app = express();
const usersRouter = require("./routers/users");

app.use(express.json());
app.use(usersRouter);
db();

app.listen(3000, () => {
  console.log("The server is running on port 3000");
});
