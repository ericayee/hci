import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import Select from 'react-select';

const yearOptions = [
  { value: '2017', label: '2017' },
  { value: '2018', label: '2018' },
  { value: '2019', label: '2019' },
  { value: '2020', label: '2020' }
];

const collegeOptions = [
  { value: 'camd', label: 'College of Arts, Media and Design' },
  { value: 'coe', label: 'College of Engineering' },
  { value: 'khoury', label: 'Khoury College of Computer Sciences' }
];

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: null,
      college: null
    };
  }

  handleYear(val) {
    this.setState({ year: val.value });
  };

  handleCollege(val) {
    this.setState({ college: val.value });
  };

  render() {

    return (
      <div className="explore-wrapper">
        <NavLink to="/">Home</NavLink>
        <h2>Explore other degree options</h2>
        <div className="select-wrapper">
          <h4>Catalog Year</h4>
          <Select
            className="select-menu"
            options={yearOptions}
            onChange={this.handleYear.bind(this)}
          />
          <h4>College</h4>
          <Select
            className="select-menu"
            options={collegeOptions}
            onChange={this.handleCollege.bind(this)}
          />
        </div>
        <div className="degree-list-wrapper">


        </div>

      </div>
    );
  }
}

export default Explore;
