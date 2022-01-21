import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];
let posts = [];
let postsReset = [];
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
  posts.reverse();
});

app.get("/tweets", (req, res) => {
  if (posts.length > 10) {
    postsReset = [];
    for (let i = 0; i < 10; i++) {
      const item = posts[i];
      postsReset.push(item);
    }
    res.send(postsReset);
  } else {
    res.send(posts);
  }
});

app.listen(5000);
