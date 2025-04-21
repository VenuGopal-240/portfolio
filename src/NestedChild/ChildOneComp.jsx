import React, { forwardRef } from "react";
import ChildTwoComp from "./ChildTwoComp";

const  ChildOneComp = ({bool}) => {
    console.log("One:",bool);
   

    return(
        <>
            <div  style={{height:"90%",width:"90%",backgroundColor:"green",margin:"1rem auto"}}>
                <h2>ChildOne Component </h2>
                <ChildTwoComp bool={bool}/>

            </div>
        </>


    )

}

export default ChildOneComp;