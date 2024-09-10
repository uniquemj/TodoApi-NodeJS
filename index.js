const http = require("http");
const fs = require("fs");
const { jsonMiddleware } = require("./Middleware/todoMiddleware");
const { getTodos, getTodoById, createTodo, updateTodo, deleteTodo } = require("./controllers/todoController");

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  jsonMiddleware(req, res, () => {
    if (req.url === "/api/todos" && req.method === "GET") {
      getTodos(req, res);
    } else if(req.url.match(/\/api\/todos\/([a-fA-F0-9-]+)/) && req.method ==="GET"){
        const id = req.url.split('/')[3]
        getTodoById(req, res, id)
    }
    else if(req.url === "/api/todos" && req.method === "POST"){
        createTodo(req, res)
    }
    else if(req.url.match(/\/api\/todos\/([a-fA-F0-9-]+)/) && req.method ==="PUT"){
        const id = req.url.split('/')[3]
        updateTodo(req, res, id)
    }
    else if(req.url.match(/\/api\/todos\/([a-fA-F0-9-]+)/) && req.method ==="DELETE"){
        const id = req.url.split('/')[3]
        deleteTodo(req, res, id)
    }
    else {
      res.write(JSON.stringify({ message: "Route NOT FOUND" }));
      res.end();
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server connecting at ${PORT}`);
});
