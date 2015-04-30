/**
 * Created by MarcCloud on 16/03/15.
 */
function logIn(req,res,next){
    console.log(req.body);
    if(req.body.user_email==='marccloud.11@gmail.com' && req.body.user_password==='mypassword')
        res.status(200).send({message:'User logged', isLogged:true});
    else
        res.status(200).send({message:'Credentials do not match any account.',isLogged:false});
}
module.exports=logIn;