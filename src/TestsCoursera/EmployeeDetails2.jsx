import React,{Component} from "react";

class EmployeeDetails2 extends Component{

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
        const {emp_designation} =this.props; // للوصول للمعلومة بالاب 
        return(
            <div className="EmployeeDetails2">
                <div style={{color :"red"}}> for PROPS in class</div>
                <button onClick={() => alert(`employee id : ${emp_id} , Email : ${emp_email} , Designation: ${emp_designation} `)}> 
                    show Details</button><br></br>
                <input type="text" name="emp_id" value={emp_id} onChange={this.handleInputChange} />
                <input type="email" name="emp_email" value={emp_email} onChange={this.handleInputChange} />
            </div>
        )
    }
}

export default EmployeeDetails2