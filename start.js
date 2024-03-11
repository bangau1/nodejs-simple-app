
const app = require('./app');
const port = 3000;

const server = app.listen(port, ()=>{
  console.log(`express is running on port ${server.address().port}`)
});

process.on('SIGTERM', ()=>{
  console.log("Receive SIGTERM signal, graceful shutdown...")
  const timeout = 5000; // msec
  setTimeout(()=>{
    console.warn("forced shutdown after timeout")
    process.exit(1)

  }, timeout);
  
  server.close((err) => {
    TimeRanges.s
    if (err) {
      console.error("error on closing server:", err)
      process.exit(1)
    }
    console.log("server closed succesfully.")
    process.exit(0)
  });
});