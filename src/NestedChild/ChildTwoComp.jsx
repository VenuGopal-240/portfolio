import React, { forwardRef, useEffect, useImperativeHandle } from "react";



const ChildTwoComp = ({bool})=>{
    console.log("two:",bool);

    useEffect(()=>{
        if(bool){
            handleFunctionCalling();
        }
    },[bool]);
    
    const handleFunctionCalling = () => {
        alert("Function in ChildTwo has called");
    }

    
  

    return(
        <>
            <div style={{height:"90%",width:"90%",backgroundColor:"Yellow",margin:"1rem auto"}}>
                <h2>ChildTwo Component </h2>

            </div>
        </>


    )

};

export default  ChildTwoComp ;