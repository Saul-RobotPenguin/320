import React, { useState } from "react";
import HomePage from "./HomePage";
import EmployeePage from "./EmployeePage";

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div>
      {selectedEmployee ? (
        <EmployeePage
          employee={selectedEmployee}
          goBack={() => setSelectedEmployee(null)}
        />
      ) : (
        <HomePage onSelectEmployee={setSelectedEmployee} />
      )}
    </div>
  );
}

export default App;
