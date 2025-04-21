import React from "react";

const OTPGenerator=()=>{

    const generateOtp=()=>{
        let length=4;
        let otp = "";
        for (let i = 0; i < length; i++) {
            otp += Math.floor(Math.random() * 10); 
        }
        return otp;
    }

    return(
        <>
            <div>
                <center onClick={generateOtp}>CLICK_ME</center>
            </div>
        </>
    )
}
export default OTPGenerator;