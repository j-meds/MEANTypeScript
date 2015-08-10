/// <reference path="../typings/tsd.d.ts"/>
var express = require('express');
var router = express.Router();
router.get('/test', function (req, res, next) {
    res.send('You Rock');
});
router.use(function (err, req, res, next) {
});
module.exports = router;
