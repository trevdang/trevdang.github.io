import { Col } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";

export const ProjectCard = ({ url, title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div
        className="project-card-url"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="proj-imgbx">
          <img src={imgUrl} alt="projCardImg" height={340}/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <a
              className="proj-button"
              href={url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <button>
                <span>
                  GitHub
                  <Github style={{ paddingLeft: "10" }} size={30} />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
