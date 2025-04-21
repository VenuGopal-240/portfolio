import React from "react";

const Skills = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(255, 99, 71, 0.5)",
          padding: "3rem 1rem",
        }}
      >
        {/* Title Section */}
        <h1
          style={{
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            color: "#333",
          }}
        >
          My Skills
        </h1>

        {/* Skill Categories */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {/* Front-End Skills */}
          <div
            style={{
              width: "250px",
              border: "1px solid #333",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              padding: "1.5rem",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              backgroundColor: "#fff",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
            }}
          >
            <h2 style={{ textAlign: "center", color: "#333", fontSize: "1.5rem" }}>
              Front-End
            </h2>
            <hr />
            <ul style={{ listStyleType: "none", padding: "0" }}>
              <li style={{ fontSize: "1.1rem", color: "#555" }}>HTML</li>
              <li style={{ fontSize: "1.1rem", color: "#555" }}>CSS</li>
              <li style={{ fontSize: "1.1rem", color: "#555" }}>JavaScript</li>
              <li style={{ fontSize: "1.1rem", color: "#555" }}>React.js</li>
            </ul>
          </div>

          {/* Back-End Skills */}
          <div
            style={{
              width: "250px",
              border: "1px solid #333",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              padding: "1.5rem",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              backgroundColor: "#fff",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
            }}
          >
            <h2 style={{ textAlign: "center", color: "#333", fontSize: "1.5rem" }}>
              Back-End
            </h2>
            <hr />
            <ul style={{ listStyleType: "none", padding: "0" }}>
              <li style={{ fontSize: "1.1rem", color: "#555" }}>C</li>
              <li style={{ fontSize: "1.1rem", color: "#555" }}>Java</li>
              <li style={{ fontSize: "1.1rem", color: "#555" }}>JDBC</li>
              <li style={{ fontSize: "1.1rem", color: "#555" }}>Hibernate</li>
            </ul>
          </div>

          {/* Database Skills */}
          <div
            style={{
              width: "250px",
              border: "1px solid #333",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              padding: "1.5rem",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              backgroundColor: "#fff",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
            }}
          >
            <h2 style={{ textAlign: "center", color: "#333", fontSize: "1.5rem" }}>
              Database
            </h2>
            <hr />
            <ul style={{ listStyleType: "none", padding: "0" }}>
              <li style={{ fontSize: "1.1rem", color: "#555" }}>MySQL</li>
            </ul>
          </div>
        </div>

        {/* Professional Skills */}
        <h1
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "bold",
            marginTop: "3rem",
            color: "#333",
          }}
        >
          Professional Skills
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              width: "250px",
              border: "1px solid #333",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              padding: "1.5rem",
              backgroundColor: "#fff",
            }}
          >
            <h2 style={{ textAlign: "center", color: "#333", fontSize: "1.5rem" }}>
              Soft Skills
            </h2>
            <hr />
            <ul style={{ listStyleType: "none", padding: "0" }}>
              <li style={{ fontSize: "1.1rem", color: "#555" }}>Communication</li>
              <li style={{ fontSize: "1.1rem", color: "#555" }}>Teamwork</li>
              <li style={{ fontSize: "1.1rem", color: "#555" }}>Problem-solving</li>
              <li style={{ fontSize: "1.1rem", color: "#555" }}>Leadership</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
