import express from "express";

const app = express();
const users = [];

app.post("/sign-up", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send("OK");
});

app.listen(5000);
