import React from "react";

function EmployeeTable(props) {
  let employees = props.employees;
  return (
    <tr>
      {Object.keys(employees).map((key) => (
      <td>{employees[key]}</td>
    ))}
      {/* <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.occupation}</td>
      <td>{props.location}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td> */}
    </tr>
  );
}
export default EmployeeTable;
