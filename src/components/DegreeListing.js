import React, { Component } from "react";
import { Link } from "react-router-dom";
import arrowUp from '../media/arrow-up.svg';
import arrowDown from '../media/arrow-down.svg';
import arrowUpRight from '../media/arrow-up-right.svg';

class DegreeListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      learnMore: false
    };
  }

  render() {
    return (
      <div className="degree-listing-wrapper">
        <div className="degree-listing-flex">
          <div className="degree-listing-name">{this.props.degree}</div>
          <div
            className="degree-listing-learn"
            onClick={() => this.setState({
              learnMore: !this.state.learnMore
            })}>
            <button class="explore-btn">
              <span>Learn more</span>&nbsp;
              <span><img src={this.state.learnMore ? arrowUp : arrowDown} className="arrow-icon" alt="arrow" /></span>
            </button>
          </div>
          <div className="degree-listing-link">
            <button class="explore-btn">
              <a href={this.props.link} target="_blank" rel="noopener noreferrer">Catalog page&nbsp;
              <span><img src={arrowUpRight} className="arrow-icon" alt="upper right arrow" /></span></a>
            </button>
          </div>
          <div className="degree-listing-view">
            <Link to={{
              pathname: '/degree',
              degreeName: this.props.degree
            }}>
              <button class="explore-btn">View degree</button>
            </Link>
          </div>
        </div>
        {this.state.learnMore &&
          <div className="degree-listing-desc">{this.props.description}</div>}
      </div>
    );
  }
}

export default DegreeListing;
