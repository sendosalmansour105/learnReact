import React from "react";
import { useSelector } from "react-redux";

export const CardValue =()=>{
    const counter = useSelector((state)=> state.counter.counter);
    let totalAmount = counter * 100 + (Math.random() * 15);

    return(
        <>
         <h2>Total amount is {totalAmount}</h2>
        </>
    )

}