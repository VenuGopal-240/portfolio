import React, { useState } from "react";
import { Sam } from "./Sam";

export const Bro=()=>{
    const[count,setCount] = useState(0);
    console.log("HJ");
    const bro=(e)=>{
        // alert("jljk");
        console.log("kjlsdk",e)
    }
    return(
        <>
        <h1>Heloo{count}</h1>
        {/* <Sam name={setCount}/> */}
        <Sam name="venuskjdfbgkjl"/>
        </>
    )
}