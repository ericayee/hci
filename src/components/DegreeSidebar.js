import React, { Component } from "react";
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
      </div>
    );
  }
}

export default DegreeSidebar;
