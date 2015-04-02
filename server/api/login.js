/**
 * Created by MarcCloud on 16/03/15.
 */
function logIn(req,res,next){
    console.log(req.body);
    res.status(200).send({message:'User logged', isLogged:true});
}

module.exports=logIn;