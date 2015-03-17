var React=require('react');
var Input = React.createClass({
    getInitialState: function () {
        return {
            value: this.props.value || ''
        };
    },
    componentWillMount: function () {
        this.props.attachToForm(this);
    },
    componentWillUnmount: function () {
        this.props.detachFromForm(this);
    },
    setValue: function (event) {
        this.setState({
            value: event.currentTarget.value
        });
    },
    render: function () {
        return (
            <input  type={this.props.type}
                    id={this.props.name}
                    name={this.props.name}
                    onChange={this.setValue}
                    value={this.state.value}
                    placeholder={this.props.placeholder}/>
        );
    }
});
module.exports=Input;