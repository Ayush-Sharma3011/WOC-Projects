const express = require("express");

const app = express();

app.get("/heelo", (req, res) => {
  res.send("Hello heelo");
});

app.get("/", (req, res) => {
  res.send("Hello GET");
});

app.post("/", (req, res) => {
    res.send("Hello POST");
  });

  app.put("/", (req, res) => {
    res.send("Hello PUT");
  });

  app.delete("/", (req, res) => {
    res.send("Hello Delete");
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
const express = require("express");

const app = express();
app.use(express.json());

function shakilCheck(req, res, next) {
  const username = req.query.name;
  if(username == "shakil"){
      next();
      return;
  }
  res.status(401).send("U are not authorized");
}

function login(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    if(username == "Heeler" && password == "shakil"){
        next();
        return;
    }
    res.status(401).send
}