import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  return (
    <div>
      <h5>Please confirm:</h5>
      {formFields.map(({ label, name }, i) => {
        return (
          <div key={i}>
            <label>{label}</label>
            <div>{formValues[name]}</div>
          </div>
        );
      })}
      <button
        className='yellow darken-3 btn-flat white-text'
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className='green btn-flat white-text right'
        onClick={() => submitSurvey(formValues)}
      >
        Send Survey<i className='material-icons right'>email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(
  mapStateToProps,
  actions
)(SurveyFormReview);
