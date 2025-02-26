import React from "react";

function Title ({title}){
    return <h5>{title}</h5>
}
function Auther ({auther}){
    return <h5>{auther}</h5>
}
function Description ({description}){
    return <h5>{description}</h5>
}
function Type ({type}){
    return <h5>{type}</h5>
}


function NovelData ({ title , auther , description , type}){
    return(
        <div>
            <Title title={title}/>
            <Auther auther={auther}/>
            <Description description={description}/>
            <Type type={type}/>
        </div>
    )
}
export default NovelData