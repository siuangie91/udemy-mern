import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Dashboard = props => {
  return (
    <div>
      Dashboard
      {props.auth && props.auth.credits > 0 ? (
        <div className='fixed-action-btn'>
          <Link to='/surveys/new' className='btn-floating btn-large red'>
            <i className='material-icons'>add</i>
          </Link>
        </div>
      ) : (
        <div className='fixed-action-btn'>
          <span className='btn-floating btn-large orange'>
            <i className='material-icons'>error</i>
          </span>
          <span>You have no credits!</span>
        </div>
      )}
    </div>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);
