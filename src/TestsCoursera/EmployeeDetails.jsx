import React,{Component} from "react";

class EmployeeDetails extends Component{

    constructor(props){
        super(props);
        this.state={emp_id: '',emp_email:''};
    }
    handleInputChange= event =>{
        const {name ,value}= event.target;
        this.setState({[name]:value});
    };
    render(){
        const {emp_id , emp_email}=this.state;
        return(
            <div className="EmployeeDetails">
                <div style={{color :"red"}}> for PROPS</div>
                <button onClick={() => alert(`employee id : ${emp_id} , Email : ${emp_email} `)}> show Details</button><br></br>
                <input type="text" name="emp_id" value={emp_id} onChange={this.handleInputChange} />
                <input type="email" name="emp_email" value={emp_email} onChange={this.handleInputChange} />
            </div>
        )
    }
}

export default EmployeeDetails