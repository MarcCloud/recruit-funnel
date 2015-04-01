var dispatcher = require('./login-dispatcher');
/**
 * This is the login module action dispatcher.*/
var actions = {
  /**
  * @param {object} credentials - Object with email and password properties.
  * */
  login : function(credentials){
      dispatcher.trigger('login',credentials);
  }
};

module.exports=actions;