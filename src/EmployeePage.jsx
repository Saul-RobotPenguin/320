import React from "react";
import Header from "./Header";
import EmployeeDetails from "./EmployeeDetails";

function EmployeePage({ employee, goBack }) {
  return (
    <div>
      <Header title="Employee" goBack={goBack} />
      <EmployeeDetails employee={employee} />
    </div>
  );
}

export default EmployeePage;
