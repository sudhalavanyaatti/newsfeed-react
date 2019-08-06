import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-flexbox-grid';
import {Container, Dropdown, Menu,Image} from 'semantic-ui-react';

import '../styles.css';


class Header extends Component {
  
  render() {
    return (
      <div className="navbar">
        <Row>
          <Col xs={12} className="col">
            <Row end="xs">
              <Col xs={4} className="col">
                    <div>
                    <strong>
                    <Container>
                    <Dropdown text='File'>
    <Dropdown.Menu>
      <Dropdown.Item text='New' as ={Link} to="/business" />
      <Dropdown.Item text='Open.' />
    </Dropdown.Menu>
  </Dropdown>
                    </Container>
                      </strong>
                      <strong>
                        {' '}
                        <Link to="/business">Business</Link>
                      </strong>
                      <strong>
                        {' '}
                        <Link to="/sports">Sports</Link>
                      </strong>
                      <strong>
                        {' '}
                        <Link to="/entertainment">Entertainment</Link>
                      </strong>
                      <strong>
                        {' '}
                        <Link to="/science">Science</Link>
                      </strong>
                      <strong>
                        {' '}
                        <Link to="/health">Health</Link>
                      </strong>
                    </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
