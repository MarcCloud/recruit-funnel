var React=require('react');
var Actions=require('./login-actions');
var LoginStore=require('./login-store');
var LoginForm = React.createClass({
    submit:function(e){
        e.preventDefault();
        var credentials = { email : this.refs.email.getDOMNode().value.trim(),
                            password:this.refs.password.getDOMNode().value.trim()};
        Actions.login(credentials);
    },
    render:function(){
        return(
                <div className="form col-md-3"  onSubmit={this.submit}>
                    <form>
                        <div className="form-group">
                            <label htmlFor="user_mail">Email</label>
                            <input id="user_mail" type="email" className="form-control" placeholder="mail@example.com" ref="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="user_password">Password</label>
                            <input id="user_password" type="password" className="form-control" placeholder="Please enter your password" ref="password"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Log In</button>
                        </div>
                    </form>
                </div>)
    }
});

React.render(<LoginForm/>,document.getElementById('app'));