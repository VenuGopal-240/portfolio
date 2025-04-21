import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const Project = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      title: "TimeManagement System",
      img: "./timesheet.png",
      description:
        "A role-based timesheet app for mentees, mentors, and admins to track, review, and approve daily and weekly tasks.",
    },
    {
      title: "Resume Creator",
      img: "./resume.png",
      description:
        "Create, edit, and download beautiful resumes quickly and easily. A powerful tool to design your perfect resume.",
    },
    {
      title: "To-Do List",
      img: "./todolist.png",
      description:
        "A simple and efficient to-do list app to manage your tasks and stay organized. Keep track of your daily goals.",
    },
    {
      title: "Sample E-commerce",
      img: "./plants.png",
      description:
        "A sample e-commerce website showcasing products with add-to-cart functionality. Ideal for learning e-commerce design.",
    },
    {
      title: "Figma Table",
      img: "./figma.png",
      description:
        "A table design component with features like sorting, filtering, and data updates. Built using React.js.",
    },
    {
      title: "Portfolio",
      img: "./portifilo.png",
      description:
        "A personal portfolio website showcasing projects, skills, and contact info. Fully responsive and clean UI.",
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // padding: "2rem",
          background: "linear-gradient(to right, #ff7e5f, #feb47b)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: "3rem",
            marginBottom: "2rem",
          }}
        >
          My Projects
        </h1>

        {/* Project Cards Container */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleOpen(project)}
              style={{
                border: "2px solid #333",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
              }}
            >
              <img
                src={project.img}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  padding: "1.5rem",
                  textAlign: "center",
                  backgroundColor: "#f4f4f4",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.8rem",
                    color: "#333",
                    fontWeight: "bold",
                    marginBottom: "0",
                  }}
                >
                  {project.title}
                </h2>
              </div>
              <div
                style={{
                  padding: "1.5rem",
                  textAlign: "center",
                  backgroundColor: "#f4f4f4",
                }}
              >
                {project.description}
              </div>
              <div
                style={{
                  // padding: "1.5rem",
                  textAlign: "center",
                  backgroundColor: "#f4f4f4",
                }}
              >
                <Button variant="contained">About</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Project Description */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" component="h2">
            {selectedProject?.title}
          </Typography>
          <Typography sx={{ mt: 2 }}>{selectedProject?.description}</Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Project;
