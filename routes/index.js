const express = require("express");
const version = require("../package.json").version;
const router = express.Router();

router.get("/version", (req, res, next) => {
  res.status(200);
  res.send(version);
});


router.get("/hello", (req, res, next) => {
  const serverIP = req.ip;
  res.status(200).send(`<h1>Server IP Address: ${serverIP}</h1> Snaptrude is Amazing`);
});

module.exports = router;
