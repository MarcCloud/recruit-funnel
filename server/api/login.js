/**
 * Created by MarcCloud on 16/03/15.
 */
function logIn(req,res,next){
    console.log(req);
    res.send('Everything ok');
}

module.exports=logIn;