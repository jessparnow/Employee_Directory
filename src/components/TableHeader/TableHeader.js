import React from "react";

function TableHeader(props) {
  // let employees = props.employees;
  return (
    <thead>
    <tr>
      {/* {Object.keys(employees).map(key => (
            <th>{key}</th>
        ))} */}
      <th scope="col">Id</th>
      <th scope="col">
        <button type="button" onClick={() => props.sortBy}>Name</button>
      </th>
      <th scope="col">Occupation</th>
      <th scope="col">Location</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>

  );
}
export default TableHeader;
