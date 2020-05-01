const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
  console.log('hello from proccess ' + process.pid)
  // syncWait(5000)
  res.status(200).json({
    message: "Calculation"
  });
});

const syncWait = ms => {
  const end = Date.now() + ms
  while (Date.now() < end) continue
}

module.exports = router