import React, { Component } from "react";
import arrowUp from '../media/arrow-up.svg';
import arrowDown from '../media/arrow-down.svg';

const sortTypes = {
  up: {
    class: 'sort-complete',
    fn: (a, b) => {
      if(a.status == 'Complete') {
        return a;
      };
    }

  },
  down: {
    class: 'sort-not-complete',
    fn: (a, b) => {
      if(a.status != 'Complete') {
        return a;
      };
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

  completedStyle = () => {
    return <></>;
  }

  changeSort = () => {
    const { sort } = this.state;
    let nextSort;

    if (sort === 'down') nextSort = 'up';
    else if ( sort === 'up') nextSort = 'default';
    else if ( sort === 'default') nextSort = 'down';

    this.setState({
      sort: nextSort
    });
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
            <th><button class="statusHeader" onClick={() => this.setState({
        expandedProgress: !this.state.expandedProgress
      })}>
            Status
            <img src={this.state.expandedProgress ? arrowUp : arrowDown} className="sortStatus" alt="sortStatus"/>
            </button></th>
            
            <th>Grade</th>
            <th>Credits</th>
          </tr>
        </thead>
        <tbody>
						{[...data].sort(sortTypes[sort].fn).map(p => (
							<tr>
								<td>{p.courseNumber}</td>
								<td>{p.title}</td>
                <td>{p.status}</td>
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
