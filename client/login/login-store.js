var Backbone=require('backbone'),
    dispactcher=require('./login-dispatcher');

var LoginStore = Backbone.Model.extend({
    isValidState:true,
    errors:null
});

dispactcher.on('all',function(event,payload){
   switch (event){
       case 'login':
           console.log('trying to log in with',payload);
           break;
       default: return;
   }

});