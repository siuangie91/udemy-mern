import React, { Component } from 'react';
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
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
