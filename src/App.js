import "./App.css";
import React, { Component } from "react";
import employees from "./employees.json";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import TableHeader from "./components/TableHeader/TableHeader";
import Banner from "./components/Banner/Banner";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      sort: false,
      employees: employees
    }
    this.sortBy = this.sortBy.bind(this)
  }

  sortBy(key) {
    this.setState({
      employees: employees.sort( (a, b) => a < b )
    })
  }
 
  //   handleToggle = () => {
  //     if (this.state.sorted) {
  //       this.props.sort("asc")
  //     } else {
  //       this.props.sort("desc")
  //     }
  //     this.setState({sorted: !this.state.sorted})
  // }

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
                sortBy={this.sortBy}
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
