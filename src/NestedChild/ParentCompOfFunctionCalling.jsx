import React, { useEffect, useRef, useState } from "react";
import ChildOneComp from "./ChildOneComp";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

const ParentCompOfFunctionCalling = () => {

    const[dialog,setDialog] = useState(false);
    const[bool,setBool] = useState(false);
    const callChildFunctionRef = useRef();

    // console.log("Parent:",bool);

    useEffect(()=>{
        setBool("");
    })

    const handleFunCtionCallling = () => {
        setDialog(true);

    }

    const handleDialogAction = () => {
        setBool(true);
        console.log("bool",bool);
        // callChildFunctionRef.current?.callChildFunction();
        // alert("In parent");
    }
console.log("PArent",bool);
    // callChildFunctionRef.current?.callChildFunction
    return(
        <>
            <div style={{height:"90vh",width:"90%",backgroundColor:"Blue",margin:"1rem auto"}}>
                <h2>Parent Component </h2>
                <ChildOneComp bool={bool} ref={callChildFunctionRef} />

                <Dialog
                    open={dialog}
                    onClose={() =>{ setDialog(false);setBool(false)}}
                    

                >
                    <DialogTitle>Dialog Box in Parent</DialogTitle>

                    <DialogContent>
                        This a the content section of Dialog box in Parent comp
                    </DialogContent>

                    <DialogActions>
                        <button onClick={() => { setDialog(false);setBool(false)}}>Close</button>
                        <button onClick={handleDialogAction}>Function Calling</button>
                    </DialogActions>

                </Dialog>

            </div>

            <button onClick={handleFunCtionCallling}>DialogBox</button>
        </>


    )

}

export default ParentCompOfFunctionCalling;