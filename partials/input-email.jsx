var React = require('react');
var InputEmail = React.createClass({
    render: function(){
        return (<div className="form-group">
                    <label htmlFor={this.props.id}>Email</label>
                    <input className ="form-control" type="email" id={this.props.id} placeholder="email@example.com"/>
                    <span className="error hidden">Please enter a valid email address.</span>
                </div>);
    }
});
module.exports=InputEmail;