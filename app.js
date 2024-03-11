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