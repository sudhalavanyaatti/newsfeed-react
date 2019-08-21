import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import { Container, Dropdown, Menu } from "semantic-ui-react";
import { Row, Col } from "react-flexbox-grid";
import Modal from "../components/modal2";
import Sidebar from "./sidebar";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        "business",
        "sports",
        "entertainment",
        "science",
        "technology",
        "health"
      ]
    };
  }
  render() {
    return (
      <div>
        <div />
        <div>
          <Menu id="headbg" inverted style={{ height: "70px" }}>
            <Row>
              <Col className="col">
                <Menu.Item
                  id="dtext"
                  style={{ fontSize: "18px", color: "green" }}
                >
                  LIV NEWS
                </Menu.Item>
              </Col>
            </Row>
            <Row>
              <Col className="col">
                <Sidebar />
            
              </Col>
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
                <Row>
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
                  {this.state.list.map(item => {
                    console.log("item", { item });
                    const member = "in-" + { item };
                    console.log("ghghghgh", member);
                    return (
                      <Col xs={4} className="col" align="center">
                        <Dropdown
                          item
                          simple
                          text={item}
                          style={{ color: "smoky white" }}
                          id="dtext"
                        >
                          <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={`/in-${item}`}>
                              International
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to={`/${item}`}>
                              National
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                    );
                  })}
                  
                  <Col xs={4} className="col">
                    <Modal />
              
                  </Col>
                  <Col xs={4} className="col">
                    <Menu.Item
                      as={Link}
                      to="/sources"
                      id="dtext"
                      style={{ fontSize: "18px", color: "smoky white" }}
                    >
                      Sources
                    </Menu.Item>
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

export default Header;
