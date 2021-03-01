import "./App.css";
import React, { Component } from "react";
import employees from "./employees.json";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import TableHeader from "./components/TableHeader/TableHeader";
import Banner from "./components/Banner/Banner";

class App extends Component {
  state = {
    employees: employees,
  };

  render() {
    return (
      <div>
        <Banner />
        <table className="table table-striped table-dark">
          <TableHeader
          // employees = {employeeData[0]}
          />

          <tbody>
            {this.state.employees.map((employees) => (
              <EmployeeTable
                employees={employees}
                // id={employees.id}
                // key={employees.id}
                // name={employees.name}
                // occupation={employees.occupation}
                // location={employees.location}
                // email={employees.email}
                // phone={employees.phone}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
