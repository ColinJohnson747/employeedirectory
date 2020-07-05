import React from "react";
import Moment from "react-moment";

function EmployeeTable(props) {
  return (
    <table classname="tableEmployee">
      <thread>
        <tr>
          <th></th>
          <th onClick={props.sortByName}>Name</th>
          <th>Phone</th>
          <th>E-Mail</th>
          <th>Date of Birth</th>
        </tr>
      </thread>

      <tbody className="">
        {props.results.map((result) => (
          <tr className="table" key={result.login.uuid}>
            <td>
              <img className="" src={result.picture.medium} alt="" />
            </td>

            <td>{`${result.name.first} ${result.name.last}`} </td>

            <td>{result.cell}</td>
            <td className="email">
              <a href={result.email}>{result.email}</a>
            </td>
            <td>
              <Moment format="MM/DD/YYYY">{result.dob.date}</Moment>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default EmployeeTable;
