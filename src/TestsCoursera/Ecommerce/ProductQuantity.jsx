import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment , decrement } from "./CounterSlice";
function ProductQuantity() {
    const dispatch = useDispatch();
    const counter = useSelector((state)=> state.counter.counter);

    return(
        <>
        <h1>in card product</h1>
        <button onClick={()=> dispatch(increment())}>+</button>
      
        <input type="text" value={counter} />
        <button  onClick={()=> dispatch(decrement())}>-</button>
        </>
    )
}
export default ProductQuantity