import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' }
];

class SurveyForm extends Component {
  renderFields(fields) {
    return (
      fields.map((field, i) => {
        return <Field key={i} component={SurveyField} type="text" {...field} />
      })
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields(FIELDS)}
          <Link to="/surveys" className="red btn-flat left white-text">Cancel</Link>
          <button type='submit' className='teal btn-flat right white-text'>Next <i className="material-icons right">done</i></button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  // `values` contains all the form field values
  const errors = {};
  
  if(!values.title) {
    errors.title = 'You must provide a title';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);
