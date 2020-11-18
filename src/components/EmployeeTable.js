import React from "react"; 
import EmployeeRow from "./EmployeeRow";

function EmployeeTable(props) {

    return(
        <table>
            <thead>
                <th>Picture</th>
                <th onClick={props.onClick}>Full Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Date of birth</th>

            </thead>
            <tbody>
                {
                    props.employees.map(employeeRecord =>
                        (<EmployeeRow employeeRecord={employeeRecord} />))
                }
            </tbody>
        </table>
    );
}

export default EmployeeTable;