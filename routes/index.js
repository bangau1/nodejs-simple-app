const express = require('express')
const router = express.Router()

router.get('/hello', (req, res) =>{
  res.send("get /hello")
})
router.get('/*', (req, res) =>{
  res.send("It works!")
})


module.exports = router;