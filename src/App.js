import React, { Component } from 'react';
import './App.css';
import EmployeeTable from "./components/EmployeeTable";
import employeeData from "./employees.json";
  
  export default class App extends Component {

    state = {
      employees: employeeData.results,
      filterData: employeeData.results
    }

    handleClick = () => {
     
     let fullNameDescend = this.state.employees.sort((a, b) => a.name.first > b.name.first ? 1 : -1)

     console.log('name',fullNameDescend)

      this.setState({
        filterData: fullNameDescend
      })

      // need to sort the apposite way
      //create a form that can filter - type first name it will search for that user

    }


    render() {

     // console.log('state', this.state)
      return (
        <div>
              <EmployeeTable onClick={this.handleClick} employees={this.state.filterData}/>
        </div>
      )
    }
  }
  


