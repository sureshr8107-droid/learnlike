import React from "react";
import employees from "./data";
import "./App.css";

function Employees() {
  return (
    <div className="container">
      <h2>Employee Details</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>DOB</th>
            <th>Salary</th>
            <th>Experience</th>
            <th>Degree</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.dob}</td>
              <td>{emp.salary}</td>
              <td>{emp.experience}</td>
              <td>{emp.degree}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <a href="/">Logout</a>
    </div>
  );
}

export default Employees;
