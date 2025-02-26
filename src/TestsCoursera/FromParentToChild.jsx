import React from "react";

class FromParentToChild extends React.Component{
    state ={ childColor :"green", name:"samia"}
    changeColor=()=>{
        const newColor = document.getElementById('colorbox').value ;
        this.setState({childColor:newColor})
    }
    changeName=()=>{
        
    }
}