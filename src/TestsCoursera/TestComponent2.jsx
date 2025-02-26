import React ,{ Component} from "react";

class TestComponent2 extends Component{
   
    render(){
        return(
            <div>
                <div style={{color :"red"}}> example for props</div>
             <p> Hi {this.props.name}</p>
            </div>
        );
    }
    
}
 export default TestComponent2