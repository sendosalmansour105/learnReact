import React from "react";
import EmployeeData from "./EmployeeData";

 function EmployeApp(){
  const employee_id=111;
    return(
        <>
        <EmployeeData name='jone' employee_id={employee_id} dept_id={567} increase={10000}/>
        </>
    );
 }

 export default EmployeApp