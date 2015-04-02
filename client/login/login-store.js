var Backbone=require('backbone');
    Backbone.sync=require('backbone-super-sync');

var dispactcher=require('./login-dispatcher'),
    is=require('is_js');

var LoginStore = Backbone.Model.extend({
    user_email:null,
    user_password:null,
    errors:null,
    validate:function(attrs){
        return is.email(attrs.user_email);
    }
});
var store = new LoginStore();
dispactcher.on('all',function(event,payload){
   switch (event){
       case 'login':
           if(store.isValid()){
               login();
           }else{

           }
           break;
       default: return;
   }

});