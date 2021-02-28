import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import TableHeader from "./components/TableHeader/TableHeader";
import employees from "./employees.json";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees,
  };

  // Map over this.state.employees and render a table component for each friend object
  render() {
    return (
      <table class="table">
       <thead>
          <TableHeader
          employees = {employees[0]} />
        </thead>
        <tbody>
          {" "}
          {this.state.employees.map((employees) => (
            <EmployeeTable employees={employees} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default App;
