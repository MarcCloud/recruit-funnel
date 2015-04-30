var Backbone=require('backbone');
    Backbone.sync=require('backbone-super-sync');

var dispactcher=require('./login-dispatcher');

var LoginStore = Backbone.Model.extend({
    user_email:null,
    user_password:null,
    errors:null,
    url:'/api/login'
});
var store = new LoginStore();

function login(){
    store.save().
        then(function(res){
            store.set({isLogged:res.isLogged,errors:res.message});
        });
}

dispactcher.on('all',function(event,payload){
   switch (event){
       case 'login':
                store.set({user_email:payload.email,user_password:payload.password});
                login();
           break;
       default: return;
   }

});

module.exports=store;