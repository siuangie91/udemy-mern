// shows SurveyForm and SurveyshowFormReview
import React, { Component } from 'react';
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
          <SurveyReview />
        )}
      </div>
    );
  }
}

export default SurveyNew;
