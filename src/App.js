import './App.css';
import React, { Component } from "react";
import employees from "./employees.json";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import TableHeader from "./components/TableHeader/TableHeader";
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };
  removeFriend = id => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(friend => friend.id !== id);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };
  // Map over this.state.employees and render a FriendCard component for each friend object
  render() {
    return (
      <div>
    <table className="table table-striped table-dark">
        <TableHeader employees = {employees[0]} />
      <tbody>
        {this.state.employees.map(employees => (
          <EmployeeTable
            employees = {employees}
            // removeFriend={this.removeFriend}
            // id={employee.id}
            // key={employee.id}
            // name={employee.name}
            // image={employee.image}
            // occupation={employee.occupation}
            // location={employee.location}
            // email={employee.email}
          />
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
