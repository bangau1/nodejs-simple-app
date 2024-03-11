
const app = require('./app');
const port = 3000;

const server = app.listen(port, ()=>{
  console.log(`express is running on port ${server.address().port}`)
});