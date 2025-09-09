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
                    <Nav.Link eventKey="first">Broadcom</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">WelTel</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Promag Enviro Systems</Nav.Link>
                  </Nav.Item>
                </Nav>
                <div className="tab-description-divider" />
                <span>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <h3>Broadcom</h3>
                      <h6>Software Engineer Intern</h6>
                      <h6 className="experience-header-spacing">
                        September 2023 - April 2024
                      </h6>
                      <ul className="list">
                        <li>
                          Collaborated with a team of 8 engineers to develop and maintain 
                          Broadcom's Layer7 API Gateway cloud platform
                        </li>
                        <li>
                          Enforced API governance through policy assertions across diverse 
                          deployment environments, including on-premise VMware OVAs, Kubernetes 
                          clusters, and Docker containers
                        </li>
                        <li>
                          Developed and presented a new gateway license generator on RHEL 8 OVA 
                          to efficiently provide license batches for different gateway products for 
                          new and existing customers
                        </li>
                        <li>
                          Updated gateway assertion code to align with new JDK standards, improving 
                          compatibility with Luna and nShield HSMs and reducing technical debt
                        </li>
                        <li>
                          Parallelized Jenkins jobs and Java tests to cut artifact build times by 
                          30% across gateway environments
                        </li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h3>WelTel</h3>
                      <h6>Full-Stack Developer</h6>
                      <h6 className="experience-header-spacing">
                        January 2023 - August 2023
                      </h6>
                      <ul className="list">
                        <li>
                          Developed and refactored 35+ new and existing software features for a 
                          healthcare web application using a technology stack comprised of Angular, 
                          Node.js, and AWS
                        </li>
                        <li>
                          Implemented and designed new data models for a MySQL database using 
                          Bookshelf.js to efficiently access and display thousands of patient health 
                          records for healthcare works to provide correct diagnoses
                        </li>
                        <li>
                          Researched and transformed a patient notification messaging system into a 
                          serverless solution on AWS (API Gateway, Lambda, SQS), increasing efficiency and 
                          reducing server load by 20%
                        </li>
                        <li>
                          Conducted E2E and integration testing across the platform through Jasmine and Jest 
                          test suites while following an agile workflow using JIRA to ensure application stability
                        </li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h3>Promag Enviro Systems</h3>
                      <h6>Software Developer</h6>
                      <h6 className="experience-header-spacing">
                        May 2022 - August 2022
                      </h6>
                      <ul className="list">
                        <li>
                          Created a Flutter mobile water app for industrial clients to monitor and treat water 
                          by communicating with a Single Board Computer (SBC)
                        </li>
                        <li>
                          Implemented REST APIs in Django to communicate with SBC's PostgreSQL database through 
                          AWS IoT Core's MQTT publish/subscribe model, resulting in improved data transfer frequency 
                          from 10 minutes to 5 seconds
                        </li>
                        <li>
                          Constructed SBC Bluetooth commands to receive mobile device requests leading to an automated 
                          and efficient self-registration process of SBC water monitoring devices for clients
                        </li>
                      </ul>
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
