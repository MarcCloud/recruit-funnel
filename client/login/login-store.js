var Backbone=require('backbone'),
    dispactcher=require('./login-dispatcher');
    Backbone.sync=require('backbone-super-sync');

var LoginStore = Backbone.Model.extend({
    user_email:null,
    user_password:null,
    errors:null,
    url:'/api/login'
});
var store = new LoginStore();

function updateState(newState){
    store.set(newState);
}
function login(payload){
    store.set({user_email:payload.email,user_password:payload.password});
    store.save().
        then(updateState);
}
dispactcher.on('login',login);
module.exports=store;