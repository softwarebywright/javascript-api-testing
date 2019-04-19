const express = require("express");
const todoRouter = express.Router();
const healthRouter = express.Router();
const app = express();

let todoId = 0;
const todos = []

todoRouter.get("/", (req, res) => {
  res.send(todos);
})

todoRouter.post("/", (req, res) => {
  if(!req.body.title) {
    return res.status(400).send("Todo must have a title");
  }

  todos.push({ id: todoId++, title: req.body.title });

  return res.sendStatus(200);
});

app.use("/todo", todoRouter);

healthRouter.get("/", (req, res) => {
  res.send({
    status: "ok"
  });
})

app.use("/health", healthRouter);


app.listen(process.env.PORT || 3000, ()=>console.log("API Started"));