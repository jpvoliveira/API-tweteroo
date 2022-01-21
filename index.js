import express from "express";
import cors from "cors";

const app = express();
app.use(cors())
app.use(express.json());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  const published = req.body;
  tweets.push(published.tweet);
  res.send("OK");
});

app.listen(5000);
