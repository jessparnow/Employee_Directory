import React from "react";

function TableHeader(props) {
  let employees = props.employees;
  return (
    <thead>
      <tr>
      {Object.keys(employees).map(key => (
            <th>{key}</th>
        ))}
      </tr>
    </thead>
);
}
export default TableHeader;
