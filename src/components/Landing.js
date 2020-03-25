import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedGPA : false,
      degreeName : 'B.S. Computer Science/Media Art'
    };
  }

  render() {
    return (
      <div className="landing-wrapper">
        <h1>Finding Your Way</h1>
        <div>
          <Link to={{
            pathname: '/degree',
            degreeName: this.state.degreeName
          }}>
            <button className="home-btn">View current degree progress</button>
          </Link>
          <Link to="/explore">
            <button className="home-btn">Explore degree options</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
