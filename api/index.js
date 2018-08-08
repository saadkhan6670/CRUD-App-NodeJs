
var express = require('express');
var app = express();
var router = express.Router();
var controller = require('./controller');

router.get('/getModule', controller.getModule);
router.post('/moduleCreate' , controller.moduleCreate);
router.post('/moduleUpdate' , controller.moduleUpdate);
router.post('/moduleDelete' , controller.moduleDelete);



module.exports = router;