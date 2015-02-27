var Layout = require('../partials/layout'),
    React = require('react');
var HelloMessage = React.createClass({
        render :function (){
            return (<Layout title = "Recruit Funnel">
                        <h1>Hi Im reacting</h1>
                    </Layout>)
        }
    });
module.exports=HelloMessage;