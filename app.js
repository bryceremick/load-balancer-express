// import cluster module
const cluster = require('cluster')
// max number of workers
const numCPUs = require('os').cpus().length;
// const numCPUs = 1

const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const bodyParser = require('body-parser')

const dotenv = require('dotenv')
dotenv.config()

const index = require('./routes/index')
const calc = require('./routes/calc')

if (cluster.isMaster) {
    console.log(`Master_${process.pid} started`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });

} else {
    createServerInstance(3000)
}

// Create worker servers
function createServerInstance(port) {
  const app = express()
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use(logger('dev'))

  app.use('/', index)
  app.use('/calc', calc)
  
  let server = app.listen(port , () => {
    console.log(`Worker_${process.pid} started`);
  })
}
