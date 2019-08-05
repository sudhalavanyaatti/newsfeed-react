import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-flexbox-grid';
//import {Container, Dropdown, Menu,Image} from 'semantic-ui-react';
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
                        {' '}
                        <Link to="/home">Home</Link>
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
