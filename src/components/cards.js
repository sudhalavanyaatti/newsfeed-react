import React, { Component } from "react";
import{
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardLink
} from "reactstrap";
import "../App.css";



class Cards extends Component {
 

    render(){
        return (
            <div>
              <Card body>
                        <CardImg
                          top
                          width="100%"
                          src={this.props.item.urlToImage}
                          alt="Card image cap"
                        />
                        <CardBody>
                          <CardText>
                            <small align="left">{this.props.item.publishedAt}</small>
                          </CardText>
                          <CardTitle align="center">{this.props.item.title}</CardTitle>
                          <CardText align="center">{this.props.item.description}</CardText>
                          <CardText align="right">__{this.props.item.author}</CardText>
                          <CardLink href={this.props.item.url}>MOre</CardLink>
                        </CardBody>
                      </Card>
            </div>
          );
    }
  };
  
  export default Cards;