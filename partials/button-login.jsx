var React = require('react'),
    ButtonLogin = React.createClass({
        render:function(){
            return(<div className="row col-md-2 col-md-offset-9">
                        <button className="btn btn-primary" id={this.props.id}>Log In</button>
                   </div>)
        }
    });
module.exports=ButtonLogin;