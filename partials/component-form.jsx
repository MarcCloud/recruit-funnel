var React = require ('react');
var request = require('superagent');
var Form = React.createClass({
    componentWillMount: function () {
        this.model={};
        this.inputs = {};
        this.registerInputs(this.props.children);
    },
    registerInputs: function (children) {
        React.Children.forEach(children, function (child) {
            if (child.props&&child.props.name) {
                child.props.attachToForm = this.attachToForm;
                child.props.detachFromForm = this.detachFromForm;
            }
            if (child.props && child.props.children) {
                this.registerInputs(child.props.children);
            }
        }.bind(this));
    },
    attachToForm: function (component) {
        this.inputs[component.props.name] = component;
        this.model[component.props.name] = component.state.value;
    },
    detachFromForm: function (component) {
        delete this.inputs[component.props.name];
        delete this.model[component.props.name];
    },
    updateModel: function () {
        Object.keys(this.inputs).forEach(function (name) {
            this.model[name] = this.inputs[name].state.value;
        }.bind(this));
    },
    submit: function (event) {
        event.preventDefault();
        this.updateModel();
        request
            .post(this.props.url)
            .send(this.model)
            .end(this.props.onSuccess);
    },
    render: function () {
        return (
            <form onSubmit={this.submit} noValidate="true">
                {this.props.children}
                <button type="submit">{this.props.submitLabel}</button>
            </form>
        );
    }
});
module.exports=Form;
