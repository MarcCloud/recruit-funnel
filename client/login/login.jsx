var React=require('react'),
    InputEmail=require('../../partials/input-email.jsx'),
    InputPassword=require('../../partials/input-password.jsx'),
    ButtonLogin=require('../../partials/button-login.jsx');

var LoginForm = React.createClass({
    render:function(){
        return(<form action="/login" method="POST" className="col-md-3 col-md-offset-4">
                    <InputEmail id="email"/>
                    <InputPassword id="password"/>
                    <ButtonLogin id="btnLogin"/>
                </form>)
    }
});

React.renderComponent(<LoginForm/>,document.getElementById('app'));