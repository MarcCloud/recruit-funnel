/**
 * Created by MarcCLoud on 16/03/15.
 */

router = require('express').Router();

router.get('/',function(req,res){
    res.render('index');
});

router.post('/api/login',require('./api/login'));
module.exports=router;