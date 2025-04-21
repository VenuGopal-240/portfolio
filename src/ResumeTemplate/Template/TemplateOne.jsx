import React from "react";
import { useNavigate } from "react-router-dom";
import "./Template.css"; // Assuming you have a separate CSS file for styling.

const TemplateOne = () => {
    const nav = useNavigate();

    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // height: "100vh",
                background: "linear-gradient(to right, #00aaff, #90EE90)", // Smooth gradient background
                boxSizing: "border-box",
                // padding: "1rem"
            }}>
                <div style={{
                    width: "100%",
                    maxWidth: "1200px",  // Max width for larger screens
                    height: "80vh",
                    // marginTop: "1rem",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",  // Allow content to wrap for smaller screens
                    // padding: "2rem"
                }}>
                    {/* Left Section - Image */}
                    <div style={{
                        width: "40%",
                        minWidth: "300px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        // marginBottom: "1rem"
                    }}>
                        <div style={{
                            borderRadius: "50%",
                            height: "450px",
                            width: "450px",
                            backgroundColor: "hotpink",
                            // backgroundImage: "url('https://th.bing.com/th/id/OIP.4avDr_yLziK0Q5VnxLAdhQHaHa?rs=1&pid=ImgDetMain')",
                            backgroundImage: `url('./venu.jpg')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "inline-block",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        }}></div>
                    </div>

                    {/* Right Section - Content */}
                    <div style={{ width: "55%", color: "#333", minWidth: "300px" }}>
                        <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#333" }}>Hello</h1>
                        <p style={{
                            fontSize: "1.1rem",
                            lineHeight: "1.6",
                            color: "#555",
                            // marginBottom: "1.5rem"
                        }}>
                            I am a passionate Frontend Developer with hands-on experience in building responsive web applications using React.js, JavaScript, Node.js, and Express.js. At Techies Edge, I contributed to real-time projects like a Timesheet Management System, E-commerce Plant Store, and Resume Creator. I have strong skills in UI development, RESTful API integration, and full-stack collaboration with MySQL and MongoDB. With a B.Tech in EEE and certifications in Full-Stack Java and Machine Learning, I bring both technical expertise and a proactive mindset to every project.
                        </p>

                        {/* Circle Buttons Section */}
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "1rem",
                            flexWrap: "wrap" // Allow buttons to stack on smaller screens
                        }}>
                            {['Resume', 'Project', 'Skills'].map((item, index) => (
                                <div
                                    key={index}
                                    className="circle"
                                    style={{
                                        borderRadius: "50%",
                                        height: "20vh",
                                        width: "9vw",
                                        border: "1px solid #333",
                                        display: "grid",
                                        placeItems: "center",
                                        textAlign: "center",
                                        fontSize: "1.1rem",
                                        fontWeight: "bold",
                                        backgroundColor: "#fff",
                                        cursor: "pointer",
                                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    }}
                                    onClick={() => nav(`/details/${item.toLowerCase()}`)}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = "scale(1.05)";
                                        e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = "scale(1)";
                                        e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                                    }}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TemplateOne;
