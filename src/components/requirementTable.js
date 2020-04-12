import React, { Component } from "react";
import arrowUp from '../media/arrow-up.svg';
import arrowDown from '../media/arrow-down.svg';

const sortTypes = {
  sortComplete: {
    class: 'sortComplete',
    fn: (a, b) => {
      return a.status - b.status; 
    }

  },
  sortNotComplete: {
    class: 'sortNotComplete',
    fn: (a, b) => {
      return b.status - a.status;
    }
  },
  default: {
    class: 'sort',
    fn: (a, b) => a
  }
}

class RequirementsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'default'
    };
  }

  changeSort = () => {
    console.log("reaches changeSort")
    const { sort } = this.state;
    let nextSort;

    if (sort === 'sortComplete') nextSort = 'sortNotComplete';
    else if ( sort === 'sortNotComplete') nextSort = 'default';
    else if ( sort === 'default') nextSort = 'sortComplete';

    this.setState({
      sort: nextSort
    });
    console.log("this sort is: " + sort)
  }

  statusPrint(i) {
    switch (i) {
      case 0: return 'Completed';
      case 1: return 'In Progress';
      default: return 'Unattempted';
    } 

  }

  checkCompleted(i) {
    if ( i === 0) { return 'Completed'}
  }

  render() {
    const { data } = this.props;
    const { sort } = this.state;
    return (
      <table>
        <thead>
          <tr>
            <th>Course Number</th>
            <th>Title</th>
            <th><button class="statusHeader" onClick={this.changeSort}>
            Status
            <img src={this.state.expandedProgress ? arrowUp : arrowDown} className="sortStatus" alt="sortStatus"/>
            </button></th>
            
            <th>Grade</th>
            <th>Credits</th>
          </tr>
        </thead>
        <tbody>
						{[...data].sort(sortTypes[sort].fn).map(p => (
							<tr class={this.checkCompleted(p.status)}>
								<td>{p.courseNumber}</td>
								<td>{p.title}</td>
                <td>{this.statusPrint(p.status)}</td>
								<td>{p.grade}</td>
                <td>{p.credits}</td>
							</tr>
						))}
					</tbody>

      </table>
    );
  }
}

export default RequirementsTable;
