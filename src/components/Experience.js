import { Nav, Tab, Container, Row, Col } from "react-bootstrap";

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col>
            <div className="experience-bx">
              <h2>Experience</h2>
              <p>
                Here is a list of my current work experience. Click on each
                company to learn more about my different experiences and skills.
              </p>
              <Tab.Container id="experience-tabs" defaultActiveKey="first">
                <Nav variant="pills">
                  <Nav.Item>
                    <Nav.Link eventKey="first">WelTel</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Promag Enviro Systems</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third" disabled="true">
                      -
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <div className="tab-description-divider" />
                <span>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <h3>WelTel</h3>
                      <h6>Full-Stack Developer</h6>
                      <h6 className="experience-header-spacing">
                        January 2023 - Present
                      </h6>
                      <ul className="list">
                        <li>
                          Developed and refactored 35+ new and existing software
                          systems/components for a healthcare web application
                          utilizing Angular (TypeScript), HTML/CSS, NG-ZORRO for
                          the front-end features and Node.js and Bookshelf.js
                          for the backend features
                        </li>
                        <li>
                          Utilized a Model View Controller Service (MVCS)
                          architecture to create RESTful APIs using controllers
                          to manage communication between front-end and backend
                          services
                        </li>
                        <li>
                          Implemented new fields for data models with relational
                          database mapping to store thousands of patients'
                          personal information for healthcare workers to provide
                          correct diagnoses and treatment
                        </li>
                        <li>
                          Conducted user acceptance testing (UAT), end-to-end
                          (E2E) testing, and unit testing across a large
                          platform using Jest test suites while following agile
                          workflow using JIRA
                        </li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h3>Promag Enviro Systems</h3>
                      <h6>Software Developer</h6>
                      <h6 className="experience-header-spacing">
                        May 2022 - August 2022
                      </h6>
                      <ul className="list">
                        <li>
                          Developed an interactive water monitoring app that
                          interacts with hardware utilizing Flutter for
                          front-end features, Django and PostgreSQL for backend
                          features, and Python and Single Board Computer (SBC)
                          for IoT features
                        </li>
                        <li>
                          Implemented RESTful APIs in Django to communicate with
                          SBC's database through AWS IoT Core using MQTT to
                          increase data transfer frequency from 10 minutes to 5
                          seconds
                        </li>
                        <li>
                          Created a secure provisioning script in Python that
                          utilizes AWS IoT Core and Things to provide
                          personalized SBC configurations
                        </li>
                        <li>
                          Constructed SBC Bluetooth commands to receive
                          Bluetooth requests from mobile devices so an SBC can
                          be self-registered to a user account to provide device
                          ownership
                        </li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>-</p>
                    </Tab.Pane>
                  </Tab.Content>
                </span>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
