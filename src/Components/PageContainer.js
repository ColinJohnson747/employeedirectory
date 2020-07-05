import API from "../utils/API";
import React, { Component } from "react";
import Searchform from "./Searchform";
import EmployeeTable from "./EmployeeTable";

class PageContainer extends Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: [],
    order: "",
  };

  componentDidMount() {
    API.getUsers()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    const employees = this.state.employees;
    const UserInput = event.target.value;
    const filteredEmployees = employees.filter(
      (employee) =>
        employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
    );
    this.setState({
      filteredEmployees,
    });
  };

  sortByName = () => {
    const employeesFiltered = this.state.filteredEmployees;
    if (this.state.order === "asc") {
      const sortedEmployees = employeesFiltered.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
      console.log(sortedEmployees);
      this.setState({
        filteredEmployees: sortedEmployees,
        order: "desc",
      });
    } else {
      const sortedEmployees = employeesFiltered.sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1
      );
      console.log(sortedEmployees);
      this.setState({
        filteredEmployees: sortedEmployees,
        order: "asc",
      });
    }
  };
}
