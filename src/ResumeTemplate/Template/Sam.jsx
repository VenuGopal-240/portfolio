import React from "react";

export const Sam=({name})=>{
    // name="gopal"

    name = 'Gopal';

    console.log("dskjf,couhndf");
    return(

        <>
        <h1>HELLO{name}</h1>
        {/* <h1>Hello</h1>
        <button >ass</button>
        <input type="text" onChange={(e)=>name(e.target.value)} /> */}
        {/* <button onClick={()=>name(pre=>pre+1)}> sds</button> */}
        </>
    )
}