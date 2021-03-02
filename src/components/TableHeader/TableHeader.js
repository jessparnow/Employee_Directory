import React from "react";

function TableHeader(props) {
  // let employees = props.employees;
  return (
    <div>
      {/* {Object.keys(employees).map(key => (
            <th>{key}</th>
        ))} */}
      
      <th>Occupation</th>
      <th>Location</th>
      <th>Email</th>
      <th>Phone</th>
    
      </div>

  );
}
export default TableHeader;
