import React, {Component} from 'react';

import './Welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div className="row " id="Body">
        <div className="medium-12 columns">
          <h1 id="welcomeText">This Is The Best Place To Buy Your Dream !</h1>





          <a href="/login" className="button">Login</a>
          <a href="/signup" className="button success">Signup</a>
        </div>
      </div>
    );
  }
}

export default Welcome;
