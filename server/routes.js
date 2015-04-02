/**
 * Created by MarcCLoud on 16/03/15.
 */

var router = require('express').Router();
var bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/',function(req,res){
    res.render('index');
});

router.post('/api/login',require('./api/login'));

module.exports=router;