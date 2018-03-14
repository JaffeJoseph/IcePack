import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger': ''}`;
    const fieldClass = `form-control ${field.label}`;
    return (
        <div className={className}>
            <label htmlFor={fieldClass}>{field.label}
                <input
                    className={fieldClass}
                    type="text"
                    {...field.input}
                />
            </label>
                {field.label}

            <div className="text-help">
            {touched ? error : ''}
            </div>
        </div>
    );
}

class SignIn extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderField = renderField.bind(this);
    }

    handleSubmit() {
        this.setState();
    }

    render() {
        return (
            <form className="sign-in" onSubmit={this.handleSubmit}>
                <Field
                    label="Username"
                    name="username"
                    component={this.renderField}
                />
                <Field
                    label="Password"
                    name="password"
                    component={this.renderField}
                />
                <Link href="/home" to="/home" className="btn btn-primary x">SignIn</Link>
                <Link href="/" to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    // validate the inputs from 'values'
    // if(values.title.length < 3){
    //     errors.title = 'Title must be at least 3 characters'
    // }
    if (!values.title) {
        errors.title='Enter a Username';
    }
    if (!values.categories) {
        errors.categories = 'Enter a Password';
    }


// If errors is empty, the form is fine ot submit
// If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'SignIn',
})(
    connect()(SignIn),
);
