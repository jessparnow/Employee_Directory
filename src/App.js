import "./App.css";
import React, { Component } from "react";
import employees from "./employees.json";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import TableHeader from "./components/TableHeader/TableHeader";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees,
  };
  // sortEmployees =()  => {
  //   // Filter this.state.employees for employees with an id not equal to the id being removed
  //   const employees = this.state.employees.filter(friend => friend.id !== id);
  //   // Set this.state.employees equal to the new employees array
  //   this.setState({ employees });
  // };
  // Map over this.state.employees and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <table className="table table-striped table-dark">
          <TableHeader
          // employees = {employeeData[0]}
          />

          <tbody>
            {this.state.employees.map((employees) => (
              <EmployeeTable
                id={employees.id}
                key={employees.id}
                name={employees.name}
                image={employees.image}
                occupation={employees.occupation}
                location={employees.location}
                email={employees.email}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
