import React from "react";
import EmployeeDetails2 from "./EmployeeDetails2";

 function DesignationDetails(){
    let emp_designation ="project Manager";
    return(
        <>
        <EmployeeDetails2 emp_designation={emp_designation} />
        </>
    )
 }

 export default DesignationDetails