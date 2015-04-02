var React = require('react');
var Layout = React.createClass({
    render:function(){
        return (<html>
                    <head>
                        <title>{this.props.title}</title>
                        <link rel="stylesheet" href="/styles/recruit-funnel.min.css"/>
                        <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    </head>
                    <body>
                        {this.props.children}
                    </body>
                </html>);
    }
});
module.exports = Layout;