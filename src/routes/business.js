import React, {Component} from 'react';
import Header from '../components/header';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Row, Col, Card, CardBody, CardTitle, CardText, CardImg,CardLink
} from 'reactstrap';
import "../App.css";


class Business extends Component {
 
  constructor (props) {
    super (props);
    this.state = {
  
      list:[]
      
    };
  }
  componentDidMount() {
    fetch('http://localhost:9003/business', {
      method: 'get',
      body: JSON.stringify(),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then (res => res.json ())
      .then (response => {
       console.log(response);
       if (response) {
        this.setState({list:response.articles});
       
      }
      
      });
  }
  render() {
    return (
     <div>
        <div>
     <Header/>
      </div>
      <ul>
        {this.state.list.map(function(item, index) {
          return <ContentItem item={item} key={index} />
        })}
      </ul>
     </div>
    );
  }

}

const ContentItem = ({ item }) => (
 
  <Row className="ContentItem">
    <Col xs="3" />
    <Col xs="12" sm="6">
    <Card body>
                        <CardImg top width="100%" src={item.urlToImage} />
                        <CardBody>
                        <CardText>
                            <small align="left">{item.publishedAt}</small>
                          </CardText>
                          <CardTitle align="center">{item.title}</CardTitle>
                          <CardText align="center">{item.description}</CardText>
                          <CardText align="right">__{item.author}</CardText>
                          <CardLink href={item.url}>MOre</CardLink>
                          
                        </CardBody>
                      </Card>
    </Col>
  </Row>
)

export default Business;
