import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import { Container, Dropdown, Menu } from "semantic-ui-react";
import { Row, Col } from "react-flexbox-grid";
import Sidebar from "./sidebar";



class Header2 extends Component {
  render() {
    return (
      <div>
        <div />
        <div>
        
          <Menu id="headbg"  inverted style={{ height: "70px" }}>
          <Row>
        <Col xs={12} className="col">
                    <Menu.Item
                      id="dtext"
                      style={{ fontSize: "18px", color: "green" }}
                    >
                      LIV NEWS
                    </Menu.Item>
                  </Col>
                  <Row>
            <Col xs={17} className="col"> 
              <Sidebar/>
            </Col>
            </Row>
        </Row>
            <Container>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  position: "absolute",
                  height: "50px",
                  fontSize: "18px"
                }}
              >
                <Row >
                  
                  <Col xs={4} className="col">
                    <Menu.Item
                      as={Link}
                      to="/"
                      id="dtext"
                      style={{ fontSize: "18px", color: "smoky white" }}
                    >
                      Home
                    </Menu.Item>
                  </Col>

                  <Col xs={4} className="col" align="center">
                    <Dropdown
                      item
                      simple
                      text="Business"
                      style={{ color: "smoky white" }}
                      id="dtext"
                    >
                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/in-business">
                          International
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/business">
                          National
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>

                  <Col xs={4} className="col">
                    <Dropdown
                      item
                      simple
                      text="Sports"
                      style={{ color: "smoky white" }}
                      id="dtext"
                    >
                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/in-sports">
                          International
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/sports">
                          National
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>

                  <Col xs={4} className="col">
                    <Dropdown
                      item
                      simple
                      text="Entertainment"
                      style={{ color: "smoky white" }}
                      id="dtext"
                    >
                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/in-entertainment">
                          International
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/entertainment">
                          National
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>

                  <Col xs={4} className="col">
                    <Dropdown
                      item
                      simple
                      text="Science"
                      style={{ color: "smoky white" }}
                      id="dtext"
                    >
                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/in-science">
                          International
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/science">
                          National
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                  <Col xs={4} className="col">
                    <Dropdown
                      item
                      simple
                      text="Technology"
                      style={{ color: "smoky white" }}
                      id="dtext"
                    >
                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/in-technology">
                          International
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/technology">
                          National
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>

                  <Col xs={4} className="col">
                    <Dropdown
                      item
                      simple
                      text="Health"
                      style={{ color: "smoky white" }}
                      id="dtext"
                    >
                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/in-health">
                          International
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/health">
                          National
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </div>
            </Container>
          </Menu>
        </div>
      </div>
    );
  }
}

export default Header2;
