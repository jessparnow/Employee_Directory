import React from "react";

function IdButton(props) {
  // let employees = props.employees;
  return (
      <th>
        <button type="button" onClick={props.sortById}>Id</button>
        </th>
  );
}
export default IdButton;
