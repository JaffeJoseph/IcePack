import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SignUp extends Component {
    renderField(field){
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger': ''}`
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit() {
    
    }
    
    render() {
        const { handleSubmit } = this.props;
    
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Email"
                    name="email"
                    component={this.renderField}
                />
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
                <Link to="/home" className="btn btn-primary">SignUp</Link>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values){
    const errors = {};

    // validate the inputs from 'values'
    // if(values.title.length < 3){
    //     errors.title = 'Title must be at least 3 characters'
    // }
    if(!values.title){
        errors.title='Enter a Email';
    }
    if(!values.categories){
        errors.categories = 'Enter a Username';
    }
    if(!values.content){
        errors.content = 'Enter a Password';
    }


//If errors is empty, the form is fine ot submit
//If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'SignUp'
})(
    connect(null, {})(SignUp)
);
