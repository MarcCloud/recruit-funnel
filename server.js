var express=require('express'),
    server = express(),
    port = 8080;


    server.set('view engine', 'jsx');
    server.set('views', __dirname + '/server/views');
    server.engine('jsx', require('express-react-views').createEngine());
    server.get('/',function(req,res){
       res.render('index');
    });
    server.listen(port);
    console.log('server running on %d',port);