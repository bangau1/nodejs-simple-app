require('dotenv').config(
  {
    path: ['.env.local', '.env'],
    override: true // the last value wins, so the prod config (secrets) can be injected into .env
  }
)

const dbConn = {
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST
};

console.log("db conn", dbConn)

const express = require('express');
const app = express();
const router = express.Router();

const viewPath = __dirname + "/views/";

router.use(function(req, res, next){
  console.log(req.method, req.path);
  next();
});


router.get("/", function(req, res) {
  res.sendFile(viewPath+"index.html")
})

router.get("/sharks", function(req, res) {
  res.sendFile(viewPath+"sharks.html")
})

app.use(express.static(viewPath))
app.use("/", router);

module.exports = app;