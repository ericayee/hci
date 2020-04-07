import React, { Component } from "react";
// import { Dropdown } from "semantic-ui-react";
import { Link } from 'react-router-dom';

class DegreeSidebar extends Component {

  handleDropdown = () => {
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
  };

  render() {
    return (
      <div className="sidenav">
		<Link to='/'>
		<button className="home-btn">Home</button>
		</Link>
        <a href="#summary">Summary</a>
        <a href="#main-requirements">Computer Science</a>
        <a href="#art-requirements">Art</a>
        <a href="#general-requirements">NuPath</a>
        <a href="#transfer">Transfer Credit</a>
        {/*}<button className="dropdown-btn">
          Dropdown
          <i className="fa-caret-down"></i>
        </button>
        <div className="dropdown-container">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        */}
        {/*<Dropdown
          className="dropdown-btn"
          text="dropdown"
          onClick={this.handleDropdown}
        >
          <Dropdown.Menu>
            <Dropdown.Item text="List Item" />
          </Dropdown.Menu>
        </Dropdown>
        <button className="dropdown-btn">
          Dropdown
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-container">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
	</div> */}
      </div>
    );
  }
}

export default DegreeSidebar;
