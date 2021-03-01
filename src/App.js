import "./App.css";
import React, { Component } from "react";
import employees from "./employees.json";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import TableHeader from "./components/TableHeader/TableHeader";
import Banner from "./components/Banner/Banner"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employees,
    }
    this.sortBy = this.sortBy.bind(this)
  }

  sortBy(key) {
    this.setState({
      employees: employees.sort((a, b) => a < b )
    })
  }

  render() {
    return (
      <div>
        <Banner />
        <table className="table table-striped table-dark">
          <TableHeader
          // employees = {employeeData[0]}
          employees={this.state.employees}
          sortBy={this.sortBy}
          />

          <tbody>
            {this.state.employees.map((employees) => (
              <EmployeeTable
                id={employees.id}
                key={employees.id}
                name={employees.name}
                occupation={employees.occupation}
                location={employees.location}
                email={employees.email}
                phone={employees.phone}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
