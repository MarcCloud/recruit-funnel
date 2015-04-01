var React=require('react');
var LoginForm = React.createClass({
    submit:function(e){
        e.preventDefault();
        console.log('submited');
    },
    render:function(){
        return(
                <div className="form col-md-3"  onSubmit={this.submit}>
                    <form>
                        <div className="form-group">
                            <label htmlFor="user_mail">Email</label>
                            <input id="user_mail" type="email" className="form-control" placeholder="mail@example.com"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="user_password">Password</label>
                            <input id="user_password" type="password" className="form-control" placeholder="Please enter your password"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Log In</button>
                        </div>
                    </form>
                </div>)
    }
});

React.render(<LoginForm/>,document.getElementById('app'));