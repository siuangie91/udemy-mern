// shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = {
    showFormReview: false
  };
  render() {
    return (
      <div>
        {!this.state.showFormReview ? (
          <SurveyForm
            onSurveySubmit={() => this.setState({ showFormReview: true })}
          />
        ) : (
          <SurveyReview
            onCancel={() => this.setState({ showFormReview: false })}
          />
        )}
      </div>
    );
  }
}

// every time SurveyNew is unmounted, clear out form values,
// unlike SurveyForm
export default reduxForm({ form: 'surveyForm' })(SurveyNew);
