/// <reference path="../typings/tsd.d.ts"/>
import express = require('express');
let router = express.Router();

router.get('/test', function(req, res, next) {
    res.send('You Rock');
})

router.use((err, req, res, next:any) => {

});

export = router;
