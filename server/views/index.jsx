var Layout = require('../../partials/layout'),
    React = require('react');
var IndexPage = React.createClass({
        render :function (){
            return (<Layout title = "Recruit Funnel">
                        <div id="app" className="container-fluid main"></div>
                        <script type="text/javascript" src="/scripts/login.min.js"></script>
                    </Layout>)
        }
    });
module.exports=IndexPage;