import { Col, Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg5 from "../assets/img/studyai.png";
import projImg4 from "../assets/img/chat_app.png";
import projImg3 from "../assets/img/entertainment_robot.png";
import projImg2 from "../assets/img/proj-img-2.png";
import projImg1 from "../assets/img/logo-2.png";

export const Projects = () => {
  const projects = [
    {
      url: "https://github.com/trevdang/study-ai",
      title: "Study AI",
      description:
        "Created a studying app to help students with attention deffiencies in class. Built for StormHacks 2023",
      imgUrl: projImg5,
    },
    {
      url: "https://github.com/trevdang/chat-app",
      title: "Chat App",
      description:
        "Created a basic chatting app using HTML, CSS, JavaScript, and MongoDB that uses text sanitization, user authentication, and sockets",
      imgUrl: projImg4,
    },
    {
      url: "https://github.com/trevdang/personal_website",
      title: "Personal Website",
      description:
        "Designed a website using React, HTML, and CSS to showcase my experience, projects, and skills with an interactive UI.",
      imgUrl: projImg1,
    },
    {
      url: "https://github.com/trevdang/HomeSecuritySystem",
      title: "Home Security System",
      description:
        "Built a home security system using a Raspberry Pi along with additional hardware that interacts with an API and displays sensor data onto a ReactJS app",
      imgUrl: projImg2,
    },
    {
      url: "https://github.com/trevdang/entertainment-robot",
      title: "Dancing Entertainment Robot",
      description:
        "Created a dancing entertainment robot out of 3D printed parts and servo motors controlled by ItsyBitsy M4 Express microcontroller using adafruit motor library.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Here is a list of the projects I have worked on. Hover over each
              project and use the GitHub button to learn more about it.
            </p>
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
