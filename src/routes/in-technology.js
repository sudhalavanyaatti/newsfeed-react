import React, { Component } from "react";
import Header from "../components/header";

import {
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

class InTechnology extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:9003/technology", {
      method: "get",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log(response);
        if (response) {
          this.setState({ list: response.articles });
        }
      });
  }
  render() {
    let sampleList = this.state.list;
    return (
      <div className="homebg">
        <div className="header">
          <Header />
        </div>
        <ul>
          {this.state.list.map(function(item, index) {
            if (index % 2 === 1) {
              return (
                <div key={index}>
                
                  <Row className="ContentItem" >
                    <Col xs="6" md="6" sm="6">
                      <Card body  >
                        <CardImg
                          top
                          width="100%"
                          src={sampleList[index - 1].urlToImage}
                          alt="Card image cap"
                        />
                        <CardBody>
                        <CardText>
                            <small align="left">
                              {sampleList[index - 1].publishedAt}
                            </small>
                          </CardText>
                          <CardTitle align="center">{sampleList[index - 1].title}</CardTitle>
                          <CardText align="center">
                            {sampleList[index - 1].description}
                          </CardText>
                         
                          <CardText align="right">__{sampleList[index - 1].author}</CardText>
                          <CardLink href={sampleList[index - 1].url}>
                            MOre
                          </CardLink>
                         
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xs="6" sm="6" md="6">
                      <Card body>
                        <CardImg top width="100%" src={item.urlToImage}  alt="Card image cap" />
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
                 
                </div>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default InTechnology;