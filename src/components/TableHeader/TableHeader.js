import React from "react";

function TableHeader(props) {
  let employees = props.employees;
  return (
    
      
        <tr>
          {Object.keys(employees).map((key) => {
            return <th>{key}</th>;
          })}
        </tr>
    
    
  );
}
export default TableHeader;
