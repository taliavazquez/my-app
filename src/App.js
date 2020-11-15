import './App.css';
import EmployeeTable from "./components/EmployeeTable";

import employeeData from "./employees.json";

function App() {
  return (
    <EmployeeTable employees={employeeData.results}/>
      );
      }

      export default App;
