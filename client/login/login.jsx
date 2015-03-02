var React=require('react'),
    InputEmail=require('../../partials/input-email.jsx'),
    InputPassword=require('../../partials/input-password.jsx'),
    ButtonLogin=require('../../partials/button-login.jsx');

var LoginForm = React.createClass({
    handleSubmit:function(e){
        e.preventDefault();
        var email=this.refs.userEmail.refs.email.getDOMNode().value.trim();
        var password= this.refs.userPassword.refs.password.getDOMNode().value.trim();
        console.log(email,password);
    },
    render:function(){
        return(<form action="/login"
                     method="POST"
                     className="col-md-3 col-md-offset-4"
                     onSubmit={this.handleSubmit}
                     noValidate="true">
                    <InputEmail id="email" ref="userEmail"/>
                    <InputPassword id="password" ref="userPassword"/>
                    <ButtonLogin id="btnLogin"/>
                </form>)
    }
});

React.render(<LoginForm/>,document.getElementById('app'));