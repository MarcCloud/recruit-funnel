var React = require('react');
var InputPassword = React.createClass({
    render: function(){
        return (<div className="form-input">
                    <label htmlFor={this.props.id}>Password</label>
                    <input type="password" id={this.props.id} placeholder="Password must be 8-20 characters long."/>
                    <span className="error hidden">Please enter a valid password.</span>
                </div>);
    }
});
module.exports=InputPassword;