const express = require("express");
const router = express.Router()

let n = 1000000
let arr = Array.from({length: n}, () => Math.floor(Math.random() * n))

router.get("/", async (req, res) => {
  console.log('hello from proccess ' + process.pid)

  let sum = 0
  arr.forEach(el => {
    sum += el
  })
  res.status(200).json({
    sum: sum
  });
});

module.exports = router