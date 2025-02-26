import React,{useState} from "react";

function ToggleMessage(){
    const [isVisible , setIsVisible] = useState(true);
    const toggleVisible =()=>{
          setIsVisible(!isVisible)
    ;}
    return(
        <div>
            <h2> Toggle Button</h2>
            <button onClick={toggleVisible}>
                {isVisible ? 'Hide' : 'Show'}
            </button>
            {isVisible && <p>this is hidden message</p>}
        </div>
    )
}

export default ToggleMessage