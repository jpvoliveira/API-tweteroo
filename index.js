import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];
let posts = [];
let post = { username: "", avatar: "", tweet: "" };

app.post("/sign-up", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  const published = req.body;
  tweets.push(published);
  res.send("OK");

  posts = [];
  for (let i = 0; i < tweets.length; i++) {
    for (let j = 0; j < users.length; j++) {
      if (tweets[i].username === users[j].username) {
        post = {
          username: users[j].username,
          avatar: users[j].avatar,
          tweet: tweets[i].tweet,
        };
        posts.push(post);
      }
    }
  }
});

app.get("/tweets", (req, res) => {
  console.log(posts);
  res.send(posts);
});

app.listen(5000);
