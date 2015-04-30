var React=require('react');
var cx = require('classname');
var Actions=require('./login-actions');
var LoginStore=require('./login-store');
var is= require('is_js');
var LoginForm = React.createClass({
    getInitialState:function(){
      return{
          formValid:true,
          errorMessages:null,
          isLogged:false
      }
    },
    componentDidMount:function(){
      LoginStore.on('change',this.onChange);
    },
    componentWillUnmount:function(){
        LoginStore.off('change',this.onChange);
    },
    submit:function(e){
        e.preventDefault();
        var credentials = { email : this.refs.email.getDOMNode().value.trim(),
            password:this.refs.password.getDOMNode().value.trim()
        };
        if(is.email(credentials.email)){
            this.setState({formValid:true,errorMessages:null});
            Actions.login(credentials);
        }else{
            this.setState({formValid:false,errorMessages:'Please enter your email address.'})
        }
    },
    onChange:function(){
        if(LoginStore.get('isLogged')){
            window.location.href='/funnel';
        }else{
            this.setState({formValid:false,errorMessages:LoginStore.get('errors')});
        }
    },
    render:function(){
        var classes=cx({
            "errors": !this.state.formValid,
            "hidden": this.state.formValid
        });
        return(
                <div className="form col-md-3"  onSubmit={this.submit}>
                    <div className={classes}><span>{this.state.errorMessages}</span></div>
                    <form noValidate>
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