import "./App.css";
import React, { Component } from "react";
import employees from "./employees.json";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import TableHeader from "./components/TableHeader/TableHeader";
import Banner from "./components/Banner/Banner";
import Button from "./components/Button/Button";
import IdButton from "./components/IdButton/IdButton";
class App extends Component {
  state = {
      employees: employees
    }
 

  sortBy = () => {
     let sortedEmployee = this.state.employees.sort((a, b) => (a.name > b.name) ? 1 : -1);
     //target the name to sort
     this.setState({sortedEmployee})
  }
  sortById = () => {
    let sortedEmployeeId = this.state.employees.sort((a, b) => (a.id > b.id) ? 1 : -1);
    //target the name to sort
    this.setState({sortedEmployeeId})
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
          <thead>
            
          <IdButton 
          sortById={this.sortById}/>
          <Button
          sortBy={this.sortBy} />
          <TableHeader
          // employees = {employeeData[0]}
          />
          
       </thead>
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
