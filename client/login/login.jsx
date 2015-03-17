var React=require('react'),
    Form = require('../../partials/component-form.jsx'),
    Input=require('../../partials/component-input.jsx');

var LoginForm = React.createClass({
    changeUrl:function(err,res){
        if(err!==null){
            console.log(res);
           // location.href='/dashboard';
        }
    },
    render:function(){
        return(<Form url="/api/login" onSuccess={this.changeUrl} submitLabel="Log In">
                    <div className="form-group">
                        <label>Email</label>
                        <Input  type="email"
                                name="email"
                                validations="isEmail"
                                validationError="This is not a valid email"
                                placeholder="email@example.com"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <Input
                            type="password"
                            name="password"
                            validations="isPassword"
                            validationError="This is not a valid password"
                        />
                    </div>
                </Form>
                )
    }
});

React.render(<LoginForm/>,document.getElementById('app'));