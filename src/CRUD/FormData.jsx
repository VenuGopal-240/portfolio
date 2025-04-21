import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
    });

    const [data, setData] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [id, setId] = useState('');
    const [employee,setEmployee] = useState({})

    const [run,setRun] = useState(false);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post("http://localhost:5000/employees/add-emp", formData);
    //         //   alert(response.data.message);
    //         console.log("rsp", response);
    //         setFormData({ name: "", email: "", phone: "", city: "" });
    //     } catch (error) {
    //         console.error("Error submitting form", error);
    //     }
    // };

    useEffect(() => {
        axios.get("http://localhost:8080/employees/allemployees")
            .then(response => {
                console.log("Response:", response.data);
                setData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [run]);


    const handleSubmit = async (e) => {
        if(formData?._id){
            // alert("HIII");
            try {
                const response = await fetch(`http://localhost:8080/employees/update/${formData?._id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });
    
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
    
                const data = await response.json();
                console.log("Response:", data);
    
                
            } catch (error) {
                console.error("Error submitting form:", error);
            }
        }
        else{
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/employees/add-emp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Response:", data);

            
        } catch (error) {
            console.error("Error submitting form:", error);
        }
        // alert("EEEeeee")
    }
    setFormData({ name: "", email: "", phone: "", city: "" });
    setRun(!run);
    };
    console.log(formData)

    const handleCheck = async () => {
        if (!id) {
            console.error("Error: ID is undefined or null");
            return;
        }
    
        try {
            console.log("Fetching employee with ID:", id); // Debugging log
    
            const response = await fetch(`http://localhost:8080/employees/employee/${id}`);
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log(data);
            setEmployee(data);
        } catch (error) {
            console.error("Error fetching employee details:", error);
        }
    };

    const handleDelete=async(employee)=>{
        console.log("WM",employee?._id)
        try {
            const response = await fetch(`http://localhost:8080/employees/delete/${employee?._id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                // body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // const data = await response.json();
            // console.log("Response:", data);

            
        } catch (error) {
            console.error("Error submitting form:", error);
        }
        setRun(!run);
    }
    

    return (
        <>
            <div style={{ maxWidth: "400px", margin: "auto" }}>
                <h2>User Form</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required /><br />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /><br />
                    <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required /><br />
                    <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                GETDATA:
                <h2>Employee List</h2>
                <ul>
                    {data.map((employee, index) => (
                        <li key={index}>{employee.name} - {employee.email} 
                        <Button onClick={()=>setFormData(employee)}>UPdate</Button>
                        <Button onClick={()=>handleDelete(employee)}>Delete</Button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                GET_BASED_ON_ID
                <input type="text" name="id" id="id" onChange={(e) => setId(e.target.value)} />
                <Button onClick={handleCheck}>  Check</Button>
                <div>{employee?._id},{employee?.name},{employee?.phone},{employee?.city}</div>
            </div>
        </>

    );
};

export default Form;
