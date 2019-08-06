import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles.css';
import {Container, Dropdown, Menu} from 'semantic-ui-react';
import {Row, Col} from 'react-flexbox-grid';

class Header2 extends Component {
  
 
  render() {
    return (
      <div >
           <div>
             
           </div>
          <div>
            <Menu id="headbg" inverted style={{ height: '50px'}} >
              <Container>
             
  
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    position: 'absolute',
                    height: '50px',
                    fontSize:'18px'
                  }}
                >
                  
                  <Row>
                  <Col xs={4} className="col">
                  <Menu.Item  as={Link} to="/" id='dtext' style={{fontSize:'18px',color: 'smoky white'}}>
                    Home
                  </Menu.Item>
                  </Col>

                  <Col xs={4} className="col" align ="center">
                  <Dropdown
                    
                    item
                    simple
                    text="Business"
                    style={{color: 'smoky white'}}
                    id='dtext'
                  >
                    <Dropdown.Menu >
                      <Dropdown.Item  as={Link} to="/in-business" >
                        Interenational
                      </Dropdown.Item>
                      <Dropdown.Item  as={Link} to="/business" >
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
                    style={{color: 'smoky white'}}
                    id='dtext'
                  >
                    <Dropdown.Menu >
                      <Dropdown.Item  as={Link} to="/in-sports" >
                        Interenational
                      </Dropdown.Item>
                      <Dropdown.Item  as={Link} to="/sports" >
                        National
                      </Dropdown.Item>
                     
                    </Dropdown.Menu>
                  </Dropdown>
                  </Col>

                  <Col xs={4} className="col">
                  <Dropdown
                    
                    item
                    simple
                    text="entertainment"
                    style={{color: 'smoky white'}}
                    id='dtext'
                  >
                    <Dropdown.Menu >
                      <Dropdown.Item  as={Link} to="/in-enteratainment" >
                        Interenational
                      </Dropdown.Item>
                      <Dropdown.Item  as={Link} to="/entertainment" >
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
                    style={{color: 'smoky white'}}
                    id='dtext'
                  >
                    <Dropdown.Menu >
                      <Dropdown.Item  as={Link} to="/in-science" >
                        Interenational
                      </Dropdown.Item>
                      <Dropdown.Item  as={Link} to="/science" >
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
                    style={{color: 'smoky white'}}
                    id='dtext'
                  >
                    <Dropdown.Menu >
                      <Dropdown.Item  as={Link} to="/in-technology" >
                        Interenational
                      </Dropdown.Item>
                      <Dropdown.Item  as={Link} to="/technology" >
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
                    style={{color: 'smoky white'}}
                    id='dtext'
                  >
                    <Dropdown.Menu >
                      <Dropdown.Item  as={Link} to="/in-health" >
                        Interenational
                      </Dropdown.Item>
                      <Dropdown.Item  as={Link} to="/health" >
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
