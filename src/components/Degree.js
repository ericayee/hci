import React, { Component } from "react";
//import { NavLink } from 'react-router-dom';
import './Degree.css';
import ReactTooltip from 'react-tooltip';
import info from '../media/info-icon.svg';
import arrowUp from '../media/arrow-up.svg';
import arrowDown from '../media/arrow-down.svg';
import DegreeSidebar from "./DegreeSidebar";

const TotalCreditsTooltipText = "This includes credits from all courses taken at Northeastern and accepted transfer credits.";
const ProgramCreditsTooltipText = "This includes only credits from courses that are required for a student's major. Each degree requires a different credit minimum in order to be completed.";
const UniversityCreditsTooltipText = "Students must earn a minimum of 64 credits from courses at Northeastern in order to receive a bachelor's degree.";


const UniversityDegreeTooltipText = "University GPA includes only courses taken at Northeastern.";
const CompletedRequirementsTooltipText = "Each degree is broken down into a series of requirements, including both major requirements and university-wide requirements.";
const MajorGPATooltipText = "Degree GPA only includes courses that fulfill the requirements of a student's major.";


class Degree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedGPA : false,
      expandedProgress : false,
      degreeName : this.props.location.degreeName
    };
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    if (!this.state.degreeName) {
      // for all items in state
      for (let key in this.state) {
        // if key exists in localStorage
        if (localStorage.hasOwnProperty(key)) {
          // get key's value from localStorage
          let value = localStorage.getItem(key);

          // parse localStorage string and setState
          try {
            value = JSON.parse(value);
            this.setState({
              [key]: value
            });
          } catch (e) {
            // handle empty string
            this.setState({
              [key]: value
            });
          }
        }
      }
    }
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  render() {
    return (
      <div className="degree-wrapper">
      <DegreeSidebar/>
      <div className="summary">
      <div className="header1">
      <a id="summary"/>
      <h2>Summary</h2>
      </div>
      <div className="sumText">




      <p> <b>Degree:</b> {this.state.degreeName}</p>
      {/*<p> <b>Degree:</b> Computer Science/Media Art</p>*/}
      <p> <b> Total Credits:</b> 30
      <span><img data-tip={TotalCreditsTooltipText} src={info} className="info-icon" alt="info icon" /></span>
      <ReactTooltip place="top" type="dark" effect="solid" multiline={true}/>
      </p>
      <p> <b> Pogram Credits: </b> 22/100 Required
      <span><img data-tip={ProgramCreditsTooltipText} src={info} className="info-icon" alt="info icon" /></span>
      <ReactTooltip place="top" type="dark" effect="solid" multiline={true}/>
      </p>

      <p> <b> University Credits: </b> 30/64 Required
          <span><img data-tip={UniversityCreditsTooltipText} src={info} className="info-icon" alt="info icon" /></span>
          <ReactTooltip place="top" type="dark" effect="solid"/>
      </p>

      <button type="button" class="MultipleGPA" onClick={() => this.setState({
        expandedProgress: !this.state.expandedProgress
      })}>
        <p> <b> Credits in Progress: </b> 17
        <span><img src={this.state.expandedProgress ? arrowUp : arrowDown} className="dropDownGPA" alt="dropDownGPA" /></span>
        </p>

      </button>
      {this.state.expandedProgress &&
        <div className="expandedGPASection">
        <p> These are courses a student is currently registered taking. </p>
        <p>They are not currently included in Universiy Credits. </p>
        <div className = "requirementTable" >
        <table>
        <tr>
          <th>Course Number</th>
          <th>Title</th>
          <th>Credits</th>

        </tr>
        <tr>
          <td>CS 2510</td>
          <td>Fundamentals of Computer Science 2 </td>
          <td>5</td>
        </tr>

        <tr>
          <td>ARTD 2370</td>
          <td>Animation Basics	 </td>
          <td> 4 </td>
        </tr>

        <tr>
          <td>ARTD 2380</td>
          <td> Video Basics	 </td>
          <td>4</td>
        </tr>
        </table>
        </div>



        </div>}


      <p> <b> Completed Requirements:</b> 4/11
          <span><img data-tip={CompletedRequirementsTooltipText} src={info} className="info-icon" alt="info icon" /></span>
          <ReactTooltip place="top" type="dark" effect="solid" multiline={true}/>
      </p>

      <button type="button" class="MultipleGPA" onClick={() => this.setState({
        expandedGPA: !this.state.expandedGPA
      })}>
        <p> <b> Total GPA: </b> 3.11
        <span><img src={this.state.expandedGPA ? arrowUp : arrowDown} className="dropDownGPA" alt="dropDownGPA" /></span>
        </p>

      </button>
      {this.state.expandedGPA &&
        <div className="expandedGPASection">
      <p> A minimum total GPA of 2.0 is required to graduate. </p>
        <p> A minimum degree GPA of 2.3 is required to graduate. </p>


          <p> <b> Degree GPA:</b> 3.0
            <span><img data-tip={MajorGPATooltipText} src={info} className="info-icon" alt="info icon" /></span>
            <ReactTooltip place="top" type="dark" effect="solid"/>
          </p>
          <p> <b> University GPA: </b> 3.1
            <span><img data-tip={UniversityDegreeTooltipText} src={info} className="info-icon" alt="info icon" /></span>
            <ReactTooltip place="top" type="dark" effect="solid"/>
          </p>
        </div>}
</div>



      </div>

      <div className="Computer Science">
      <div className="header1">
      <a id="main-requirements"/>
      <h2>Computer Science </h2>
      </div>
      <p> 1/3 Computer Science Requirements Satisfied </p>

      <div className="ReqFormat">
      <h4> Overview Requirements </h4>
      <div className = "requirementTable" >
      <table>
      <tr>
        <th>Course Number</th>
        <th>Title</th>
        <th>Status</th>
        <th>Grade</th>
        <th>Credits</th>

      </tr>
      <tr>
        <td><div className= "Completed">cs1200 </div> </td>
        <td><div className= "Completed">Leadership Skills</div></td>
        <td><div className= "Completed">Completed</div></td>
        <td><div className= "Completed">P</div></td>
        <td><div className= "Completed">1</div></td>
      </tr>

      <tr>
        <td><div className= "Completed">cs1210</div></td>
        <td> <div className= "Completed">Professional Development for Khoury Co-op</div>	</td>
        <td><div className= "Completed">Completed</div></td>
        <td><div className= "Completed">P</div></td>
        <td><div className= "Completed">1</div></td>
      </tr>
      </table>
</div>

<h4> Fundemental Courses </h4>
<p> A grade of C- or higher is required in all compute science fundemental courses </p>

<div className = "requirementTable" >

      <table>
      <th>Course Number</th>
      <th>Title</th>
      <th>Status</th>
      <th>Grade</th>
      <th>Credits</th>


      <tr>
        <td><div className= "Completed">CS 1800</div></td>
        <td><div className= "Completed">Discrete Structures </div></td>
        <td><div className= "Completed"> Completed</div> </td>
        <td><div className= "Completed">B</div></td>
        <td><div className= "Completed">5</div></td>
      </tr>

      <tr>
        <td><div className= "Completed">CS 2500 </div></td>
        <td><div className= "Completed">Fundamentals of Computer Science 1</div> </td>
        <td> <div className= "Completed">Completed</div> </td>
        <td><div className= "Completed">B-</div></td>
        <td><div className= "Completed">5</div></td>
      </tr>


      <tr>
        <td>CS 2510</td>
        <td>Fundamentals of Computer Science 2 </td>
        <td> In Progress </td>
        <td> - </td>
        <td>5</td>
      </tr>


    </table>
      </div>

      <h4> Presentation Requirement </h4>
      <div className = "requirementTable" >
      <table>
      <tr>
        <th>Course Number</th>
        <th>Title</th>
        <th>Status</th>
        <th>Grade</th>
        <th>Credits</th>

      </tr>
      <tr>
        <td>THTR 1170</td>
        <td>The Eloquent Presenter</td>
        <td> Unattempted </td>
        <td> - </td>
        <td>1</td>
      </tr>
      </table>
      </div>
      </div>
</div>
      <div className="Media Art">
      <div className="header1">
      <a id="art-requirements"/>
      <h2> Art </h2>
      </div>

      <p> 0/2 Media Art Requirements Satisfied </p>

      <div className="ReqFormat">
      <h4> Required Media Art Courses </h4>
      <div className = "requirementTable" >
      <table>
      <tr>
        <th>Course Number</th>
        <th>Title</th>
        <th>Status</th>
        <th>Grade</th>
        <th>Credits</th>

      </tr>
      <tr>
        <td> <div className= "Completed"> ARTF 1120 </div> </td>
        <td><div className= "Completed">Observational Drawing </div>	</td>
        <td><div className= "Completed">Completed </div></td>
        <td><div className= "Completed"> B </div></td>
        <td> <div className= "Completed">4 </div></td>
      </tr>

      <tr>
        <td> ARTF 1141 - ARTF 1149  </td>
        <td> <i> Complete one course in the range		</i></td>
        <td> Unattempted </td>
        <td> -  </td>
        <td> 4 </td>
      </tr>

      <tr>
        <td><div className= "Completed">ARTF 1122</div></td>
        <td> <div className= "Completed">2D Fundamentals: Surface and Drawing</div></td>
        <td><div className= "Completed">Completed</div></td>
        <td><div className= "Completed">A</div></td>
        <td><div className= "Completed">4</div></td>
      </tr>

      <tr>
        <td><div className= "Completed">ARTF 1124</div></td>
        <td> <div className= "Completed">3D Fundamentals: Structure and Drawing	</div>	</td>
        <td><div className= "Completed">Completed</div></td>
        <td><div className= "Completed">C+</div></td>
        <td><div className= "Completed">4</div></td>
      </tr>
      <tr>
        <td><div className= "Completed">ARTF 1125	</div></td>
        <td> <div className= "Completed">3D Tools	</div>	</td>
        <td><div className= "Completed">Completed</div></td>
        <td><div className= "Completed">C+</div></td>
        <td><div className= "Completed">1</div></td>
      </tr>
      </table>
</div>

<h4> Media Arts Electives </h4>

<div className = "requirementTable" >

      <table>
      <th>Course Number</th>
      <th>Title</th>
      <th>Status</th>
      <th>Grade</th>
      <th>Credits</th>


      <tr>
        <td><div className= "Completed">ARTD 2360 </div></td>
        <td><div className= "Completed">Photo Basics	</div> </td>
        <td> <div className= "Completed">Completed</div> </td>
        <td><div className= "Completed">B </div></td>
        <td><div className= "Completed">4 </div></td>
      </tr>

      <tr>
        <td>ARTD 2370</td>
        <td>Animation Basics	 </td>
        <td> In progress </td>
        <td> - </td>
        <td> 4 </td>
      </tr>

      <tr>
        <td>ARTD 2380</td>
        <td> Video Basics	 </td>
        <td> In progress </td>
        <td> - </td>
        <td>4</td>
      </tr>


    </table>
      </div>


      </div>
</div>



      <div className="NUpath">
      <div className="header1">
      <a id="general-requirements"/>
      <h2> NUPath </h2>
      </div>
      <p> 2/7 NUPATH Requirements Satisfied </p>

      <p> For more information on which courses count towards NUPATH requirements visit <a href="https://www.northeastern.edu/core/"> northeastern.edu/core</a> </p>

      <div className="ReqFormat">




      <div className = "requirementTable" >

            <table>
            <th>Course Number</th>
            <th>Title</th>
            <th>Status</th>
            <th>Grade</th>
            <th>Credits</th>

            <tr>
              <td>-</td>
              <td>Engaging with the Natural and Designed World	 </td>
              <td> Unattempted </td>
              <td>-</td>
              <td>-</td>
            </tr>

            <tr>
              <td><div className= "Completed">ARTF 1120	</div></td>
              <td><div className= "Completed">Observational Drawing	</div>	 </td>
              <td><div className= "Completed"> Completed</div> </td>
              <td><div className= "Completed">B</div></td>
              <td><div className= "Completed">4</div></td>
            </tr>

            <tr>
              <td>-</td>
              <td> Conducting Formal and Quantitative Reasoning	 </td>
              <td> Unattempted </td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td> Analyzing and Using Data	 </td>
              <td> Unattempted </td>
              <td>-</td>
              <td>-</td>
            </tr>

            <tr>
              <td><div className= "Completed">ENG 1100 </div></td>
              <td><div className= "Completed">Writing in the First Year	</div> </td>
              <td><div className= "Completed"> Completed</div> </td>
              <td><div className= "Completed">A </div></td>
              <td><div className= "Completed">4 </div></td>
            </tr>



            <tr>
              <td>-</td>
              <td> Advanced Writing</td>
              <td>Unattempted </td>
              <td> -</td>
              <td>-</td>
            </tr>

            <tr>
              <td>-</td>
              <td>Integrating Knowledge and Skills Through Experience</td>
              <td>Unattempted </td>
              <td> -</td>
              <td>-</td>
            </tr>

          </table>
            </div>


      </div>
      </div>

      <div className="Transfer">
      <a id="transfer"/>
      <div className="header1">
      <h2> Transfer Credits </h2>
      </div>

      <div className = "requirementTable" >
      <p> Only AP credits above 3 are accepted for credit </p>

            <table>
            <th>Title</th>
            <th>Status</th>
            <th>Grade</th>
            <th>Credits</th>

            <tr>
              <td>AP Writing</td>
              <td> Accepted </td>
              <td> Completed </td>
              <td>4</td>
            </tr>

            <tr>
              <td> AP Biology</td>
              <td> Accepted </td>
              <td> 5 </td>
              <td> 4 </td>
            </tr>

            <tr>
              <td> AP French</td>
              <td> Not Accepted  </td>
              <td> 3 </td>
              <td> - </td>
            </tr>

          </table>
            </div>


      </div>

      </div>


    );
  }
}

export default Degree;
