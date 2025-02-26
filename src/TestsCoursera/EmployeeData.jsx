import React ,{  useState} from "react";

function EmployeeData (props){
  
        const[showIncrease , setshoIncrease]= useState(false)

         return(
        <>
           <h1>{props.name}</h1>
           <h2>{props.employee_id}</h2>
           <h3>{props. dept_id}</h3>
         <button onClick={()=> setshoIncrease(!showIncrease)}>
            click here to {showIncrease? 'hide':'show'} the yearly increment
         </button>
         {showIncrease &&   <div>{props.increase}</div>}
         
        </>
     );
    }
   
    

 export default EmployeeData