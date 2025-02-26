import React ,{ Component} from "react";

class TestComponent extends Component{
    constructor(props){
        super(props);
        this.state={ id:1 , name :'sami' , age :26}
    }
    render(){
        return(
            <div>
                <div style={{color :"red"}}> example for State</div>
                <p> {this.state.name}</p>
                <p>{this.state.age}</p>
            </div>
        );
    }
    
}
 export default TestComponent