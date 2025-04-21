import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ children }) => {
    const nav = useNavigate();

    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
            <header
                style={{
                    flexShrink: 0,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1rem 2rem",
                    backgroundColor: "#00aaff", // Light Blue
                    borderBottom: "2px solid #0077cc", // Darker Blue
                    flexWrap: "wrap",
                    position: "sticky",
                    top: 0,
                    zIndex: 999,
                }}
            >
                {/* Logo / Brand */}
                <div style={{ fontWeight: "bold", fontSize: "2rem", color: "#fff" }}>
                    VENUGOPAL
                </div>

                {/* Navigation */}
                <nav
                    style={{
                        display: "flex",
                        gap: "1.5rem",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {[
                        { name: "Home", path: "/details/homepage" },
                        { name: "Project", path: "/details/project" },
                        { name: "Resume", path: "/details/resume" },
                        { name: "Skills", path: "/details/skills" },
                    ].map((item, index) => (
                        <span
                            key={index}
                            onClick={() => nav(item.path)}
                            style={{
                                cursor: "pointer",
                                fontSize: "1.2rem",
                                padding: "0.5rem 1rem",
                                borderRadius: "0.5rem",
                                transition: "background-color 0.3s, color 0.3s",
                                color: "#fff",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#ff6347"; // Coral Color
                                e.target.style.color = "white";
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "transparent";
                                e.target.style.color = "#fff";
                            }}
                        >
                            {item.name}
                        </span>
                    ))}
                </nav>
            </header>

            {/* Scrollable Content Area */}
            <div style={{
                // flex: 1,
                overflowY: "auto",
                // padding: "1rem",
                boxSizing: "border-box"
            }}>
                {children}
            </div>

            <footer
                style={{
                    flexShrink: 0,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    padding: "1rem",
                    backgroundColor: "#1e3d58", // Dark Blue
                    borderTop: "2px solid #003366", // Darker Blue
                    flexWrap: "wrap",
                    position: "relative",
                    bottom: 0,
                    zIndex: 999,
                    color: "#fff"
                }}
            >
                {/* Phone */}
                <div style={{ marginBottom: "1rem", flex: "1 1 20%" }}>
                    <div style={{ fontWeight: "bold" }}>Phone</div>
                    <div>+91-6305336007</div>
                </div>

                {/* Email */}
                <div style={{ marginBottom: "1rem", flex: "1 1 20%" }}>
                    <div style={{ fontWeight: "bold" }}>Email</div>
                    <div>sanaboinavenugopal@mail.com</div>
                </div>

                {/* Social */}
                {/* <div style={{ marginBottom: "1rem", flex: "1 1 20%" }}>
                    <div style={{ fontWeight: "bold" }}>Follow Me</div>
                    <div>@instagram</div>
                </div> */}
                <div style={{ marginBottom: "1rem", flex: "1 1 20%" }}>
                    <div style={{ fontWeight: "bold" }}>Linked_in</div>
                    <div>
                        <a href="https://linkedin.com/in/venugopal-sanaboina-60525a2a2/" style={{color: "blue"}} target="_blank">LinkedIn</a>
                    </div>

                </div>
                <div style={{ marginBottom: "1rem", flex: "1 1 20%" }}>
                    <div style={{ fontWeight: "bold" }}>GitHub</div>
                    <div> <a  style={{color: "blue"}} target="_blank" href="https://github.com/VenuGopal-240" >GitHub</a></div>
                </div>

                {/* Copyright */}
                <div style={{ marginBottom: "1rem", flex: "1 1 20%" }}>
                    <div style={{ fontWeight: "bold" }}>© 2025</div>
                    <div>All Rights Reserved</div>
                </div>
            </footer>
        </div>
    );
};

export default Header;
