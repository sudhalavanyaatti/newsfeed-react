import React, { Component } from "react";
import{
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardLink
} from "reactstrap";
import "../App.css";
import Moment from 'react-moment';
import 'moment-timezone';



class Cards extends Component {
 

    render(){
        return (
              <Card body className="ContentItem">
                       <Row>
                       <Col md="4">
                       <CardImg
                          top
                          width="100%"
                          height="250px"
                          src={this.props.item.urlToImage}
                          alt="Card image cap"
                        />
                       </Col>
                        <Col md="8">
                        <CardBody>
                          <CardText>
                            <small align="left"><Moment fromNow>{this.props.item.publishedAt}</Moment></small>
                          </CardText>
                          <CardTitle id="dtext1"><strong>{this.props.item.title}</strong></CardTitle>
                          <CardText  id="dtext2">{this.props.item.description}</CardText>
                          <CardText align="right">__{this.props.item.author}</CardText>
                          <CardLink href={this.props.item.url}>MOre</CardLink>
                        </CardBody>
                        </Col>
                       </Row>
                      </Card>
          );
    }
  };
  
  export default Cards;