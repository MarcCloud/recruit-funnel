var Backbone=require('backbone');
    Backbone.sync=require('backbone-super-sync');

var dispactcher=require('./login-dispatcher'),
    is=require('is_js');

var LoginStore = Backbone.Model.extend({
    user_email:null,
    user_password:null,
    errors:null,
    url:'/api/login',
    validate:function(attrs){
         if(!is.email(attrs.user_email)){
             return 'Please enter a valid email address.';
         }
    }
});
var store = new LoginStore();

function login(){
    store.save();
}

dispactcher.on('all',function(event,payload){
   switch (event){
       case 'login':
           store.set('user_email',payload.email);
           store.set('user_password',payload.password);
           if(store.isValid()){
               login();
           }
           break;
       default: return;
   }

});