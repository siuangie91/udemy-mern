import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Fragment>
            <Route path="/" exact component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/surveys" component={SurveyNew} />
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
