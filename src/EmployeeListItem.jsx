import React from "react";
import "./App.css";

function EmployeeListItem({ employee, onClick }) {
  return (
    <div className="employee-list-item" onClick={onClick}>
      <img
        src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`}
        alt={employee.name}
      />
      <div>
        <h2>{employee.name}</h2>
        <p>{employee.title}</p>
      </div>
    </div>
  );
}

export default EmployeeListItem;
