import React, { Component } from "react";



class RequirementsTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Course Number</th>
            <th>Title</th>
            <th>Status</th>
            <th>Grade</th>
            <th>Credits</th>
          </tr>
        </thead>
        <tbody>
						{data.map(p => (
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
