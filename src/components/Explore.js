import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Select from 'react-select';
import DegreeList from './DegreeList';
import ReactTooltip from 'react-tooltip';
import { degrees } from  '../data/DegreeData';
import info from '../media/info-icon.svg';

const catalogYearTooltipText = "The Catalog Year is by default the year a student entered the university.<br />Because major requirements may change from year to year,<br /> students may work with their advisor to change their Catalog Year if desired.";

const yearOptions = [
  { value: '2017', label: '2017' },
  { value: '2018', label: '2018' },
  { value: '2019', label: '2019' },
  { value: '2020', label: '2020' }
];

const collegeOptions = [
  { value: 'camd', label: 'College of Arts, Media and Design (CAMD)' },
  { value: 'coe', label: 'College of Engineering (COE)' },
  { value: 'khoury', label: 'Khoury College of Computer Sciences (KCCS)' }
];

let currentList = [];

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: '2017', // TODO pull from student JSON?
      college: null
    };
  }

  handleYear(val) {
    this.setState({ year: val.value });
  };

  handleCollege(val) {
    currentList = degrees.filter(d => d.college === val.value);
    this.setState({ college: val.value });
  };



  render() {

    return (
      <div className="explore-wrapper">
        <Link to='/'>
		      <button className="home-btn" id="explore-home-btn">Home</button>
		    </Link>
        <div className="explore-content-wrapper">
        <h2>Explore other degree options</h2>

        <div className="select-wrapper">
          <h4>Catalog Year
            <span><img data-tip={catalogYearTooltipText} src={info} className="info-icon" alt="info icon" /></span>
            <ReactTooltip place="top" type="dark" effect="solid" multiline={true}/>
          </h4>
          <Select
            className="select-menu"
            options={yearOptions}
            onChange={this.handleYear.bind(this)}
            defaultValue={{ label: '2017', value: '2017' }}
          />
          <h4>College</h4>
          <Select
            className="select-menu"
            options={collegeOptions}
            onChange={this.handleCollege.bind(this)}
          />
        </div>

        <div className="degree-list-wrapper">
          {
            this.state.year && this.state.college &&
              <DegreeList
                data={currentList}
              />
          }
        </div>
        </div>
      </div>
    );
  }
}

export default Explore;
