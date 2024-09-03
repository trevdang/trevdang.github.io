import { Container, Row, Col } from "react-bootstrap";
import CLogo from "../assets/img/c.png";
import CppLogo from "../assets/img/cpp.png";
import JavaLogo from "../assets/img/java.png";
import PythonLogo from "../assets/img/python.png";
import HTMLLogo from "../assets/img/html.png";
import CSSLogo from "../assets/img/css.png";
import JavaScriptLogo from "../assets/img/javascript.png";
import ReactLogo from "../assets/img/react.png";
import FlutterLogo from "../assets/img/flutter-removebg-preview.png";
import GitLogo from "../assets/img/git.png";
import AngularLogo from "../assets/img/angular.png";
import TypeScriptLogo from "../assets/img/typescript.png";

// https://github.com/marwin1991/profile-technology-icons?tab=readme-ov-file#%EF%B8%8F-cc

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skills-bx">
              <h2>Skills</h2>
              <p>
                Here is a list of programming languages and technologies I have
                worked with.
              </p>
              <Col>
                <Row>
                  <Col>
                    <img src={CLogo} alt="CLogo" />
                    <p>C</p>
                  </Col>
                  <Col>
                    <img src={CppLogo} alt="CppLogo" />
                    <p>C++</p>
                  </Col>
                  <Col>
                    <img src={JavaLogo} alt="JavaLogo" />
                    <p>Java</p>
                  </Col>
                  <Col>
                    <img src={PythonLogo} alt="PythonLogo" />
                    <p>Python</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <img src={HTMLLogo} alt="HTMLLogo" />
                    <p>HTML</p>
                  </Col>
                  <Col>
                    <img src={CSSLogo} alt="CSSLogo" />
                    <p>CSS</p>
                  </Col>
                  <Col>
                    <img src={JavaScriptLogo} alt="JavaScriptLogo" />
                    <p>JavaScript</p>
                  </Col>
                  <Col>
                    <img src={TypeScriptLogo} alt="TypeScript" />
                    <p>TypeScript</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <img src={ReactLogo} alt="ReactLogo" />
                    <p>React</p>
                  </Col>
                  <Col>
                    <img src={AngularLogo} alt="AngularLogo" />
                    <p>Angular</p>
                  </Col>
                  <Col>
                    <img src={FlutterLogo} alt="FlutterLogo" />
                    <p>Flutter</p>
                  </Col>
                  <Col>
                    <img src={GitLogo} alt="GitLogo" />
                    <p>Git</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <img src="https://user-images.githubusercontent.com/25181517/183896132-54262f2e-6d98-41e3-8888-e40ab5a17326.png" alt="AWSLogo" />
                    <p>AWS</p>
                  </Col>
                  <Col>
                    <img src="https://user-images.githubusercontent.com/25181517/183911547-990692bc-8411-4878-99a0-43506cdb69cf.png" alt="GoogleCloudLogo" />
                    <p>Google Cloud</p>
                  </Col>
                  <Col>
                    <img src="https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png" alt="DockerLogo" />
                    <p>Docker</p>
                  </Col>
                  <Col>
                    <img src="https://user-images.githubusercontent.com/25181517/179090274-733373ef-3b59-4f28-9ecb-244bea700932.png" alt="JenkinsLogo" />
                    <p>Jenkins</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <img src="https://user-images.githubusercontent.com/25181517/182534006-037f08b5-8e7b-4e5f-96b6-5d2a5558fa85.png" alt="KubernetesLogo" />
                    <p>Kubernetes</p>
                  </Col>
                  <Col>
                    <img src="https://user-images.githubusercontent.com/25181517/117208736-bdedc080-adf5-11eb-912f-61c7d43705f6.png" alt="OracleLogo" />
                    <p>Oracle</p>
                  </Col>
                  <Col>
                    <img src="https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png" alt="MySQLLogo" />
                    <p>MySQL</p>
                  </Col>
                  <Col>
                    <img src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png" alt="MongoDBLogo" />
                    <p>MongoDB</p>
                  </Col>
                </Row>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
