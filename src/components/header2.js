import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-flexbox-grid';
import {Container, Dropdown, Menu,Image} from 'semantic-ui-react';


class Header2 extends Component {
  
  render() {
    return (
      <div>
        
          <div>
            <Menu id="headbg" fixed="top" inverted style={{ height: '50px'}}>
              <Container>
                <Row>
                <col>
                <Menu.Item as={Link} to="/" header style={{ left: '-100px',color: 'white'}}>
               
               Employee HUB
             </Menu.Item>
                </col>
             
              <col>
              <Menu.Item as={Link} to="/signIn" style={{fontSize:'18px',color: 'white'}}>
                 SignIn
               </Menu.Item>
          
              </col>
                </Row>
              </Container>
            </Menu>
          </div>
       
      </div>
    );
  }
}

export default Header2;
