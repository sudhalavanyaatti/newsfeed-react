import React, { Component } from 'react'
import { Button, Menu,  Sidebar,Dropdown} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Modal from "./modal2";

export default class SidebarExampleSidebar extends Component {
  state = { visible: false }

  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div>
    
          <Button icon="bars" disabled={visible} onClick={this.handleShowClick}/>
            
          <Sidebar 
            as={Menu}
              animation='overlay'
            //   icon='bars'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width="large"
            
          >
                  <Menu.Item
                      as={Link}
                      to="/"
                      id="dtext"
                      style={{ fontSize: "18px", color: "smoky white" }}
                    >
                      Home
                    </Menu.Item>
                    
                  <Menu.Item>

                    <Dropdown item text='Business' >
                       <Dropdown.Menu>
            
                       <Dropdown.Item as={Link} to="/in-business">
                          International
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/business">
                          National
                        </Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                     
                  </Menu.Item>



                  <Menu.Item>
                  <Dropdown item text='Sports'> 
                  <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/in-sports">
                          International
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/sports">
                          National
                        </Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
                  </Menu.Item>
                 <Menu.Item>
                     <Dropdown item text="Entertainment">
                     <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/in-entertainment">
                          International
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/entertainment">
                          National
                        </Dropdown.Item>
                      </Dropdown.Menu>
                     </Dropdown>
                 </Menu.Item>
                 <Menu.Item>
                     <Dropdown item text="Science">
                     <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/in-science">
                          International
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/science">
                          National
                        </Dropdown.Item>
                      </Dropdown.Menu>
                     </Dropdown>
                 </Menu.Item>
                 <Menu.Item>
                     <Dropdown item text="Technology">
                     <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/in-technology">
                          International
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/technology">
                          National
                        </Dropdown.Item>
                      </Dropdown.Menu>
                     </Dropdown>
                 </Menu.Item>
                 <Menu.Item>
                     <Dropdown item text="Health">
                     <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/in-health">
                          International
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/health">
                          National
                        </Dropdown.Item>
                      </Dropdown.Menu>
                     </Dropdown>
                 </Menu.Item>
                   <Menu.Item>
                       <Modal/>
                   </Menu.Item>
          </Sidebar>

          
      </div>
    )
  }
}