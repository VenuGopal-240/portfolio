import { Button } from "@mui/material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";

const Resume = () => {

    const downloadPDF = () => {
        const input = document.getElementById('pdf-content');

        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');

            const pdf = new jsPDF('p', 'mm', 'a4');
            const pageHeight = 297; // A4 height in mm
            let imgWidth = 210; // A4 width in mm
            let imgHeight = (canvas.height * imgWidth) / canvas.width;
            let position = 0;

            while (imgHeight > 0) {
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, pageHeight);
                imgHeight -= pageHeight;
                position -= pageHeight;
                if (imgHeight > 0) pdf.addPage();
            }

            pdf.save('download.pdf');
        });
    };
    const input = {};
    const styles = {
        container: {
            maxWidth: "800px",
            margin: "40px auto",
            // padding: "30px",
            fontFamily: "'Roboto', sans-serif",
            backgroundColor: "#fff",
            color: "#333",
            lineHeight: "1.6",
        },
        header: {
            textAlign: "center",
            marginBottom: "30px",
        },
        name: {
            fontSize: "2.5em",
            marginBottom: "5px",
            color: "#222",
        },
        contact: {
            margin: "3px 0",
        },
        link: {
            color: "#1a0dab",
            textDecoration: "none",
            margin: "0 10px",
        },
        section: {
            marginTop: "30px",
        },
        sectionTitle: {
            fontSize: "1.25em",
            borderBottom: "1px solid #999",
            color: "#444",
            marginBottom: "10px",
            textTransform: "uppercase",
            letterSpacing: "1px",
        },
        subheading: {
            fontSize: "1em",
            fontWeight: "bold",
            color: "#2e2e2e",
            marginTop: "10px",
        },
        subheadingSpan: {
            fontWeight: "normal",
            color: "#666",
            fontSize: "0.9em",
            marginLeft: "5px",
        },
        ul: {
            paddingLeft: "20px",
        },
        li: {
            marginBottom: "5px",
        },
    };
    return (
        <>
            {/* <div style={{ display: "flex", justifyContent: "center", alignContent: "center", backgroundColor: "gray" }}>
                <div id="pdf-content" style={{ padding: "3rem", border: "1px solid black", backgroundColor: "white", width: "50vw" }}>
                    <h1 style={{ textAlign: "center" }}>VENUGOPAL SANABOINA</h1>
                    <div style={{ display: "flex", justifyContent: "center", alignContent: "center", fontSize: "20px" }}>
                        <span >+91 6305336007</span>,
                        <span>Rajahmundry</span>,
                        <span>533126</span>
                    </div>
                    <h3 style={{ textAlign: "center", color: "hotpink" }}>sanaboinavenugopal@gmail.com</h3>
                    <h3 style={{ textAlign: "center", color: "hotpink" }}>Andhra Pradesh</h3>
                    <div>
                        <h2>OBJECTIVE <hr /></h2>
                        <p style={{ fontFamily: "Verdana, sans-serif", width: "45vw" }}>To begin my career in software development with a company that offers growth opportunities, where I can
                            enhance my technical and problem-solving skills by working on challenging and impactful projects.
                        </p>
                    </div>
                    <div>
                        <h2 >EDUCATION <hr /></h2>
                        <p style={{ fontFamily: "Verdana, sans-serif", }}>University College Of Engineering - Electrical Electronics Engineering- B.tech - May - 2023</p>
                        <p style={{ fontFamily: "Verdana, sans-serif", }}>Aditya Juniour College - MPC - Intermediate - May - 2019</p>
                        <p style={{ fontFamily: "Verdana, sans-serif", }}>Dr.kkr Gowtham School - General- SSC - April - 2017</p>
                    </div>
                    <div>
                        <h2>SKILLS <hr /></h2>
                        <div >
                            <ul style={{ display: "grid", gridTemplateColumns: 'repeat(3, 1fr)' }}>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JAVASCRIPT</li>
                                <li>REACT.JS</li>
                                <li>C</li>
                                <li>JAVA</li>
                                <li>JDBC</li>
                                <li>HIBERNATE</li>
                                <li>MYSQL</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2>PROJECTS <hr /></h2>
                        <ul>
                            <li>Advanced Railway Track Crack and Obstacle Dection</li>
                            <li>Ecommerce Website UI</li>
                            <li>Create Resume Page</li>
                            <li>To_Do_List UI</li>
                        </ul>
                    </div>
                  
                    <div>
                        <h2>LANGUAGE <hr /></h2>
                        <ul>
                            <li>English</li>
                            <li>Telugu</li>
                            <li>Hindi</li>
                        </ul>
                    </div>
                    <div>
                        <h2>DECLARATION <hr /></h2>
                        <ul style={{ fontFamily: "Verdana, sans-serif" }}>
                            <li>A declaration on a resume is a statement that confirms the accuracy of the information on the resume. It can help to strengthen the resume and make it more professional.</li> </ul>
                    </div>
                </div>
            </div> */}
            <div id="pdf-content" style={styles.container}>
                {/* Header */}
                <header style={styles.header}>
                    <h1 style={styles.name}>Venugopal Sanaboina</h1>
                    <p style={styles.contact}>
                        📧 <a href="mailto:sanaboinavenugopal@gmail.com" style={styles.link}>sanaboinavenugopal@gmail.com</a> |
                        📞 +91 6305336007 | 📍 Rajahmundry, Andhra Pradesh
                    </p>
                    <p style={styles.contact}>
                        <a href="https://linkedin.com/in/venugopal-sanaboina-60525a2a2/" style={styles.link}>LinkedIn</a> |
                        <a href="https://github.com/VenuGopal-240" style={styles.link}>GitHub</a>
                    </p>
                </header>       

                {/* Sections */}
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Professional Summary</h2>
                    <p>
                        Passionate and proactive Software Engineer with hands-on experience in full stack development using JavaScript, React.js, Node.js, and SQL...
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Technical Skills</h2>
                    <ul style={styles.ul}>
                        <li style={styles.li}><strong>Languages:</strong> Java, JavaScript, C, Python, HTML, CSS</li>
                        <li style={styles.li}><strong>Frontend:</strong> React.js, HTML5, CSS3</li>
                        <li style={styles.li}><strong>Backend:</strong> Node.js, Express.js</li>
                        <li style={styles.li}><strong>Databases:</strong> MySQL, MongoDB</li>
                        <li style={styles.li}><strong>Tools:</strong> Git, GitHub, VS Code</li>
                        <li style={styles.li}><strong>Concepts:</strong> OOPS, REST APIs, DOM</li>
                    </ul>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Experience</h2>
                    <h3 style={styles.subheading}>Full Stack Developer Intern
                        <span style={styles.subheadingSpan}> – March 2025, Techies Edge</span>
                    </h3>
                    <ul style={styles.ul}>
                        <li style={styles.li}>Built web applications like Timesheet System, Resume Creator, Plant Store.</li>
                        <li style={styles.li}>Designed REST APIs and integrated MySQL & MongoDB databases.</li>
                    </ul>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Projects</h2>
                    <ul style={styles.ul}>
                        <li style={styles.li}><strong>TimeSheet Management System:</strong> Role-based app with approval workflow.</li>
                        <li style={styles.li}><strong>Railway Crack Detection:</strong> Arduino-based crack detection using GPS and GSM.</li>
                    </ul>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Internships</h2>
                    <h3 style={styles.subheading}>Frontend Developer Intern
                        <span style={styles.subheadingSpan}> – Techies Edge</span>
                    </h3>
                    <ul style={styles.ul}>
                        <li style={styles.li}>Developed UIs using HTML, CSS, JS, React.js.</li>
                        <li style={styles.li}>Worked in Agile teams and integrated backend services.</li>
                    </ul>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Education</h2>
                    <ul style={styles.ul}>
                        <li style={styles.li}><strong>B.Tech (EEE):</strong> JNTUK Narasaraopet – JNTUK, Jan 2025 (CGPA: 6.1/10)</li>
                        <li style={styles.li}><strong>Intermediate (MPC):</strong> Aditya Junior College, 2019 (CGPA: 7.0/10)</li>
                        <li style={styles.li}><strong>SSC:</strong> Dr. KKR Gowtham School, 2017 (CGPA: 9.2/10)</li>
                    </ul>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Certifications</h2> 
                    <ul style={styles.ul}>
                        <li style={styles.li}>Full-Stack Java Intern – Techies Edge</li>
                        <li style={styles.li}>Machine Learning Internship – Internshala</li>
                    </ul>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Leadership & Extracurriculars</h2>
                    <ul style={styles.ul}>
                        <li style={styles.li}>Organized Project Expo and Blood Donation Camp in college.</li>
                    </ul>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Declaration</h2>
                    <p>
                        I hereby declare that the information provided in this resume is true and accurate to the best of my knowledge.
                    </p>
                </section>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                <Button onClick={downloadPDF} variant="contained">Download</Button>
            </div>
        </>

    )
}
export default Resume;
{/* <div style={{padding:'rem'}}>
            <h1 style={{textAlign:"center",textShadow:'initial'}}>Resume</h1>
                <div style={{ width: "70vw", height: "auto", border: "0px solid black" }}>
                    <h1>WorkExperience</h1>
                    <h3>1.WebDeveloper</h3>
                    <p>I am a web developer who builds websites using HTML, CSS, JavaScript, and the React framework. I focus on user experience and responsiveness while staying updated on the latest trends and tools.</p>
                    <h3>2.WebDeveloper</h3>
                    <p>I am a web developer who builds websites using HTML, CSS, JavaScript, and the React framework. I focus on user experience and responsiveness while staying updated on the latest trends and tools.</p>
                    <h3>3.WebDeveloper</h3>
                    <p>I am a web developer who builds websites using HTML, CSS, JavaScript, and the React framework. I focus on user experience and responsiveness while staying updated on the latest trends and tools.</p>
                    <h3>4.WebDeveloper</h3>
                    <p>I am a web developer who builds websites using HTML, CSS, JavaScript, and the React framework. I focus on user experience and responsiveness while staying updated on the latest trends and tools.</p>
                    <h3>5.WebDeveloper</h3>
                    <p>I am a web developer who builds websites using HTML, CSS, JavaScript, and the React framework. I focus on user experience and responsiveness while staying updated on the latest trends and tools.</p>
                </div>
                <div style={{ width: "70vw", height: "auto", border: "0px solid black" }}>
                    <h1>Education</h1>
                    <h3>1.ENGINEERING</h3>
                    <p>University College Of Engineering,Narasaroapeta</p>
                    <h3>2.Intermediate</h3>
                    <p>Aditya Juniour College,Rajahmundry</p>
                    <h3>3.Schooling</h3>
                    <p>Dr.kkr Gowtham School,Rajahmundry</p>
                </div>



            </div> */}