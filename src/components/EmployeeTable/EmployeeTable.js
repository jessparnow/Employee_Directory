import React from "react";

function EmployeeTable(props) {
  let employees = props.employees;
  return (
    <tr>
      {Object.keys(employees).map((key) => {
        return <td>{employees[key]}</td>;
      })}
    </tr>
  );
}
export default EmployeeTable; 
