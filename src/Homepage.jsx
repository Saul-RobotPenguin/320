import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

function HomePage({ onSelectEmployee }) {
  return (
    <div>
      <Header title="Employee Directory" />
      <SearchBar />
      <EmployeeList onSelectEmployee={onSelectEmployee} />
    </div>
  );
}

export default HomePage;
