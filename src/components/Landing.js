import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Landing.css';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedGPA : false,
      studentName: "John",
      degreeName : 'B.S. Computer Science/Media Art'
    };
  }

  render() {
    return (
      <div className="landing-wrapper">

      <div className="welcomeName">
        <p>Hi {this.state.studentName}</p>
        </div>
        <div className= "explanationParagraph">
        <p>Welcome to <i>Finding Your Way. </i></p>
        <p>You are currently working towards a  <i> {this.state.degreeName} </i> </p>
        <p> You can choose to check out your progress towards completing this degree, or choose to explore other potential degree options. </p>
        </div>

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
